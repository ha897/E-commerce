import React from 'react'
import HomeSlider from '../../components/HomeSlider'
import HomeCatSlider from '../../components/HomeCatSlider'
import { LiaShippingFastSolid } from "react-icons/lia";
import AdsBannerSlider from "../../components/AdsBannerSlider";

const Home = () => {
    return (
        <div className='py-5 w-full'>
            <HomeSlider />
            <HomeCatSlider />
            <section className='py-16  bg-white'>

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
                    <AdsBannerSlider items={4} />
                </div>
            </section>
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    )
}

export default Home;