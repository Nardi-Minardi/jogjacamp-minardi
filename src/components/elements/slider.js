import React from 'react'
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';
import { dataSlider } from '../../libs/data';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';

const Slider = () => {
  return (
    <Swiper
      autoplay={{
        delay: 3000,
        disableOnInteraction: false
      }}
      spaceBetween={30}
      effect={'fade'}
      loop={true}
      showsPagination={false}
      modules={[EffectFade, Navigation, Pagination, Autoplay, A11y]}
      className="lg:h-[550px] xl:h-[550px] w-[100%] rounded-lg relative"
      navigation={{
        nextEl: ".custom_next",
        prevEl: ".custom_prev"
      }}
    >
      <div className="custom_prev absolute left-2 z-50 top-1/2 transform -translate-y-1/2 cursor-pointer bg-gray-800 rounded-full items-center justify-center p-2">
        <IoChevronBack className="h-5 w-5 text-white" />
      </div>
      {dataSlider.map((slider, index) => (
        <SwiperSlide key={index}>
          <div className="relative flex justify-center items-center">
            <img src={slider.image} className="rounded-lg" alt={`slider-${slider.id}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div className="absolute text-white flex flex-col items-center">
              <p className="text-4xl font-bold">{slider.title}</p>
              <div className="flex items-center gap-4">
                <span className="border-2 w-12 border-white" ></span>
                <span className="text-2xl font-bold">{slider.subtitle}</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
      <div className="custom_next absolute right-2 z-50 top-1/2 transform -translate-y-1/2 cursor-pointer bg-gray-800 rounded-full items-center justify-center p-2">
        <IoChevronForward className="h-5 w-5 text-white" />
      </div>
    </Swiper>
  )
}

export default Slider