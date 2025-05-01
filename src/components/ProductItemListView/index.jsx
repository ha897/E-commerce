import React from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from "react-router-dom";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import { MdOutlineShoppingCart } from "react-icons/md";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './style.css';
// import required modules
import { Navigation } from 'swiper/modules';

import Rating from '@mui/material/Rating';
import { FaRegHeart } from "react-icons/fa";
import { IoMdGitCompare } from "react-icons/io";
import { MdZoomOutMap } from "react-icons/md";

const ProductItemListView = () => {
    return (
        <div className="productItemListView flex items-center shadow-lg rounded-md overflow-hidden">
            <div className="imgWrapper w-[25%] h-[240px] overflow-hidden rounded-md relative transition">
                <Link to="/" className="w-full h-full block">
                <img
                    src="https://serviceapi.spicezgold.com/download/1742463096955_hbhb1.jpg"
                    className="w-full absolute"
                />
                <img
                    src="https://serviceapi.spicezgold.com/download/1742463096956_hbhb2.jpg"
                    className="w-full absolute"
                />
                </Link>
                {/* src="https://serviceapi.spicezgold.com/download/1742463096956_hbhb2.jpg" */}
                <span className="discount flex items-center absolute top-[10px] left-[10px] z-50 bg-primary text-white rounded-lg text-[12px] font-[500]">
                    -%10
                </span>
                {/* <span className="actions flex items-center flex-col absolute top-[15px] right-[5px] z-50 gap-2 w-[50px]"> */}
                <span className="actions duration-800 transition flex items-center flex-col absolute top-[-200px] right-[5px] z-50 gap-2 w-[40px]">
                    <Tooltip title="View Product Details" placement="left-start">
                        <Button className="!w-[35px] !h-[35px] !min-w-[35px]">
                            <FaRegHeart className="text-[18px]" />
                        </Button>
                    </Tooltip>
                    <Tooltip title="Delete" placement="left-start">
                        <Button className="!w-[35px] !h-[35px] !min-w-[35px]">
                            <IoMdGitCompare className="text-[18px]" />
                        </Button>
                    </Tooltip>
                    <Tooltip title="Delete" placement="left-start">
                        <Button className="!w-[35px] !h-[35px] !min-w-[35px]">
                            <MdZoomOutMap className="text-[18px]" />
                        </Button>
                    </Tooltip>
                </span>
            </div>
            <div className="info p-3 py-5 px-8 w-[75%] flex justify-center h-full flex-col gap-2">
                <h6 className="text-[15px] !font-[400]">
                    <Link to="/" className="link transition">
                        Soylent Green
                    </Link>
                </h6>
                <h3 className="text-[23px] title mt-1 mb-1 font-[500] text-[#000]" title="Siril Georgette Pink Color Saree with Blouse piece">
                    <Link to="/" className="link transition">
                        Siril Georgette Pink Color Saree with Blouse piece
                    </Link>
                </h3>
                <p className="text-[14px]">
                    We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire that they cannot.
                </p>
                <Rating name="size-small" defaultValue={2} size="small" readOnly />
                <div className="flex items-center gap-4">
                    <span className="oldPrice line-through text-gray-500 text-[15px] font-[500]">$58.00</span>
                    <span className="price text-primary text-[15px] font-[600]">$58.00</span>
                </div>


                <div>
                <Button className="btn-org flex gap-2">
                    <MdOutlineShoppingCart className="text-[20px]" /> Add To Cart
                </Button>
                </div>

            </div>

        </div>
    );
}
export default ProductItemListView;