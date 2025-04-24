import React from "react"
import {useState} from "react"
import CategoryCollapse from "../CategoryCollapse"
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Collapse } from 'react-collapse';
import { FaAngleDown } from "react-icons/fa6";
import Button from '@mui/material/Button';

import "./style.css"
const Sidebar = () => {
    const [isOpenCategoryFilter ,setIsOpenCategoryFilter ] =useState(true)
    
    return (
        <aside className="sidebar py-5">
            <div className="box1">
                <h3 className="w-full mb-3 text-[16px] font-[600] flex items-center">Shop by Category 
                    <Button className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full ml-auto" onClick={() => setIsOpenCategoryFilter(!isOpenCategoryFilter)}>
                        <FaAngleDown/>
                    </Button>
                </h3>
                {/* <CategoryCollapse/> */}
                <Collapse isOpened={isOpenCategoryFilter}>
                    <div className="scroll1 relative flex flex-col">

                        <FormControlLabel control={<Checkbox size="small" />} label="Fashion" className="" />
                        <FormControlLabel control={<Checkbox size="small" />} label="Electronics" className="" />
                        <FormControlLabel control={<Checkbox size="small" />} label="Bags" className="" />
                        <FormControlLabel control={<Checkbox size="small" />} label="Footwear" className="" />
                        <FormControlLabel control={<Checkbox size="small" />} label="Groceries" className="" />
                        <FormControlLabel control={<Checkbox size="small" />} label="Beauty" className="" />
                        <FormControlLabel control={<Checkbox size="small" />} label="Wellness" className="" />
                        <FormControlLabel control={<Checkbox size="small" />} label="Jewellery" className="" />
                    </div>
                </Collapse>

            </div>
        </aside>

    )
}
export default Sidebar;