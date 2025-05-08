import React from "react";
import Button from "@mui/material/Button";
import { IoCloudUploadOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import "react-phone-input-2/lib/style.css";

const ProfileSidebar = () => {
  return (
    <div className="card bg-white shadow-md w-[250px]  rounded-md bg-white">
      <div className="flex items-center justify-center flex-col  p-5">
        <div className="w-fit h-fit relative">
          <img
            src="./profile.png"
            className="block w-[110px] h-[110px] object-cover rounded-full mb-5"
          />
          <div className="profile-img-cover opacity-0 w-[110px] h-[110px] rounded-full z-50 flex items-center justify-center">
            <IoCloudUploadOutline className="!text-[#fff] !text-[35px]" />
          </div>
        </div>
        <h3>حمدان الشحي</h3>
        <h6 className="text-[13px] font-[500]">alshihy.567a@gmail.com</h6>
      </div>
      <div>
        <ul className="list-none pb-5 bg-[#f1f1f1] myAccountTabs text-[13px]">
          <li className="w-full">
            <NavLink to="/my-account" className="link" activeclassname="active">
              <Button className=" btn-gray w-full !text-left !justify-start !capitalize  flex items-center gap-2">
                My Profile
              </Button>
            </NavLink>
          </li>
          {/* <li className="w-full">
            <NavLink to="/address" className="link" activeclassname="active">
              <Button className="btn-gray w-full !text-left !justify-start !capitalize  flex items-center gap-2">
                Address
              </Button>
            </NavLink>
          </li> */}
          <li className="w-full">
            <NavLink to="/my-list" className="link" activeclassname="active">
              <Button className="btn-gray w-full !text-left !justify-start !capitalize  flex items-center gap-2">
                My List
              </Button>
            </NavLink>
          </li>
          <li className="w-full">
            <NavLink to="/my-orders" className="link" activeclassname="active">
              <Button className="btn-gray w-full !text-left !justify-start !capitalize  flex items-center gap-2">
                My Orders
              </Button>
            </NavLink>
          </li>
          <li className="w-full">
            <Button className="btn-gray w-full !text-left !justify-start !capitalize  flex items-center gap-2">
              Logout
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileSidebar;
