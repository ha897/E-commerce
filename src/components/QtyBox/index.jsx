import React from "react";
import {useState} from "react";
import "./style.css";
import { FaAngleUp } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import Button from '@mui/material/Button';

const QtyBox = () => {
    const [qtyVal, setQtyVal] = useState(1);
    return (
        <div className="qtyBox flex items-center border-1 border-[rgba(0,0,0,0.2)] rounded-md overflow-hidden">
            <input
                type="number"
                className="w-full h-[38px] p-2 text-[15px] border-0 pl-5"
                defaultValue={qtyVal}
            />
            <div className="flex items.center flex-col justify-between h-[38px]">
                <Button onClick={()=>{setQtyVal(qtyVal+1)}} className="!w-[30px] !min-w-[30px] h-[19px] text-black">
                    <FaAngleUp />
                </Button>
                <Button onClick={()=>{qtyVal > 1 && setQtyVal(qtyVal-1)}} className="!w-[30px] !min-w-[30px] h-[19px] text-black">
                    <FaAngleDown />
                </Button>
            </div>
        </div>
    )
};

export default QtyBox;