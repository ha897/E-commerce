import React, { useState } from "react"
import TextField from '@mui/material/TextField';
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
    const [showPassword, setShowPassword] = useState(true)
    return (
        <section className='section py-10'>
            <div className='container'>
                <div className='card shadow-md w-[400px] m-auto rounded-md bg-white p-5 px-10'>
                    <h3 className='text-center text-[18px] text-black'>Register with a new account</h3>
                    <form className="w-full mt-5">
                        <div className="form-group w-full mb-5 relative">
                            <TextField
                                id="name"
                                type="text"
                                label="Full Name *"
                                variant="outlined"
                                className="w-full"
                            />
                        </div>
                        <div className="form-group w-full mb-5 relative">
                            <TextField
                                id="email"
                                type="email"
                                label="Email Id *"
                                variant="outlined"
                                className="w-full gmail"
                            />
                        </div>
                        <div className="form-group w-full mb-5 relative">
                            <TextField
                                id="password"
                                label="password *"
                                type={showPassword ? "password" : "text"}
                                variant="outlined"
                                className="w-full password"
                            />
                            <Button className="showPasswordButton !absolute !rounded-full !w-[40px] !min-w-[40px] !h-[40px] !text-[#000]" onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? < IoEye className=" !text-[20px] opacity-75" /> : < IoEyeOff className=" !text-[20px] opacity-75" />}
                            </Button>
                        </div>
                        <Button className="btn-org-2 w-full mt-5 mb-5 py-3">
                            Register
                        </Button>
                        <div>
                            <div className="flex items-center justify-center gap-4 flex-col">
                                <p>Already have an account? <Link className="link text-primary cursor-pointer text-[14px] font-[600]" to="/login">Login</Link></p>
                                <p>Or continue with social account</p>
                                <Button className="!bg-[#f1f1f1] !text-[#000] w-full py-3 flex gap-2">
                                <FcGoogle className="!text-[20px]"/> SIGN UP WITH GOOGLE
                                </Button>
                            </div>


                        </div>


                    </form>
                </div>
            </div>
        </section>
    )
}
export default Register;