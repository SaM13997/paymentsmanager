import { Activity } from './components/Activity'
import { CardCarousel } from './components/CardCarousel'
import { Overview } from './components/Overview'
import Image from 'next/image'
import Header from './components/Header.jsx'
import FadeComponent from './components/FadeComponent.jsx'

export default function Home() {
	return (
		<main className="flex flex-col h-screen">
			<FadeComponent
				options={{ cascade: true, duration: 800, triggerOnce: true }}
			>
				<Header />
				<Overview />
				<CardCarousel />
				<Activity />
			</FadeComponent>
		</main>
	)
}
