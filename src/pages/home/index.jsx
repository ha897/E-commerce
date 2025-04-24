import React from 'react'
import HomeSlider from '../../components/HomeSlider'
import HomeCatSlider from '../../components/HomeCatSlider'
import { LiaShippingFastSolid } from "react-icons/lia";
import AdsBannerSlider from "../../components/AdsBannerSlider";
import AdsBannerSliderV2 from "../../components/AdsBannerSliderV2";
import BlogItem from "../../components/BlogItem";
import ProductsSlider from "../../components/ProductsSlider";
import HomeBannerV2 from "../../components/HomeSliderV2";
import BannerBoxV2 from "../../components/BannerBoxV2";

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from "react-router-dom";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

const Home = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className='py-5 w-full'>

            <HomeSlider />
            <section className="py-6">
                <div className="container flex gap-5">
                    <div className='part1 w-[70%]'>
                    <HomeBannerV2 />
                    </div>
                    {/* errr  */}
                    
                    <div className='part2 w-[30%] flex flex-col items-center justify-between gap-6'>
                    <BannerBoxV2 info="left" image="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-1.jpg"/>
                    <BannerBoxV2 info="right" image="https://serviceapi.spicezgold.com/download/1741664665391_1741497254110_New_Project_50.jpg"/>
                    </div>
                </div>

            </section>
            <HomeCatSlider />

            <section className="bg-white py-8">
                <div className="container">
                    <div className="flex items-center justify-between">
                        <div className="leftSec">
                            <h2 className="text-[20px] font-[600]">Popular Products</h2>
                            <p className="text-[14px] font-[400]">
                                Do not miss the current offers until the end of March.
                            </p>
                        </div>
                        <div className="rightSec w-[60%]">
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                variant="scrollable"
                                scrollButtons="auto"
                                aria-label="scrollable auto tabs example"
                            >
                                <Tab label="Fashon" />
                                <Tab label="Electronics" />
                                <Tab label="Bags" />
                                <Tab label="Footwear" />
                                <Tab label="Groceries" />
                                <Tab label="Beauty" />
                                <Tab label="Wellness" />
                                <Tab label="Jewellery" />
                            </Tabs>
                        </div>
                    </div>
                    <ProductsSlider items={6} />
                </div>
            </section>


            <section className='py-4 pt-2 bg-white'>
                <div className="container">
                    <div className="freeshipping w-[80%] m-auto py-4 p-4 border-2 border-[#ff5252] flex items-center justify-between rounded-md mb-7">
                        <div className="coli flex items-center gap-4">
                            <LiaShippingFastSolid className="text-[50px]" />
                            <span className="text-[20px] font-[600] uppercase">Free Shipping</span>
                        </div>
                        <div className="col2">
                            <p className="mb-0 font-[500]">Free Delivery Now On Your First Order and over $200</p>
                        </div>

                        <p className="font-bold text-[25px]">- Only $200</p>
                    </div>
                    <AdsBannerSliderV2 items={4} />
                </div>
            </section>
            <section className="py-5 bg-white pt-0">
                <div className="container">
                    <h2 className="text-[20px] font-[600]">Leatest Products</h2>
                    <ProductsSlider items={6} />
                    <AdsBannerSlider items={3} />
                </div>
            </section>
            <section className="py-5 bg-white pt-0">
                <div className="container">
                    <h2 className="text-[20px] font-[600]">Featured Products</h2>
                    <ProductsSlider items={6} />
                    <AdsBannerSlider items={2} />

                </div>
            </section>

            <section className="py-5 pb-8 bg-white pt-0">
                <div className="container">
                    <h2 className="text-[20px] font-[600] mb-4">From The Blog</h2>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={15}
                        navigation={true}
                        modules={[Navigation]}
                        className="blogSlider"
                    >
                        <SwiperSlide>
                            <BlogItem />
                        </SwiperSlide>
                        <SwiperSlide>
                            <BlogItem />
                        </SwiperSlide>
                        <SwiperSlide>
                            <BlogItem />
                        </SwiperSlide>
                        <SwiperSlide>
                            <BlogItem />
                        </SwiperSlide>
                        <SwiperSlide>
                            <BlogItem />
                        </SwiperSlide>
                        <SwiperSlide>
                            <BlogItem />
                        </SwiperSlide>
                        <SwiperSlide>
                            <BlogItem />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </div>
    )
}

export default Home;