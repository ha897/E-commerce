import React from 'react'
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import BannerBox from "../BannerBox"
const AdsBannerSlider = (props) => {
    return (
        <div className="py-5 w-full" >
            <Swiper
                // install Swiper modules
                // autoplay={{
                //     delay: 2500,
                //     disableOnInteraction: false,
                // }}
                slidesPerView={props.items}
                modules={[Navigation]}
                // modules={[Navigation, Autoplay]}
                spaceBetween={10}
                navigation={true}
                loop={true}
                className='smlBtn'
            >
                <SwiperSlide>
                    <BannerBox img="/banner1.webp" link="/" />
                </SwiperSlide>
                <SwiperSlide>
                    <BannerBox img="/banner2.webp" link="/" />
                </SwiperSlide>
                <SwiperSlide>
                    <BannerBox img="/banner3.webp" link="/" />
                </SwiperSlide>
                <SwiperSlide>
                    <BannerBox img="/banner4.webp" link="/" />
                </SwiperSlide>
                <SwiperSlide>
                    <BannerBox img="/banner1.webp" link="/" />
                </SwiperSlide>
                <SwiperSlide>
                    <BannerBox img="/banner2.webp" link="/" />
                </SwiperSlide>
                <SwiperSlide>
                    <BannerBox img="/banner3.webp" link="/" />
                </SwiperSlide>
                <SwiperSlide>
                    <BannerBox img="/banner4.webp" link="/" />
                </SwiperSlide>


            </Swiper>
        </div>
    )
}

export default AdsBannerSlider;