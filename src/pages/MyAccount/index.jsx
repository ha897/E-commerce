import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "./style.css";
import { IoCloudUploadOutline } from "react-icons/io5";
import TextField from "@mui/material/TextField";
import { NavLink } from "react-router-dom";
import ProfileSidebar from "../../components/ProfileSidebar"
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
const MyAccount = () => {
  const [phone, setPhone] = useState("+968 799 898 81");

  return (
    <section className="section py-10">
      <div className="container flex gap-3">
      <ProfileSidebar/>
        <div className="card bg-white shadow-md w-[600px]  rounded-md bg-white p-5 h-fit">
          <h2 className="font-[600] p-2 pt-0 text-[16px] border-b border-[#0000001f]">
            My Profile
          </h2>
          <form className="p-4 py-2 flex gap-4 flex-col">
            <div className="flex justify-between">
              <TextField
                required
                className="w-[49%]"
                name="name"
                id="name"
                size="small"
                label="Required"
                defaultValue="Hamdan Ahmed Al shihy"
              />
              <TextField
                disabled
                className="w-[49%]"
                id="email"
                name="email"
                type="email"
                size="small"
                label="Disabled"
                defaultValue="alshihy.567a@gmail.com"
              />
            </div>
            <div className="!w-[49%]">
              <PhoneInput
                className="phone-number-field"
                // country={"us"}
                name="phone_number"
                id="phone_number"
                value={phone}
                onChange={(phone) => setPhone(phone)}
              />
            </div>
            <div className="flex gap-2">
              <Button className="btn-org">UPDATE PROFILE</Button>
              <Link to="">
                <Button className="btn-org-3">CHANGE PASSWORD</Button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default MyAccount;
