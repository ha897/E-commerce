import React from 'react'
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import BannerBoxV2 from "../BannerBoxV2"
const AdsBannerSliderV2 = (props) => {
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
                    <BannerBoxV2 info="left" image="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-1.jpg" link="/" />
                </SwiperSlide>
                <SwiperSlide>
                    <BannerBoxV2 info="left" image="https://serviceapi.spicezgold.com/download/1741663408792_1737020756772_New_Project_1.png" link="/" />
                </SwiperSlide>
                <SwiperSlide>
                    <BannerBoxV2 info="right" image="https://serviceapi.spicezgold.com/download/1741664665391_1741497254110_New_Project_50.jpg" link="/" />
                </SwiperSlide>
                <SwiperSlide>
                    <BannerBoxV2 info="left" image="https://serviceapi.spicezgold.com/download/1741664496923_1737020250515_New_Project_47.jpg" link="/" />
                </SwiperSlide>



            </Swiper>
        </div>
    )
}

export default AdsBannerSliderV2;