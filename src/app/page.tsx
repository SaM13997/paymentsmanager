import { CardCarousel } from './components/CardCarousel'
import { Overview } from './components/Overview'
import Image from 'next/image'
import Header from './components/Header.jsx'
import { FaAngleDown } from 'react-icons/fa'
import { FaArrowRight } from 'react-icons/fa'

export default function Home() {
	return (
		<main className="flex flex-col h-screen">
			<Header />
			<Overview />
			<CardCarousel />
			<section className="activity py-4 bg-primary flex flex-col justify-between flex-grow">
				<div className="flex justify-between items-center mx-6">
					<p className="text-2xl text-slate-200 font-medium">Activity</p>
					<FaArrowRight className="text-zinc-100 mr-[2px]" />
				</div>
				<div className="flex items-center justify-between mx-6 mb-2">
					<div className="first">
						<p className="text-slate-200 text-xl font-bold">$312</p>
						<p className="text-xs text-sec font-semibold">Daily Average</p>
					</div>
					<div className="second">
						<p className="text-slate-200 text-xl font-bold">10%</p>
						<p className="text-xs text-sec font-semibold">
							More than last week
						</p>
					</div>
					<div className="chip bg-zinc-800 font-bold flex items-center h-full px-3 rounded-full text-zinc-400 gap-1">
						<p className="text-xs">This week</p>
						<FaAngleDown />
					</div>
				</div>
			</section>
		</main>
	)
}
