'use client'

import React from 'react'
import { CiCirclePlus } from 'react-icons/ci'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

function QuickTransactionCarousel() {
	return (
		<Swiper
			className="overflow-x-visible !px-6"
			slidesOffsetBefore={12}
			freeMode
			slidesPerView="auto"
		>
			<SwiperSlide>
				<div className="addPersonCard w-14 h-14 bg-zinc-800 grid place-content-center text-2xl text-tert rounded-full">
					<CiCirclePlus className="stroke-[1]" />
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className="personCard border-2 rounded-full w-max border-zinc-700 p-[4px] flex items-center gap-1">
					<img
						className="w-12 h-12 rounded-full object-cover"
						src="/images/avatar1.jpg"
						alt="avatar"
					/>
					<p className="px-3">John</p>
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className="personCard border-2 rounded-full w-max border-zinc-700 p-[4px] flex items-center gap-1">
					<img
						className="w-12 h-12 rounded-full object-cover"
						src="/images/avatar2.jpg"
						alt="avatar"
					/>
					<p className="px-3">Emily</p>
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className="personCard border-2 rounded-full w-max border-zinc-700 p-[4px] flex items-center gap-1">
					<img
						className="w-12 h-12 rounded-full object-cover"
						src="/images/avatar3.jpg"
						alt="avatar"
					/>
					<p className="px-3">Alice</p>
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className="personCard border-2 rounded-full w-max border-zinc-700 p-[4px] flex items-center gap-1">
					<img
						className="w-12 h-12 rounded-full object-cover"
						src="/images/avatar4.jpg"
						alt="avatar"
					/>
					<p className="px-3">Alice</p>
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className="personCard border-2 rounded-full w-max border-zinc-700 p-[4px] flex items-center gap-1">
					<img
						className="w-12 h-12 rounded-full object-cover"
						src="/images/avatar5.jpg"
						alt="avatar"
					/>
					<p className="px-3">Alice</p>
				</div>
			</SwiperSlide>
		</Swiper>
	)
}

export default QuickTransactionCarousel
