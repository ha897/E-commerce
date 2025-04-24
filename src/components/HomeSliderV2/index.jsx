import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './style.css';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

import Button from '@mui/material/Button';

const HomeBannerV2 = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                loop={true}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                modules={[EffectFade, Autoplay, Navigation, Pagination]}
                className="mySwiperV2 w-full"
            >
                <SwiperSlide>
                    <div className='swiperSlide-item w-full rounded-md overflow-hidden relative'>
                        <img className='w-full block' src="https://serviceapi.spicezgold.com/download/1742439896581_1737036773579_sample-1.jpg" />

                        <div className="info transition absolute w-[50%] h-[100%] z-50 p-8 flex items-center justify-center flex-col">
                            <h4 className="text-[18px] font-[500] text-left w-full mb-3">Big Saving Days Sale</h4>
                            <h2 className="text-[35px] font-[700] w-full">
                                Women Solid Round
                                Green T-shirt
                            </h2>
                            <h3 className="text-[18px] font-[500] text-left w-full mt-3 mb-3 flex items-center gap-3">
                                Standring At Only <span className="text-primary text-[30px] font-[700]">$59.00</span>
                            </h3>
                            <div className="w-full">
                            <Button className="btn-org">SHOP NOW</Button>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='swiperSlide-item w-full rounded-md overflow-hidden'>
                        <img className='w-full block' src="https://serviceapi.spicezgold.com/download/1742441193376_1737037654953_New_Project_45.jpg" />
                        <div className="info transition absolute w-[50%] h-[100%] z-50 p-8 flex items-center justify-center flex-col">
                            <h4 className="text-[18px] font-[500] text-left w-full mb-3">Big Saving Days Sale</h4>
                            <h2 className="text-[35px] font-[700] w-full">
                                Buy Modern Phone In
                                Pink color
                            </h2>
                            <h3 className="text-[18px] font-[500] text-left w-full mt-3 mb-3 flex items-center gap-3">
                                Standring At Only <span className="text-primary text-[30px] font-[700]">$1999.00</span>
                            </h3>
                            <div className="w-full">
                            <Button className="btn-org">SHOP NOW</Button>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}





export default HomeBannerV2;