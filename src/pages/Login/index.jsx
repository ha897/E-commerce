import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext } from 'react';
import { MyContext } from '../../App';

const Login = () => {
    const [showPassword, setShowPassword] = useState(true);
  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
});

  const context = useContext(MyContext);

const handleEmailChange = (event) => {
    console.log(event.target.value)
    setFormFields(prevState => ({
      ...prevState,       
      email: event.target.value
    }));
  };
  
  const handlePasswordChange = (event) => {
    setFormFields(prevState => ({
      ...prevState,
      password: event.target.value
    }));
  };
  const history = useNavigate();

  const forgotPassword = () => {
    if (formFields.email !== "") {
      history("/verify",{ state: { email: formFields.email} });
      context.openAlertBox("OTP sent","success")
    }else{
        context.openAlertBox("enter you email","error")
    }
  };
  return (
    <section className="section py-10">
      <div className="container">
        <div className="card bg-white shadow-md w-[400px] m-auto rounded-md bg-white p-5 px-10">
          <h3 className="text-center text-[18px] text-black">
            Login to your account
          </h3>
          <form className="w-full mt-5">
            <div className="form-group w-full mb-5 relative">
              <TextField
                id="email"
                type="email"
                onChange={handleEmailChange}
                name="email"
                label="Email Id *"
                variant="outlined"
                className="w-full gmail"
              />
            </div>
            <div className="form-group w-full mb-5 relative">
              <TextField
                id="password"
                onChange={handlePasswordChange}
                name="password"
                label="password *"
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
            <a
              onClick={forgotPassword}
              className="link cursor-pointer text-[14px] font-[600]"
            >
              Forgot Password?
            </a>
            <Button className="btn-org-2 w-full mt-5 mb-5 py-3">LOGIN</Button>
            <div>
              <div className="flex items-center justify-center gap-4 flex-col">
                <p>
                  Not Registered?{" "}
                  <Link
                    className="link text-primary cursor-pointer text-[14px] font-[600]"
                    to="/register"
                  >
                    Sign Up
                  </Link>
                </p>
                <p>Or continue with social account</p>
                <Button className="!bg-[#f1f1f1] !text-[#000] w-full py-3 flex gap-2">
                  <FcGoogle className="!text-[20px]" /> LOGIN WITH GOOGLE
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Login;
