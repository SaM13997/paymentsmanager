import React from 'react'
import { FaArrowUp, FaArrowDown } from 'react-icons/fa'
import { IoIosMore } from 'react-icons/io'
import FadeComponent from './FadeComponent'

export function Overview({}) {
	return (
		<section className="overview p-8 px-6 flex flex-col items-start justify-center">
			<div className="balance mb-6">
				<p className="text-tert mb-2 font-semibold">Total Balance</p>
				<p className="text-4xl text-zinc-900">$69,258.00</p>
			</div>
			<div className="transactions flex items-stretch justify-between w-full">
				<FadeComponent
					options={{
						delay: 500,
						cascade: true,
					}}
				>
					<div className="send rounded-full flex items-center gap-2 p-4 px-9 border-2 border-zinc-400">
						<FaArrowUp />
						<p className="mt-[1px] text-lg">Send</p>
					</div>
					<div className="receive rounded-full flex items-center gap-2 p-4 px-9 border-2 border-zinc-400">
						<FaArrowDown />
						<p className="text-lg">Receive</p>
					</div>
					<div className="more rounded-full w-16 h-16 grid place-content-center border-2 border-zinc-400">
						<IoIosMore />
					</div>
				</FadeComponent>
			</div>
		</section>
	)
}
