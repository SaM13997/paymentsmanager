import React from 'react'
export function Card({ num }) {
	return (
		<div className=" bg-white flex rounded-2xl shadow-md overflow-hidden h-52">
			<img
				className="object-cover w-2/5 h-full object-center"
				src={`/images/card${num}.jpg`}
				alt="card image"
			/>
			<div className="info w-3/5 flex flex-col pr-4 py-4 justify-between items-end">
				<div className="name">
					<p className="text-primary text-sm">Jonathan&apos;s</p>
					<p className="text-tert text-xs text-end">Wallet</p>
				</div>
				<div className="cardNumber">
					<p className="text-tert text-sm text-right">
						**** **** **** {[2564, 1252, 2563, 7856][num - 1]}
					</p>
					<p className="text-primary text-sm text-end">
						{[8569, 5896, 3254, 2589][4 - num]}
					</p>
				</div>
				<div className="expiry">
					<p className="text-primary text-sm">12/23</p>
				</div>
			</div>
		</div>
	)
}
