import { Activity } from './components/Activity'
import { CardCarousel } from './components/CardCarousel'
import { Overview } from './components/Overview'
import Image from 'next/image'
import Header from './components/Header.jsx'

export default function Home() {
	return (
		<main className="flex flex-col h-screen">
			<Header />
			<Overview />
			<CardCarousel />
			<Activity />
		</main>
	)
}
