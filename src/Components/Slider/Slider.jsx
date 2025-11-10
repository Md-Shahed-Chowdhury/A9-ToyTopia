import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Slider.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';


const Slider = () => {
    return (
        <div className='h-100 md:h-120 lg:h-150'>
            <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='bg-[url(https://cdn.pixabay.com/photo/2019/08/08/14/26/small-child-4393088_1280.jpg)] w-full h-full bg-cover
            bg-center bg-no-repeat flex justify-center items-center font-bold text-3xl md:text-4xl lg:text-5xl text-white relative'>
            <div className='w-full h-full bg-black absolute opacity-50'></div>
            <div className='absolute'>Where every toy tells a story, and every smile begins</div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='bg-[url(https://cdn.pixabay.com/photo/2017/03/22/14/01/toys-2165123_1280.jpg)] w-full h-full bg-cover
            bg-center bg-no-repeat flex justify-center items-center font-bold text-3xl md:text-4xl lg:text-5xl text-white relative'>
            <div className='w-full h-full bg-black absolute opacity-50'></div>
            <div className='absolute'>Let imagination build the world — one toy at a time</div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='bg-[url(https://cdn.pixabay.com/photo/2016/09/10/15/45/marbles-1659398_1280.jpg)] w-full h-full bg-cover
            bg-center bg-no-repeat flex justify-center items-center font-bold text-3xl md:text-4xl lg:text-5xl text-white relative'>
            <div className='w-full h-full bg-black absolute opacity-50'></div>
            <div className='absolute'>Play. Dream. Discover. The joy of childhood lives here</div>
            </div>
        </SwiperSlide>
        
      </Swiper>
        </div>
    );
};

export default Slider;