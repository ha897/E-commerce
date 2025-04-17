import React from 'react'
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { RiMenu2Fill } from "react-icons/ri";
import { TfiAngleDown } from "react-icons/tfi";
// import { MdOutlineRocketLaunch } from "react-icons/md";
import { GoRocket } from "react-icons/go";
import CategoryPanel from "./CategoryPanel";
import "./style.css"
const Navigation = () => {
    // const [isOpenCategoryPanel, setIsOpenCategoryPanel] = React.useState(false);
    // const openCategoryPanel = (r) => {
    //     r
    //     setIsOpenCategoryPanel(!isOpenCategoryPanel)
    // }
    return (
        <nav className="py-2">
            {/* يمكن gap 8 */}
            <div className="container flex items-center justify-contint gap-8">
                <div className='col_1 w-[20%]'>
                    {/* <Button className="text-black gap-2 w-full" onClick={openCategoryPanel}> */}
                    <CategoryPanel className="text-black gap-2 w-full">
                        <RiMenu2Fill className='text-[18px]' /> Show By Catigories <TfiAngleDown className='text-[13px] ml-auto font-bold' />
                    </CategoryPanel>
                    {/* </Button> */}

                </div>
                <div className='col_2 w-[60%] pl-5'>
                    <ul className="flex items-center gap-3 nav">
                        <li className="list-none">
                            <Link to="/" className="link transition text-[14px] font-[500]">
                                <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.7)]">
                                    Home
                                </Button>
                            </Link>

                        </li>
                        <li className="list-none relative">
                            <Link to="/" className="text-black gap-2 link transition text-[14px] font-[500]">
                                <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.7)]">
                                    Fashion
                                </Button>
                            </Link>


                            <div className="submenu absolute top-[120%] left-[0%] min-w-[150px] bg-white shadow-md opacity-0 transition">
                                <ul>
                                    <li className="list-none w-full relative">
                                        <Link to="/" className="w-full link">
                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !flex  !justify-start !rounded-none">
                                                Women
                                            </Button>
                                        </Link>

                                        <div className="iner-submenu absolute top-[0%] min-w-[150px] bg-white shadow-md opacity-0 transition">
                                            <ul>
                                                <li className="list-none w-full">
                                                    <Link to="/" className="w-full link">
                                                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !flex  !justify-start !rounded-none">
                                                        Kurtas & Suits
                                                        </Button>
                                                    </Link>
                                                </li>
                                                <li className="list-none w-full">
                                                    <Link to="/" className="w-full link">
                                                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !flex  !justify-start !rounded-none">
                                                        Sarees
                                                        </Button>
                                                    </Link>
                                                </li>
                                                <li className="list-none w-full">
                                                    <Link to="/" className="w-full link">
                                                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !flex  !justify-start !rounded-none">
                                                        Tops
                                                        </Button>
                                                    </Link>
                                                </li>
                                                <li className="list-none w-full">
                                                    <Link to="/" className="w-full link">
                                                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !flex  !justify-start !rounded-none">
                                                        Jeans
                                                        </Button>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="list-none w-full relative">
                                        <Link to="/" className="w-full link">
                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !flex  !justify-start !rounded-none">
                                                Kids
                                            </Button>
                                        </Link>
                                    </li>
                                    <li className="list-none w-full relative">
                                        <Link to="/" className="w-full link">
                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !flex  !justify-start !rounded-none">
                                                Girls
                                            </Button>
                                        </Link>
                                        
                                        <div className="iner-submenu absolute top-[0%] min-w-[150px] bg-white shadow-md opacity-0 transition">
                                            <ul>
                                                <li className="list-none w-full">
                                                    <Link to="/" className="w-full link">
                                                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !flex  !justify-start !rounded-none">
                                                        Tops
                                                        </Button>
                                                    </Link>
                                                </li>
                                                <li className="list-none w-full">
                                                    <Link to="/" className="w-full link">
                                                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !flex  !justify-start !rounded-none">
                                                        Kurtas Sets
                                                        </Button>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="list-none w-full relative">
                                        <Link to="/" className="w-full link">
                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !flex  !justify-start !rounded-none">
                                                Boys
                                            </Button>
                                        </Link>
                                    </li>
                                    <li className="list-none w-full relative">
                                        <Link to="/" className="w-full link">
                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !flex  !justify-start !rounded-none">
                                                Men
                                            </Button>
                                        </Link>

                                        <div className="iner-submenu absolute top-[0%] min-w-[150px] bg-white shadow-md opacity-0 transition">
                                            <ul>
                                                <li className="list-none w-full">
                                                    <Link to="/" className="w-full link">
                                                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !flex  !justify-start !rounded-none">
                                                            T-shert
                                                        </Button>
                                                    </Link>
                                                </li>
                                                <li className="list-none w-full">
                                                    <Link to="/" className="w-full link">
                                                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !flex  !justify-start !rounded-none">
                                                            Jeans
                                                        </Button>
                                                    </Link>
                                                </li>
                                                <li className="list-none w-full">
                                                    <Link to="/" className="w-full link">
                                                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !flex  !justify-start !rounded-none">
                                                            Footwear
                                                        </Button>
                                                    </Link>
                                                </li>
                                                <li className="list-none w-full">
                                                    <Link to="/" className="w-full link">
                                                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !flex  !justify-start !rounded-none">
                                                            Watch
                                                        </Button>
                                                    </Link>
                                                </li>
                                                <li className="list-none w-full">
                                                    <Link to="/" className="w-full link">
                                                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !flex  !justify-start !rounded-none">
                                                            Pens
                                                        </Button>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                        </li>
                        <li className="list-none">
                            <Link to="/" className="text-black gap-2 link transition text-[14px] font-[500]">
                                <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.7)]">
                                    Electronics
                                </Button>
                            </Link>
                        </li>
                        <li className="list-none">
                            <Link to="/" className="text-black gap-2 link transition text-[14px] font-[500]">
                                <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.7)]">
                                    Bags
                                </Button>
                            </Link>
                        </li>
                        <li className="list-none">
                            <Link to="/" className="text-black gap-2 link transition text-[14px] font-[500]">
                                <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.7)]">
                                    Footwear
                                </Button>
                            </Link>
                        </li>
                        <li className="list-none">
                            <Link to="/" className="text-black gap-2 link transition text-[14px] font-[500]">
                                <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.7)]">
                                    Groceries
                                </Button>
                            </Link>
                        </li>
                        <li className="list-none">
                            <Link to="/" className="text-black gap-2 link transition text-[14px] font-[500]">
                                <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.7)]">
                                    Beauty
                                </Button>
                            </Link>
                        </li>
                        <li className="list-none">
                            <Link to="/" className="text-black gap-2 link transition text-[14px] font-[500]">
                                <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.7)]">
                                    Wellness
                                </Button>
                            </Link>
                        </li>
                        <li className="list-none">
                            <Link to="/" className="text-black gap-2 link transition text-[14px] font-[500]">
                                <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.7)]">
                                    Jewellery
                                </Button>
                            </Link>
                        </li>


                    </ul>
                </div>
                <div className='col_3 w-[20%] text-[14px] font-[500] flex items-center gap-3 mb-0 mt-0'>
                    <GoRocket className='text-[18px]' /> Free International Delivery
                </div>
            </div>
        </nav>
    )
}
export default Navigation;