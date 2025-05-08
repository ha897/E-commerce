import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext } from 'react';
import { MyContext } from '../../App';

const ForgotPassword = () => {
    const [showPassword, setShowPassword] = useState(true);
    const [showPassword2, setShowPassword2] = useState(true);


  const context = useContext(MyContext);


  
  
  const history = useNavigate();


  return (
    <section className="section py-10">
      <div className="container">
        <div className="card bg-white shadow-md w-[400px] m-auto rounded-md bg-white p-5 px-10">
          <h3 className="text-center text-[18px] text-black">
            forgot Password
          </h3>
          <form className="w-full mt-5">
            <div className="form-group w-full mb-5 relative">
              <TextField
                id="password"
                name="password"
                label="new password *"
                type={showPassword ? "password" : "text"}
                variant="outlined"
                className="w-full password"
              />
              <Button
                className="showPasswordButton !absolute !rounded-full !w-[40px] !min-w-[40px] !h-[40px] !text-[#000]"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <IoEye className=" !text-[20px] opacity-75" />
                ) : (
                  <IoEyeOff className=" !text-[20px] opacity-75" />
                )}
              </Button>
            </div>
            <div className="form-group w-full mb-5 relative">
              <TextField
                id="password"
                name="password"
                label="confirm password *"
                type={showPassword2 ? "password" : "text"}
                variant="outlined"
                className="w-full password"
              />
              <Button
                className="showPasswordButton !absolute !rounded-full !w-[40px] !min-w-[40px] !h-[40px] !text-[#000]"
                onClick={() => setShowPassword2(!showPassword2)}
              >
                {showPassword ? (
                  <IoEye className=" !text-[20px] opacity-75" />
                ) : (
                  <IoEyeOff className=" !text-[20px] opacity-75" />
                )}
              </Button>
            </div>

            <Button className="btn-org-2 w-full mb-5 py-3">CHANGE PASSWORD</Button>
            <div>

            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default ForgotPassword;
