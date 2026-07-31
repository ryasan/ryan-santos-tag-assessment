import { useState } from 'react'
import './product-card.css'

const currencyFormatter = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD',
	minimumFractionDigits: 2,
})

export default function ProductCard({ product, priority = false }) {
	const formattedPrice = currencyFormatter.format(product.price)
	const displaySwatches = product.swatches.slice(0, 5)
	const [selectedSwatchId, setSelectedSwatchId] = useState(product.selectedSwatchId)
	const nameId = `product-name-${product.id}`

	return (
		<article className="product-card" aria-labelledby={nameId}>
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
					alt=""
					aria-hidden="true"
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
							<h2 id={nameId}>{product.name}</h2>
							<p>{product.subtitle}</p>
						</div>
						<p className="product-card__price">{formattedPrice}</p>
					</div>

					<div className="product-card__swatches" role="group" aria-label="Color options">
						{displaySwatches.map((swatch) => {
							const isSelected = swatch.id === selectedSwatchId

							return (
								<button
									key={swatch.id}
									type="button"
									className={`product-card__swatch${isSelected ? ' product-card__swatch--selected' : ''}`}
									style={{ '--swatch-color': swatch.color }}
									aria-label={`Select color ${swatch.colorName}`}
									aria-pressed={isSelected}
									title={swatch.colorName}
									onClick={() => setSelectedSwatchId(swatch.id)}
								/>
							)
						})}

						{product.additionalSwatchesCount > 0 && (
							<span
								className="product-card__swatch-count"
								aria-label={`${product.additionalSwatchesCount} more colors`}
							>
								+{product.additionalSwatchesCount}
							</span>
						)}
					</div>
				</div>

				<button
					type="button"
					className="product-card__add-to-cart"
					aria-label={`Add ${product.name} to cart`}
				>
					Add To Cart
				</button>
			</div>
		</article>
	)
}
