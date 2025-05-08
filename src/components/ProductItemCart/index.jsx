import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import { IoClose } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const ProductItemCart = (props) => {
  const [productSize, setProductSize] = useState(props.size);
  const [productQty, setProductQty] = useState(props.qty);

  const [anchorElQty, setAnchorElQty] = useState(null);
  const openQtyMenu = Boolean(anchorElQty);
  const handleClickQty = (event) => {
    setAnchorElQty(event.currentTarget);
  };
  const handleCloseQty = () => {
    setAnchorElQty(null);
  };

  const [anchorElSize, setAnchorElSize] = useState(null);
  const openSizeMenu = Boolean(anchorElSize);
  const handleClickSize = (event) => {
    setAnchorElSize(event.currentTarget);
  };
  const handleCloseSize = () => {
    setAnchorElSize(null);
  };
  return (
    <>
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
          <div className="flex items-center gap-3 mt-2">
            <div className="relative">
              <span
                onClick={handleClickSize}
                className="flex items-center justify-center bg-[#f1f1f1] text-[11px] font-[600] py-1 px-2 rounded-md cursor-pointer"
              >
                Size: {productSize}
                <IoMdArrowDropdown />
              </span>
            </div>
            <div className="relative">
              <span
                onClick={handleClickQty}
                className="flex items-center justify-center bg-[#f1f1f1] text-[11px] font-[600] py-1 px-2 rounded-md cursor-pointer"
              >
                Qty: {productQty}
                <IoMdArrowDropdown />
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4 mt-2">
            <span className="price text-[14px] font-[600]">₹4785</span>
            <span className="oldPrice line-through text-gray-500 text-[14px] font-[500]">
              ₹5500
            </span>
            <span className="price text-primary text-[14px] font-[600]">
              13% OFF
            </span>
          </div>
        </div>
      </div>
      <Menu
        id="qty-menu"
        anchorEl={anchorElQty}
        open={openQtyMenu}
        onClose={handleCloseQty}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          className="w-[100px]"
          onClick={() => {
            handleCloseQty();
            setProductQty(1);
          }}
        >
          1
        </MenuItem>
        <MenuItem
          className="w-[100px]"
          onClick={() => {
            handleCloseQty();
            setProductQty(2);
          }}
        >
          2
        </MenuItem>
        <MenuItem
          className="w-[100px]"
          onClick={() => {
            handleCloseQty();
            setProductQty(3);
          }}
        >
          3
        </MenuItem>
      </Menu>
      <Menu
        id="size-menu"
        anchorEl={anchorElSize}
        open={openSizeMenu}
        onClose={handleCloseSize}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          className="w-[100px]"
          onClick={() => {
            handleCloseSize();
            setProductSize("S");
          }}
        >
          S
        </MenuItem>
        <MenuItem className="w-[100px]" onClick={() => {
            handleCloseSize();
            setProductSize("M");
          }}>
          M
        </MenuItem>
        <MenuItem className="w-[100px]" onClick={() => {
            handleCloseSize();
            setProductSize("L");
          }}>
          L
        </MenuItem>
        <MenuItem className="w-[100px]" onClick={() => {
            handleCloseSize();
            setProductSize("XL");
          }}>
          XL
        </MenuItem>
      </Menu>
    </>
  );
};
export default ProductItemCart;
