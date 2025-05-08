import React from "react";
import Rating from "@mui/material/Rating";
import { IoClose } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

const MyListItem = () => {

  return (
      <div className="cartItem w-full p-3 flex items-center gap-4 pb-5 border-b border-[rgba(0,0,0,0.1)]">
        <div className="img w-[15%] rounded-md overflow-hidden">
          <Link
            className="group"
            href="/product/67dbde5b6e949cc6cd6576ec"
            data-discover="true"
          >
            <img
              src="https://serviceapi.spicezgold.com/download/1742462552739_siril-georgette-pink-color-saree-with-blouse-piece-product-images-rvrk9p11sk-0-202308161432.webp"
              className="block w-full group-hover:scale-105 transition"
            />
          </Link>
        </div>
        <div className="info w-[85%] lg:w-[85%] relative flex flex-col gap-2">
          <IoClose
            className="cursor-pointer absolute top-[0px] right-[0px]
                text-[22px] link transition"
          />
          <span className="text-[13px]">all about you</span>
          <h3 className="text-[13px] sm:text-[15px] w-[80%]">
            <Link
              className="link"
              href="/product/67dbde5b6e949cc6cd6576ec"
              data-discover="true"
            >
              Embroidered Satin Saree...
            </Link>
          </h3>
          <Rating name="size-small" defaultValue={2} size="small" readOnly />

          <div className="flex items-center gap-4 mt-2">
            <span className="price text-[14px] font-[600]">₹4785</span>
            <span className="oldPrice line-through text-gray-500 text-[14px] font-[500]">
              ₹5500
            </span>
            <span className="price text-primary text-[14px] font-[600]">
              13% OFF
            </span>
          </div>
          <div>
          <Button className="btn-org p-0">ADD TO CART</Button>
          </div>
        </div>
      </div>
  );
};
export default MyListItem;
