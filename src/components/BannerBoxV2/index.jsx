import React from 'react'
import { Link } from "react-router-dom";
import "./style.css"
// info="left"
// info="right"
const BannerBoxV2 = (props) => {
    return (
            <div className="bannerBoxV2 w-full overflow-hidden rounded-md relative">
                <img src={props.image} className="block transition" />
                <div className={`infoV2 absolute p-5  ${props.info === 'left' ? 'left' : 'right'} flex flex-col items-start justify-center gap-2`}>
                    <h2 className="text-[20px] font-[600]">
                        Buy Men's Footwear with low price
                    </h2>
                    <span className="text-primary text-[25px] font-[600] f-full">$1500</span>
                    {/* <div className="w-full"> */}
                    <Link to="/" className="text-[16px] font-[600] link">SHOP NOW</Link>
                    {/* </div> */}
                    {/* Buy Apple Iphone
                    ₹45000
                    SHOP NOW */}
                </div>
            </div>
    )

}

export default BannerBoxV2;