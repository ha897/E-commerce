import React from "react"
import { useState } from "react"
import CategoryCollapse from "../CategoryCollapse"
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Collapse } from 'react-collapse';
import { FaAngleDown } from "react-icons/fa6";
import Button from '@mui/material/Button';
import { FaAngleUp } from "react-icons/fa6";

import RangeSlider from 'react-range-slider-input';
import Rating from '@mui/material/Rating';

// import '../../react-range-slider-input/dist/style.css';
import '../../../node_modules/react-range-slider-input/dist/style.css';

import "./style.css"
const Sidebar = () => {
    const [isOpenCategoryFilter, setIsOpenCategoryFilter] = useState(true)
    const [isOpenAvilabilityFilter, setIsOpenAvilabilityFilter] = useState(true)
    const [isOpenSizeFilter, setIsOpenSizeFilter] = useState(true)
    const [rangeFilterByPrice, setRangeFilterByPrice] = useState([0, 1000])

    const changeMaxRange = (newMax) => {
        setRangeFilterByPrice(prev => [prev[0], newMax]);
    };

    const changeMinRange = (newMin) => {
        setRangeFilterByPrice(prev => [newMin, prev[1]]);
    };
    const handlerSliderChange = (values) => {
        const [newMinRange, newMaxRange] = values;

        // if(rangeFilterByPrice[0] > newMinRange) {
        changeMinRange(newMinRange)
        // }else if(rangeFilterByPrice[1] < newMaxRange) {
        changeMaxRange(newMaxRange)
        // }/
    }
    return (
        <aside className="sidebar py-5">
            <div className="box">
                <h3 className="w-full mb-3 text-[16px] font-[600] flex items-center">Category
                    <Button className="!text-[#000] !w-[30px] !h-[30px] !min-w-[30px] !rounded-full ml-auto" onClick={() => setIsOpenCategoryFilter(!isOpenCategoryFilter)}>
                        {isOpenCategoryFilter === true ? <FaAngleUp /> : <FaAngleDown />}

                    </Button>
                </h3>
                {/* <CategoryCollapse/> */}
                <Collapse isOpened={isOpenCategoryFilter}>
                    <div className="scroll scroll-gray relative flex flex-col">
                        <FormControlLabel control={<Checkbox size="small" />} label="Fashion" className="w-full ml-2px" />
                        <FormControlLabel control={<Checkbox size="small" />} label="Electronics" className="w-full ml-2px" />
                        <FormControlLabel control={<Checkbox size="small" />} label="Bags" className="w-full ml-2px" />
                        <FormControlLabel control={<Checkbox size="small" />} label="Footwear" className="w-full ml-2px" />
                        <FormControlLabel control={<Checkbox size="small" />} label="Groceries" className="w-full ml-2px" />
                        <FormControlLabel control={<Checkbox size="small" />} label="Beauty" className="w-full ml-2px" />
                        <FormControlLabel control={<Checkbox size="small" />} label="Wellness" className="w-full ml-2px" />
                        <FormControlLabel control={<Checkbox size="small" />} label="Jewellery" className="w-full ml-2px" />
                    </div>
                </Collapse>
            </div>

            <div className="box">
                <h3 className="w-full mb-3 text-[16px] font-[600] flex items-center">Avilable
                    <Button className="!text-[#000] !w-[30px] !h-[30px] !min-w-[30px] !rounded-full ml-auto" onClick={() => setIsOpenAvilabilityFilter(!isOpenAvilabilityFilter)}>
                        {isOpenAvilabilityFilter === true ? <FaAngleUp /> : <FaAngleDown />}

                    </Button>
                </h3>
                {/* <CategoryCollapse/> */}
                <Collapse isOpened={isOpenAvilabilityFilter}>
                    <div className="scroll scroll-gray relative flex flex-col">
                        <FormControlLabel
                            control={<Checkbox size="small" />}
                            label="Avilable (17)"
                            className="w-full ml-2px"
                        />
                        <FormControlLabel
                            control={<Checkbox size="small" />}
                            label="In Stuck (10)"
                            className="w-full ml-2px"
                        />
                        <FormControlLabel
                            control={<Checkbox size="small" />}
                            label="Not Avilable (17)"
                            className="w-full ml-2px"
                        />
                    </div>
                </Collapse>
            </div>

            <div className="box mt-3">
                <h3 className="w-full mb-3 text-[16px] font-[600] flex items-center">Size
                    <Button className="!text-[#000] !w-[30px] !h-[30px] !min-w-[30px] !rounded-full ml-auto" onClick={() => setIsOpenSizeFilter(!isOpenSizeFilter)}>
                        {isOpenSizeFilter === true ? <FaAngleUp /> : <FaAngleDown />}

                    </Button>
                </h3>
                {/* <CategoryCollapse/> */}
                <Collapse isOpened={isOpenSizeFilter}>
                    <div className="scroll scroll-gray relative flex flex-col">
                        <FormControlLabel
                            control={<Checkbox size="small" />}
                            label="Small (17)"
                            className="w-full ml-2px"
                        />
                        <FormControlLabel
                            control={<Checkbox size="small" />}
                            label="Medium (10)"
                            className="w-full ml-2px"
                        />
                        <FormControlLabel
                            control={<Checkbox size="small" />}
                            label="Large (17)"
                            className="w-full ml-2px"
                        />
                        <FormControlLabel
                            control={<Checkbox size="small" />}
                            label="XL (17)"
                            className="w-full ml-2px"
                        />
                        <FormControlLabel
                            control={<Checkbox size="small" />}
                            label="XXL (17)"
                            className="w-full ml-2px"
                        />

                    </div>
                </Collapse>
            </div>
            <div className="box mt-4">
                <h3 className="w-full mb-3 text-[16px] font-[600] flex items-center pr-5">
                    Filter By Price
                </h3>
                <RangeSlider defaultValue={[0, 1000]} min={0} max={1000} onInput={handlerSliderChange} />
                <div className="flex pt-4 pb-2 priceRange">
                    <span className="text-[13px]">
                        From: <strong className="text-dark">Rs: {rangeFilterByPrice[0]}</strong>
                    </span>
                    <span className="ml-auto text-[13px]">
                        To: <strong className="text-dark">Rs: {rangeFilterByPrice[1]}</strong>
                    </span>
                </div>

            </div>
            <div className="box mt-4">
                <h3 className="w-full mb-3 text-[16px] font-[600] flex items-center pr-5">
                    Filter By Rating
                </h3>
                <div className="w-full">
                    <Rating name="size-small" defaultValue={5} size="small" readOnly />
                </div>

                <div className="w-full">
                    <Rating name="size-small" defaultValue={4} size="small" readOnly />
                </div>

                <div className="w-full">
                    <Rating name="size-small" defaultValue={3} size="small" readOnly />
                </div>

                <div className="w-full">
                    <Rating name="size-small" defaultValue={2} size="small" readOnly />
                </div>

                <div className="w-full">
                    <Rating name="size-small" defaultValue={1} size="small" readOnly />
                </div>



            </div>


        </aside>

    )
}
export default Sidebar;