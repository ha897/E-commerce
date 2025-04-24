import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from "react-router-dom";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

const HomeCatSlider = () => {
    return (
        <div className="homeCatSlider pt-4 py-8">
            <div className="container">

                <Swiper
                    slidesPerView={7}
                    spaceBetween={10}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <Link to="/" className="text-black no-underline">
                        <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                        <img src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png" className="transition w-[60px]" />
                            <h3 className="text-[16px] font-[500] mt-3">Fashon</h3>
                        </div>
                        </Link>

                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to="/" className="text-black no-underline">
                        <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                        <img src="https://serviceapi.spicezgold.com/download/1741660988059_ele.png" className="transition w-[60px]" />
                            <h3 className="text-[16px] font-[500] mt-3">Electronics</h3>
                        </div>
                        </Link>

                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to="/" className="text-black no-underline">
                        <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                        <img src="https://serviceapi.spicezgold.com/download/1741661045887_bag.png" className="transition w-[60px]" />
                            <h3 className="text-[16px] font-[500] mt-3">Bags</h3>
                        </div>
                        </Link>

                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to="/" className="text-black no-underline">
                        <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                        <img src="https://serviceapi.spicezgold.com/download/1741661061379_foot.png" className="transition w-[60px]" />
                            <h3 className="text-[16px] font-[500] mt-3">Footwear</h3>
                        </div>
                        </Link>

                    </SwiperSlide>

                    <SwiperSlide>
                        <Link to="/" className="text-black no-underline">
                        <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                        <img src="https://serviceapi.spicezgold.com/download/1741661077633_gro.png" className="transition w-[60px]" />
                            <h3 className="text-[16px] font-[500] mt-3">Groceries</h3>
                        </div>
                        </Link>

                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to="/" className="text-black no-underline">
                        <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                        <img src="https://serviceapi.spicezgold.com/download/1741661092792_beauty.png" className="transition w-[60px]" />
                            <h3 className="text-[16px] font-[500] mt-3">Beauty</h3>
                        </div>
                        </Link>

                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to="/" className="text-black no-underline">
                        <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                        <img src="https://serviceapi.spicezgold.com/download/1741661105893_well.png" className="transition w-[60px]" />
                            <h3 className="text-[16px] font-[500] mt-3">Wellness</h3>
                        </div>
                        </Link>

                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to="/" className="text-black no-underline">
                        <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                        <img src="https://serviceapi.spicezgold.com/download/1741661120743_jw.png" className="transition w-[60px]" />
                            <h3 className="text-[16px] font-[500] mt-3">Jewellery</h3>
                        </div>
                        </Link>

                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default HomeCatSlider;