'use client'

import { Card } from './Card'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { useSwiper } from 'swiper/react'

export function CardCarousel({}) {
	const swiperInstance = useSwiper()
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
		<section className="cards py-5 overflow-x-visible bg-primary min-h-72 mt-28 w-full">
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
						<Card image="card1" />
					</SwiperSlide>
					<SwiperSlide>
						<Card image="card2" />
					</SwiperSlide>
					<SwiperSlide>
						<Card image="card3" />
					</SwiperSlide>
					<SwiperSlide>
						<Card image="card4" />
					</SwiperSlide>
				</Swiper>
			</div>
		</section>
	)
}
