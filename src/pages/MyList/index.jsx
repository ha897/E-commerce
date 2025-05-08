import React from "react";
import MyListItem from "../../components/MyListItem";

import { Link } from "react-router-dom";
import "./style.css";
import { IoCloudUploadOutline } from "react-icons/io5";
import TextField from "@mui/material/TextField";
import { NavLink } from "react-router-dom";
import ProfileSidebar from "../../components/ProfileSidebar";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
const MyList = () => {
  return (
    <section className="section py-10">
      <div className="container flex gap-3">
        <ProfileSidebar />
        <div className="card bg-white shadow-md w-full rounded-md bg-white p-5 h-fit">
            <div className="py-5 px-3 border-b border-[rgba(0,0,0,0.1)]">
              <h2>Your List</h2>
              <p className="mt-0 mb-0">
                There are <span className="font-bold text-primary">2</span>{" "}
                products in your list
              </p>
            </div>
            <MyListItem />
            <MyListItem/>
          </div>
      </div>
    </section>
  );
};
export default MyList;
