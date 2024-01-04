import Image from 'next/image'
import { SlPieChart } from 'react-icons/sl'
import { PiNutLight } from 'react-icons/pi'
import { SlGrid } from 'react-icons/sl'
import { FaArrowUp, FaArrowDown } from 'react-icons/fa'
import { IoIosMore } from 'react-icons/io'

export default function Home() {
	return (
		<main>
			<header className="bg-red-100 p-4 px-6 flex items-center justify-between">
				<div className="flex gap-3  items-center">
					<img
						src="https://t.ly/wwMqv"
						alt="user avatar"
						className="w-12 h-12 rounded-full object-cover "
					/>
					<div className="flex-col -gap-1 flex">
						<p className="text-sm text-zinc-500 font-semibold">Good Morning</p>
						<p className="font-semibold text-sm">Lexi</p>
					</div>
				</div>
				<div className="icons flex gap-4 text-zinc-500 text-xl font-semibold items-center py-2">
					<SlPieChart className="rotate-90" />
					<PiNutLight className="text-2xl" />
					<SlGrid />
				</div>
			</header>
			<section className="overview p-8 flex flex-col items-start justify-center">
				<div className="balance mb-6">
					<p className="text-zinc-500 mb-2 font-semibold">Total Balance</p>
					<p className=" text-4xl">$69,258.00</p>
				</div>
				<div className="transactions flex items-center justify-between w-full">
					<div className="send rounded-full flex items-center gap-2 p-4 px-8 border-2 border-zinc-400">
						<FaArrowUp />
						<p className="mt-[1px]">Send</p>
					</div>
					<div className="receive rounded-full flex items-center gap-2 p-4 px-8 border-2 border-zinc-400">
						<FaArrowDown />
						<p>Receive</p>
					</div>
					<div className="more rounded-full flex items-center max-w-fit gap-2 p-4 border-2 border-zinc-400">
						<IoIosMore />
					</div>
				</div>
			</section>
			<section className="cards"></section>
			<section className="quick-transaction"></section>
			<section className="activity"></section>
		</main>
	)
}
