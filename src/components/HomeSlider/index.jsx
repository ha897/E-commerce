import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import './style.css';

import {Autoplay, Navigation } from 'swiper/modules';

const HomeSlider = () => {
    return (
        <div className="sliderHome py-3 w-full">
            <div className="container">
                <Swiper
                    // install Swiper modules
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                    modules={[Navigation, Autoplay]}
                    spaceBetween={10}
                    navigation={true}
                    loop={true}
                    className="mySwiperHome"
                >
                    <SwiperSlide>
                        <div className="item rounded-[20px] overflow-hidden">
                            <img src="https://serviceapi.spicezgold.com/download/1741660907985_NewProject.jpg" alt="banner slide" className="w-full" />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="item rounded-[20px] overflow-hidden">
                            <img src="https://serviceapi.spicezgold.com/download/1741660777364_NewProject(12).jpg" alt="banner slide" className="w-full" />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="item rounded-[20px] overflow-hidden">
                            <img src="https://serviceapi.spicezgold.com/download/1741660862304_NewProject(8).jpg" alt="banner slide" className="w-full" />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="item rounded-[20px] overflow-hidden">
                            <img src="https://serviceapi.spicezgold.com/download/1741660881858_NewProject(11).jpg" alt="banner slide" className="w-full" />
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </div>
    )
}





export default HomeSlider;