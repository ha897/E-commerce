import React, { useState, useRef } from "react";

const OtpBpx = (props) => {
  const [otp, setOtp] = useState(new Array(props.length).fill(""));
  const inputsRef = useRef([]);

  const handleChange = (element, index) => {
    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    // التنقل للخانة التالية تلقائيًا
    if (element.value && index < props.length - 1) {
      inputsRef.current[index + 1].focus();
    }
    if (props.onChange) {
      props.onChange(newOtp.join(""));
    }
  };
  return (
    <div className="flex justify-center gap-1">
      {otp.map((digit, index) => (
        <input
          id={`otp-input-${index+1}`}
          variant="outlined"
          key={index}
          maxLength="1"
          value={digit}
          onChange={(e) => handleChange(e.target, index)}
          ref={(el) => (inputsRef.current[index] = el)}
          className="!text-center !w-[43px]  !h-[43px] rounded-md text-[30px] border border-[#ccc] !outline-none"
        />
      ))}
    </div>
  );
};
export default OtpBpx;
