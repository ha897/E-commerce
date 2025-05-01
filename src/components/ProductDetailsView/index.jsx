import React, { useState } from 'react'
import { Rating } from '@mui/material';
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoGitCompareOutline } from "react-icons/io5";
import QtyBox from "../QtyBox";
import ProductZoom from "../ProductZoom";
import Button from '@mui/material/Button';

const ProductDetailsView = () => {
    const [productActionIndex, setProductActionIndex] = useState(null);

    return (
        <div className="container flex gap-8 items-center">
            <div className="productZoomContainer flex py-4 gap-2 !w-[30%]">
                <ProductZoom src="https://serviceapi.spicezgold.com/download/1742463096955_hbhb1.jpg" />
            </div>
            <div className="productContent !w-[68%] pr-10 pl-10">
                <h1 className="text-[24px] font-[#698] mb-2">Chikankari Moven Kurta</h1>
                <div className="flex items-center gap-3">
                    <span className="text-gray-400 text-[13px]">
                        Brand: <span className="font-[500] text-black opacity-75">House of Chikankari</span>
                    </span>

                    <Rating name="size-small" defaultValue={4} size="small" readOnly />
                    <span className="text-[13px] cursor-pointer">Review (5)</span>
                </div>
                <div className="flex items-center gap-4 mt-4">
                    <span className="oldPrice line-through text-gray-500 text-[20px] font-[500]">
                        $58.00
                    </span>
                    <span className="price text-primary text-[20px] font-[600]">
                        $58.00
                    </span>
                    <span className="text-[14px]">Avilable In Stock: <span className="text-green-600 font-[700]">23 Item</span></span>
                </div>

                <p className="mt-3 pr-10 mb-5">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type
                    specimen book. It has survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged.
                </p>
                <div className="flex items-center gap-3">
                    <span className="text-[16px]">Size:</span>
                    <div className="flex items-center gap-1 actions">
                        <Button className={productActionIndex === 0 && "bg-primary text-white"} onClick={() => setProductActionIndex(0)}>S</Button>
                        <Button className={productActionIndex === 1 && "bg-primary text-white"} onClick={() => setProductActionIndex(1)}>M</Button>
                        <Button className={productActionIndex === 2 && "bg-primary text-white"} onClick={() => setProductActionIndex(2)}>L</Button>
                        <Button className={productActionIndex === 3 && "bg-primary text-white"} onClick={() => setProductActionIndex(3)}>XL</Button>
                    </div>
                </div>
                <p className="text-[14px] mt-5 mb-2 text-[#000]">
                    Free Shipping <span>(Est. Delivery Time 2-3 Days)</span>
                </p>

                <div className="flex items-center gap-4 py-4">
                    <div className="qtyBoxWrapper !w-[70px]">
                        <QtyBox />
                    </div>
                    <Button className="btn-org flex gap-2">
                        <MdOutlineShoppingCart className="text-[20px]" /> Add To Cart
                    </Button>
                </div>
                <div className="flex items-center gap-4 mt-4">
                    <span className="flex items-center gap-2 text-[15px] link cursor-pointer font-[500]">
                        <FaRegHeart className="text-[18px]" /> Add to Wishlist
                    </span>

                    <span className="flex items-center gap-2 text-[15px] link cursor-pointer font-[500]">
                        <IoGitCompareOutline className="text-[18px]" /> Add to Compare
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailsView;