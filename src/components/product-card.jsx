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
			{/* Image Area */}
			<div className="product-card__image">
				{/* Badges */}
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
					alt={`${product.name} in ${product.subtitle}`}
					className="product-card__img"
					width={242}
					height={242}
					decoding="async"
					loading={priority ? 'eager' : 'lazy'}
					fetchPriority={priority ? 'high' : 'auto'}
				/>
			</div>

			{/* Info Area */}
			<div className="product-card__info">
				<div className="product-card__name-price">
					<div className="product-card__name-group">
						<h3>{product.name}</h3>
						<p>{product.subtitle}</p>
					</div>
					<p className="product-card__price">{formattedPrice}</p>
				</div>

				{/* Swatches */}
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
						<span className="product-card__swatch-count">+{product.additionalSwatchesCount}</span>
					)}
				</div>
			</div>
		</article>
	)
}
