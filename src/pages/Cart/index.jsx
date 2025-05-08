import React from "react";
import Rating from "@mui/material/Rating";
import { IoClose } from "react-icons/io5";
import Button from "@mui/material/Button";
import ProductItemCart from "../../components/ProductItemCart";
import { IoMdArrowDropdown } from "react-icons/io";
import { BsBagCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <section className="section py-4 lg:py-8 pb-10">
      <div className="container w-[80%] max-w-[80%] flex gap-5">
        {/* <div className="container w-[80%] max-w-[80%] flex"> */}
        <div className="leftPart !w-[70%] !max-w-[70%]">
          <div className="shadow-md rounded-md bg-white">
            <div className="py-5 px-3 border-b border-[rgba(0,0,0,0.1)]">
              <h2>Your Cart</h2>
              <p className="mt-0 mb-0">
                There are <span className="font-bold text-primary">2</span>{" "}
                products in your cart
              </p>
            </div>
            <ProductItemCart size="M" qty={1}/>
            <ProductItemCart size="M" qty={1}/>
          </div>
        </div>
        <div className="rightPart !w-[30%] !max-w-[30%]">
        <div className="shadow-md rounded-md bg-white p-5 sticky top-[155px] z-[90] flex flex-col gap-1">
            <h3 className="pb-3">Cart Totals</h3>
            <hr />
            <p className="flex items-center justify-between">
              <span className="text-[14px] font-[500]">Subtotal</span>
              <span className="text-primary font-bold">₹6,784.00</span>
            </p>
            <p className="flex items-center justify-between">
              <span className="text-[14px] font-[500]">Shipping</span>
              <span className="font-bold">Free</span>
            </p>
            <p className="flex items-center justify-between">
              <span className="text-[14px] font-[500]">Estimate for</span>
              <span className="font-bold"></span>
            </p>
            <p className="flex items-center justify-between">
              <span className="text-[14px] font-[500]">Total</span>
              <span className="text-primary font-bold">₹6,784.00</span>
            </p>
            <br />
            <Link to="/checkout" data-discover="true">
              <Button
                className="btn-org btn-lg w-full flex gap-2"
                tabIndex="0"
                type="button"
              >
                <BsBagCheckFill />
                Checkout<span className="MuiTouchRipple-root css-4mb1j7"></span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Cart;
