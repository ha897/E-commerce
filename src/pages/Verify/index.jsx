import React,{useState} from "react";
import Button from "@mui/material/Button";
import OtpBox from "../../components/OtpBox";
import { useLocation } from 'react-router-dom';

const Verify = () => {
    const data = useLocation();
    const email = data.state.email;
    const [otp, setOtp]=useState(null)

    const verifyOtp = (event)=>{
        event.preventDefault()
        alert(otp)
    }
  return (
    <section className="section py-10">
      <div className="container">
        <div className="card bg-white shadow-md w-[400px] m-auto rounded-md bg-white p-8 px-10 flex flex-col gap-4 justify-center items-center">
          <img  src="/verify3.png" className="block !w-[80px]" alt="verify img"/>
          <h3 className="text-center text-[18px] text-black">
            Verify OTP
          </h3>
          <p>
          OTP send to <span className="text-primary font-[600]">{email}</span>
          </p>
          <form onSubmit={verifyOtp} className="flex flex-col gap-4 justify-center items-center">
          <OtpBox length={6} onChange={setOtp}/>
          <Button type="submit" className="w-full btn-org">verify</Button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Verify;
