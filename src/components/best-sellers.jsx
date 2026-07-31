import { useCallback, useEffect, useState } from 'react'
import { products } from '../data/products'
import useEmblaCarousel from 'embla-carousel-react'
import ProductCard from './product-card'
import './best-sellers.css'

function ChevronLeftIcon() {
	return (
		<svg
			className="best-sellers__nav-icon"
			width="16"
			height="16"
			viewBox="0 0 16 16"
			fill="none"
			aria-hidden="true"
			focusable="false"
		>
			<path
				d="M10 3L5 8L10 13"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	)
}

function ChevronRightIcon() {
	return (
		<svg
			className="best-sellers__nav-icon"
			width="16"
			height="16"
			viewBox="0 0 16 16"
			fill="none"
			aria-hidden="true"
			focusable="false"
		>
			<path
				d="M6 3L11 8L6 13"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	)
}

export default function BestSellers() {
	const [emblaRef, emblaApi] = useEmblaCarousel({
		dragFree: true,
		containScroll: 'trimSnaps',
		align: 'start',
	})
	const [canScrollPrev, setCanScrollPrev] = useState(false)
	const [canScrollNext, setCanScrollNext] = useState(false)

	const updateScrollState = useCallback((api) => {
		setCanScrollPrev(api.canScrollPrev())
		setCanScrollNext(api.canScrollNext())
	}, [])

	useEffect(() => {
		if (!emblaApi) return

		updateScrollState(emblaApi)
		emblaApi.on('reInit', updateScrollState).on('select', updateScrollState)

		return () => {
			emblaApi.off('reInit', updateScrollState).off('select', updateScrollState)
		}
	}, [emblaApi, updateScrollState])

	const scrollPrev = useCallback(() => {
		emblaApi?.scrollPrev()
	}, [emblaApi])

	const scrollNext = useCallback(() => {
		emblaApi?.scrollNext()
	}, [emblaApi])

	return (
		<section className="best-sellers" aria-labelledby="best-sellers-heading">
			<header className="best-sellers__header">
				<h2 id="best-sellers-heading">Best Sellers</h2>
				<a href="/collections/best-sellers" className="best-sellers__shop-all">
					Shop All
				</a>
			</header>

			<div className="best-sellers__carousel">
				<div className="best-sellers__viewport" ref={emblaRef}>
					<div className="best-sellers__container">
						{products.map((product, index) => (
							<div className="best-sellers__slide" key={product.id}>
								<ProductCard product={product} priority={index < 4} />
							</div>
						))}
					</div>
				</div>

				<div className="best-sellers__nav" role="group" aria-label="Best Sellers carousel">
					<button
						type="button"
						className="best-sellers__nav-button"
						aria-label="Previous products"
						onClick={scrollPrev}
						disabled={!canScrollPrev}
					>
						<ChevronLeftIcon />
					</button>
					<button
						type="button"
						className="best-sellers__nav-button"
						aria-label="Next products"
						onClick={scrollNext}
						disabled={!canScrollNext}
					>
						<ChevronRightIcon />
					</button>
				</div>
			</div>
		</section>
	)
}
