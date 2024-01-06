'use client'

import { Card } from './Card'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import QuickTransactionCarousel from './QuickTransactionCarousel'

export function CardCarousel({}) {
	function handleSlidePadding(swiper) {
		if (swiper.isBeginning) {
			const swiperSlide = document.querySelector('.swiper-slide')
			swiperSlide.style.marginLeft = '-3rem'
		} else {
			const swiperSlide = document.querySelector('.swiper-slide')
			swiperSlide.style.marginLeft = '-1.5rem'
		}
		if (swiper.isEnd) {
			const swiperSlide = document.querySelector('.swiper-slide')
			swiperSlide.style.marginLeft = '0'
		}
	}
	return (
		<section className="cards py-5 overflow-x-visible bg-primary mt-28 w-full border-b-2 border-zinc-700">
			<div className="swiper-parent overflow-x-visible ">
				<Swiper
					className="-mt-32 overflow-x-visible"
					spaceBetween={12}
					centeredSlides
					slidesPerView={1.3}
					slidesOffsetBefore={25}
					slidesOffsetAfter={25}
					onSlideChange={handleSlidePadding}
				>
					<SwiperSlide>
						<Card num="1" />
					</SwiperSlide>
					<SwiperSlide>
						<Card num="2" />
					</SwiperSlide>
					<SwiperSlide>
						<Card num="3" />
					</SwiperSlide>
					<SwiperSlide>
						<Card num="4" />
					</SwiperSlide>
				</Swiper>
			</div>
			<section className="quick-transaction mt-8  ">
				<p className="text-2xl text-slate-200 mx-6 mb-4 font-medium">
					Quick Transaction
				</p>
				<div className="quick-transaction-carousel mb-2 text-slate-200">
					<QuickTransactionCarousel />
				</div>
			</section>
		</section>
	)
}
