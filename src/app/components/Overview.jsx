import React from 'react'
import { FaArrowUp, FaArrowDown } from 'react-icons/fa'
import { IoIosMore } from 'react-icons/io'

export function Overview({}) {
	return (
		<section className="overview p-8 px-6 flex flex-col items-start justify-center">
			<div className="balance mb-6">
				<p className="text-tert mb-2 font-semibold">Total Balance</p>
				<p className="text-4xl text-zinc-900">$69,258.00</p>
			</div>
			<div className="transactions flex items-stretch justify-between w-full">
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
	)
}
