import { CardCarousel } from './components/CardCarousel'
import { Overview } from './components/Overview'
import Image from 'next/image'
import Header from './components/Header.jsx'

export default function Home() {
	return (
		<main>
			<Header />
			<Overview />
			<CardCarousel />
			<section className="quick-transaction"></section>
			<section className="activity"></section>
		</main>
	)
}
