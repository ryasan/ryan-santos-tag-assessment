const imgClog = '/images/products/clog-shoe.avif'
const imgClogAlt =
	'Black leather Professional clog with a brass buckle, side product photo'
const imgClogHover = '/images/products/person-wearing-clog-shoes.avif'
const imgClogHoverAlt =
	'Person wearing black leather Professional clogs with grey socks, lifestyle photo'

const swatches = [
	{ id: 's1', color: '#BF8B67', colorName: 'Honey Distressed' },
	{ id: 's2', color: '#DFC878', colorName: 'Walnut' },
	{ id: 's3', color: '#D0C3BD', colorName: 'Espresso' },
	{ id: 's4', color: '#4C3529', colorName: 'Black' },
	{ id: 's5', color: '#DCE8F0', colorName: 'White' },
]

export const products = [
	{
		id: 'p1',
		name: 'Professional',
		subtitle: 'Honey Distressed',
		price: 155,
		primaryImage: imgClog,
		primaryImageAlt: imgClogAlt,
		hoverImage: imgClogHover,
		hoverImageAlt: imgClogHoverAlt,
		swatches,
		selectedSwatchId: 's4',
		additionalSwatchesCount: 12,
	},
	{
		id: 'p2',
		name: 'Professional',
		subtitle: 'Honey Distressed',
		price: 155,
		primaryImage: imgClog,
		primaryImageAlt: imgClogAlt,
		hoverImage: imgClogHover,
		hoverImageAlt: imgClogHoverAlt,
		swatches,
		selectedSwatchId: 's4',
		additionalSwatchesCount: 12,
	},
	{
		id: 'p3',
		name: 'Professional',
		subtitle: 'Honey Distressed',
		price: 155,
		primaryImage: imgClog,
		primaryImageAlt: imgClogAlt,
		hoverImage: imgClogHover,
		hoverImageAlt: imgClogHoverAlt,
		badges: [
			{ text: 'New', type: 'new' },
			{ text: 'Sale', type: 'sale' },
		],
		swatches,
		selectedSwatchId: 's4',
		additionalSwatchesCount: 12,
	},
	{
		id: 'p4',
		name: 'Professional',
		subtitle: 'Honey Distressed',
		price: 155,
		primaryImage: imgClog,
		primaryImageAlt: imgClogAlt,
		hoverImage: imgClogHover,
		hoverImageAlt: imgClogHoverAlt,
		badges: [
			{ text: 'New', type: 'new' },
			{ text: 'Sale', type: 'sale' },
		],
		swatches,
		selectedSwatchId: 's4',
		additionalSwatchesCount: 12,
	},
	{
		id: 'p5',
		name: 'Professional',
		subtitle: 'Honey Distressed',
		price: 155,
		primaryImage: imgClog,
		primaryImageAlt: imgClogAlt,
		hoverImage: imgClogHover,
		hoverImageAlt: imgClogHoverAlt,
		swatches,
		selectedSwatchId: 's4',
		additionalSwatchesCount: 12,
	},
	{
		id: 'p6',
		name: 'Professional',
		subtitle: 'Honey Distressed',
		price: 155,
		primaryImage: imgClog,
		primaryImageAlt: imgClogAlt,
		hoverImage: imgClogHover,
		hoverImageAlt: imgClogHoverAlt,
		badges: [
			{ text: 'New', type: 'new' },
			{ text: 'Sale', type: 'sale' },
		],
		swatches,
		selectedSwatchId: 's4',
		additionalSwatchesCount: 12,
	},
]
