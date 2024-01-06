import React from 'react'
export function Card({ image }) {
	return (
		<div className=" bg-white flex rounded-2xl shadow-md overflow-hidden h-52">
			<img
				className="object-cover w-2/5 h-full object-center"
				src={`/images/${image}.jpg`}
				alt="card image"
			/>
			<div className="info w-3/5 flex flex-col pr-4 py-4 justify-between items-end">
				<div className="name">
					<p className="text-primary text-sm">Jonathan's</p>
					<p className="text-tert text-xs text-end">Wallet</p>
				</div>
				<div className="cardNumber">
					<p className="text-tert text-sm">
						**** **** **** {Math.floor(1000 + Math.random() * 9000)}
					</p>
					<p className="text-primary text-sm text-end">
						{Math.floor(1000 + Math.random() * 9000)}
					</p>
				</div>
				<div className="expiry">
					<p className="text-primary text-sm">12/23</p>
				</div>
			</div>
		</div>
	)
}
