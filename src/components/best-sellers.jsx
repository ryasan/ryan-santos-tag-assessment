import useEmblaCarousel from 'embla-carousel-react'
import { products } from '../data/products'
import ProductCard from './product-card'
import './best-sellers.css'

export default function BestSellers() {
	// Initialize Embla.
	// 'dragFree' allows users to stop dragging anywhere.
	// 'containScroll' keeps the items aligned nicely at the edges.
	const [emblaRef] = useEmblaCarousel({
		dragFree: true,
		containScroll: 'trimSnaps',
		align: 'start',
	})

	return (
		<section className="best-sellers" aria-labelledby="best-sellers-heading">
			{/* Header */}
			<header className="best-sellers__header">
				<h2 id="best-sellers-heading">Best Sellers</h2>
				<a href="/collections/best-sellers" className="best-sellers__shop-all">
					Shop All
				</a>
			</header>

			{/* Embla Carousel */}
			<div className="best-sellers__viewport" ref={emblaRef}>
				<div className="best-sellers__container">
					{products.map((product, index) => (
						<div className="best-sellers__slide" key={product.id}>
							<ProductCard product={product} priority={index < 4} />
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
