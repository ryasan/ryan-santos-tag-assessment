import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import BestSellers from './components/best-sellers'
import './styles/global.css'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<main className="page">
			<BestSellers />
		</main>
	</StrictMode>,
)
