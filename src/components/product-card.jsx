import './product-card.css'

const currencyFormatter = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD',
	minimumFractionDigits: 2,
})

export default function ProductCard({ product, priority = false }) {
	const formattedPrice = currencyFormatter.format(product.price)
	const displaySwatches = product.swatches.slice(0, 5)

	return (
		<article className="product-card">
			<div className="product-card__image">
				{product.badges?.length > 0 && (
					<div className="product-card__badges">
						{product.badges.map((badge) => (
							<span
								key={badge.type}
								className={`product-card__badge product-card__badge--${badge.type}`}
							>
								{badge.text}
							</span>
						))}
					</div>
				)}

				<img
					src={product.primaryImage}
					alt={product.primaryImageAlt}
					className="product-card__img product-card__img--primary"
					width={242}
					height={242}
					decoding="async"
					loading={priority ? 'eager' : 'lazy'}
					fetchPriority={priority ? 'high' : 'auto'}
				/>
				<img
					src={product.hoverImage}
					alt={product.hoverImageAlt}
					className="product-card__img product-card__img--hover"
					width={329}
					height={494}
					decoding="async"
					loading="lazy"
				/>
			</div>

			<div className="product-card__body">
				<div className="product-card__info">
					<div className="product-card__name-price">
						<div className="product-card__name-group">
							<h3>{product.name}</h3>
							<p>{product.subtitle}</p>
						</div>
						<p className="product-card__price">{formattedPrice}</p>
					</div>

					<div className="product-card__swatches">
						{displaySwatches.map((swatch) => {
							const isSelected = swatch.id === product.selectedSwatchId

							return (
								<button
									key={swatch.id}
									type="button"
									className="product-card__swatch"
									style={{ '--swatch-color': swatch.color }}
									aria-label={`Select color ${swatch.colorName}`}
									aria-pressed={isSelected}
									title={swatch.colorName}
								/>
							)
						})}

						{product.additionalSwatchesCount > 0 && (
							<span className="product-card__swatch-count">
								+{product.additionalSwatchesCount}
							</span>
						)}
					</div>
				</div>

				<button type="button" className="product-card__add-to-cart">
					Add To Cart
				</button>
			</div>
		</article>
	)
}
