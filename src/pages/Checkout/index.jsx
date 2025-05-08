import React, { useState } from "react";
import Button from "@mui/material/Button";
import { BsBagCheckFill } from "react-icons/bs";
import TextField from "@mui/material/TextField";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Checkout = () => {
  const [phone, setPhone] = useState("");

  return (
    <section className="section w-[90%] m-auto">
      <div className="flex w-full container justify-between py-4 mb-7 gap-2">
        <div className="w-[79%] border border-[#0000001f] rounded-md p-3  shadow-md bg-white flex flex-col h-fit">
          <h2 className="font-[600] p-2 text-[16px]">Belling Details</h2>
          {/* before */}
          {/* <h2 className="font-[600] p-2 text-[16px]">
            Select Delivery Address
          </h2>
           <div className="flex flex-col items-center justify-center gap-2 py-8 pt-10">
            <img src="/map.png" width="100" />
            <h2 className="font-[600] text-[16px]">
              No Addresses found in your account!
            </h2>
            <p>Add a delivery address.</p>
            <div className="m-auto">
              <Button className="btn-org">ADD ADDRESS</Button>
            </div>
          </div> */}
          <form className="flex flex-col gap-3 get-location pb-4">
            <span className="w-full flex justify-between">
              <TextField
                size="small"
                id="name"
                name="name"
                label="Full Name *"
                variant="outlined"
                className="w-[49%]"
              />
              <TextField
                size="small"
                id="country"
                name="country"
                label="Country *"
                variant="outlined"
                className="w-[49%]"
              />
            </span>
            <span>
              <h2 className="font-[600] p-2 text-[16px]">Street Adress *</h2>
              <TextField
                size="small"
                id="street_name"
                name="street_name"
                label="House number and street name *"
                variant="outlined"
                className="w-full mb-2 p-2"
              />
              <TextField
                size="small"
                id="street_name2"
                label="Apartment, suite, unit, etc. (optional)"
                name="street_name2"
                variant="outlined"
                className="w-full"
              />
            </span>
            <span>
              <h2 className="font-[600] p-2 text-[16px]">Town /City *</h2>
              <TextField
                size="small"
                id="city"
                name="city"
                label="City *"
                variant="outlined"
                className="w-full"
              />
            </span>
            <span>
              <h2 className="font-[600] p-2 text-[16px]">Street / Country *</h2>
              <TextField
                size="small"
                id="street"
                name="street"
                label="street *"
                variant="outlined"
                className="w-full"
              />
            </span>
            <span>
              <h2 className="font-[600] p-2 text-[16px]">Postcode / ZIP *</h2>
              <TextField
                size="small"
                id="zipcode"
                name="zipcode"
                label="ZIP Code *"
                variant="outlined"
                className="w-full"
              />
            </span>
            <h2 className="font-[600] p-2 text-[16px]">
              Phone Number And email *
            </h2>
            <span className="w-full flex justify-between">
              <span className="w-[50%]">
                <PhoneInput
                  className="phone-number-field"
                  country={"us"}
                  name="phone_number"
                  id="phone_number"
                  value={phone}
                  onChange={(phone) => setPhone(phone)}
                />
              </span>
              <TextField
                size="small"
                id="email"
                type="email"
                name="email"
                label="Email *"
                variant="outlined"
                className="w-[49%]"
              />
            </span>
          </form>
        </div>
        <div className="w-[29%] border border-[#0000001f] rounded-md p-3 shadow-md bg-white h-fit">
          <h2 className="font-[600] p-2 text-[16px] border-b border-[#0000001f]">
            Your Order
          </h2>
          <p className=" flex p-2 justify-between border-b border-[#0000001f]">
            <span>Product</span>
            <span>Subtotal</span>
          </p>

          <div className="mb-5 scroll scroll-gray max-h-[250px] overflow-y-scroll overflow-x-hidden  pr-2 m-2">
            <div className="flex items-center justify-between py-2">
              <div className="part1 flex items-center gap-3">
                <div className="img w-[50px] h-[50px] object-cover overflow-hidden rounded-md group cursor-pointer">
                  <img
                    src="https://serviceapi.spicezgold.com/download/1742462729828_zoom_0-1673275594.webp"
                    className="w-full transition-all group-hover:scale-105"
                  />
                </div>
                <div className="info">
                  <h4
                    className="text-[14px]"
                    title="Men Pure Cotton Striped Casual Shirt"
                  >
                    Men Pure Cotton Stri...
                  </h4>
                  <span className="text-[13px]">Qty : 1</span>
                </div>
              </div>
              <span className="text-[14px] font-[500]">₹1,999.00</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <div className="part1 flex items-center gap-3">
                <div className="img w-[50px] h-[50px] object-cover overflow-hidden rounded-md group cursor-pointer">
                  <img
                    src="https://serviceapi.spicezgold.com/download/1742462909156_gdgd1.jpg"
                    className="w-full transition-all group-hover:scale-105"
                  />
                </div>
                <div className="info">
                  <h4
                    className="text-[14px]"
                    title="Men Comfort Cuban Collar Solid Polycotton Casual Shirt"
                  >
                    Men Comfort Cuban Co...
                  </h4>
                  <span className="text-[13px]">Qty : 1</span>
                </div>
              </div>
              <span className="text-[14px] font-[500]">₹1,850.00</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <div className="part1 flex items-center gap-3">
                <div className="img w-[50px] h-[50px] object-cover overflow-hidden rounded-md group cursor-pointer">
                  <img
                    src="https://serviceapi.spicezgold.com/download/1742463096955_hbhb1.jpg"
                    className="w-full transition-all group-hover:scale-105"
                  />
                </div>
                <div className="info">
                  <h4 className="text-[14px]" title="Men Opaque Casual Shirt">
                    Men Opaque Casual Sh...
                  </h4>
                  <span className="text-[13px]">Qty : 1</span>
                </div>
              </div>
              <span className="text-[14px] font-[500]">₹1,450.00</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <div className="part1 flex items-center gap-3">
                <div className="img w-[50px] h-[50px] object-cover overflow-hidden rounded-md group cursor-pointer">
                  <img
                    src="https://serviceapi.spicezgold.com/download/1742462485033_siril-poly-silk-grey-off-white-color-saree-with-blouse-piece-product-images-rvcpwdyagl-0-202304220521.webp"
                    className="w-full transition-all group-hover:scale-105"
                  />
                </div>
                <div className="info">
                  <h4
                    className="text-[14px]"
                    title="Embellished Embroidered Saree"
                  >
                    Embellished Embroide...
                  </h4>
                  <span className="text-[13px]">Qty : 1</span>
                </div>
              </div>
              <span className="text-[14px] font-[500]">₹1,955.00</span>
            </div>
          </div>
          <div className="flex items-center flex-col gap-3 mb-2">
            <Button className="btn-org flex gap-2 w-full">
              <BsBagCheckFill /> CHECKOUT
            </Button>
            <Button className="btn-org flex gap-2 w-full">
              <BsBagCheckFill />
            </Button>
            <Button className="!bg-[#363636] !text-[#fff] hover:!bg-[#000] transition flex gap-2 w-full">
              <BsBagCheckFill /> CASH ON DELIVRY
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Checkout;
