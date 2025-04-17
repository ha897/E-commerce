import React from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaRegSquarePlus } from "react-icons/fa6";
import { FaRegSquareMinus } from "react-icons/fa6";

const CategoryPanel = (props) => {
    const [open, setOpen] = React.useState(false);
    const [submenuIndex, setSubmenuIndex] = React.useState(null);
    const [innerSubmenuIndex, setInnerSubmenuIndex] = React.useState(null);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };
    const openSubmenu = (index) => {
        if (submenuIndex === index) {
            setSubmenuIndex(null)
        } else {
            setSubmenuIndex(index)
        }
    }
    const openInnerSubmenu = (index) => {
        if (innerSubmenuIndex === index) {
            setInnerSubmenuIndex(null)
        } else {
            setInnerSubmenuIndex(index)
        }
    }
    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" className="category-panel">
            <h3 className='p-3 text-[16px] font-[500]  flex items-center justify-between'>Shop by category <IoCloseSharp onClick={toggleDrawer(false)} className='cursor-pointer text-[20px]' /></h3>
            <div className='scroll'>
                <ul className="flex flex-col justify-center gap-3 w-full">
                    {/* 0 */}
                    <li className="list-none !flex !justify-between relative">
                        <Link to="/" className="w-full link">
                            <Button className="w-full !text-[rgba(0,0,0,0.7)] text-left !flex !justify-start px-2">
                                Fashon
                            </Button>
                        </Link>
                        {submenuIndex === 0 ?
                            <FaRegSquareMinus onClick={() => openSubmenu(0)} className='absolute top-[10px] right-[10px] cursor-pointer' /> :
                            <FaRegSquarePlus onClick={() => openSubmenu(0)} className='absolute top-[10px] right-[10px] cursor-pointer' />

                        }
                    </li>
                    {submenuIndex === 0 &&
                        <ul className="flex flex-col justify-center gap-3 w-full pl-3 submenu">
                            <li className="list-none !flex !justify-between relative">
                                {/* <Link to="/"  className="link transition text-[14px] font-[500]"> */}
                                <Link to="/" className="w-full link">
                                    <Button className="w-full !text-[rgba(0,0,0,0.7)] text-left !flex !justify-start">
                                        Aparel
                                    </Button>
                                </Link>

                                {submenuIndex === 0 && innerSubmenuIndex === 0 ?
                                    <FaRegSquareMinus onClick={() => { openInnerSubmenu(0) }} className='absolute top-[10px] right-[10px]  cursor-pointer' /> :
                                    <FaRegSquarePlus onClick={() => { openInnerSubmenu(0) }} className='absolute top-[10px] right-[10px]  cursor-pointer' />
                                }
                            </li>
                            {(submenuIndex === 0 && innerSubmenuIndex === 0) &&
                                <ul className="flex flex-col justify-center gap-3 w-full pl-3">
                                    <li className="list-none !flex !justify-between relative mb-1">
                                        <Link to="/" className="link w-full !text-[rgba(0,0,0,0.7)] text-left !flex !justify-start">
                                            Smart Tables
                                        </Link>
                                    </li>
                                    <li className="list-none !flex !justify-between relative mb-1">
                                        <Link to="/" className="link w-full !text-[rgba(0,0,0,0.7)] text-left !flex !justify-start">
                                            CrepeT-Shirt
                                        </Link>
                                    </li>
                                    <li className="list-none !flex !justify-between relative mb-1">
                                        <Link to="/" className="link w-full !text-[rgba(0,0,0,0.7)] text-left !flex !justify-start">
                                            Leather Watch
                                        </Link>
                                    </li>
                                    <li className="list-none !flex !justify-between relative mb-1">
                                        <Link to="/" className="link w-full !text-[rgba(0,0,0,0.7)] text-left !flex !justify-start">
                                            Rolling Diamond
                                        </Link>
                                    </li>

                                </ul>

                            }
                    {/* 1 */}
                            <li className="list-none !flex !justify-between relative">
                                {/* <Link to="/"  className="link transition text-[14px] font-[500]"> */}
                                <Link to="/" className="w-full link">
                                    <Button className="w-full !text-[rgba(0,0,0,0.7)] text-left !flex !justify-start">
                                        Outerwear
                                    </Button>
                                </Link>

                                {submenuIndex === 0 && innerSubmenuIndex === 1 ?
                                    <FaRegSquareMinus onClick={() => { openInnerSubmenu(1) }} className='absolute top-[10px] right-[10px]  cursor-pointer' /> :
                                    <FaRegSquarePlus onClick={() => { openInnerSubmenu(1) }} className='absolute top-[10px] right-[10px]  cursor-pointer' />
                                }
                            </li>
                            {(submenuIndex === 0 && innerSubmenuIndex === 1) &&
                                <ul className="flex flex-col justify-center gap-3 w-full pl-3">
                                    <li className="list-none !flex !justify-between relative mb-1">
                                        <Link to="/" className="link w-full !text-[rgba(0,0,0,0.7)] text-left !flex !justify-start">
                                            Wooden Chair
                                        </Link>
                                    </li>
                                    <li className="list-none !flex !justify-between relative mb-1">
                                        <Link to="/" className="link w-full !text-[rgba(0,0,0,0.7)] text-left !flex !justify-start">
                                            Sneakers Shoes
                                        </Link>
                                    </li>
                                    <li className="list-none !flex !justify-between relative mb-1">
                                        <Link to="/" className="link w-full !text-[rgba(0,0,0,0.7)] text-left !flex !justify-start">
                                            Purse
                                        </Link>
                                    </li>
                                    <li className="list-none !flex !justify-between relative mb-1">
                                        <Link to="/" className="link w-full !text-[rgba(0,0,0,0.7)] text-left !flex !justify-start">
                                            Xbox Controller
                                        </Link>
                                    </li>

                                </ul>
                            }
                            {/* 2 */}
                            <li className="list-none !flex !justify-between relative">
                                {/* <Link to="/"  className="link transition text-[14px] font-[500]"> */}
                                <Link to="/" className="w-full link">
                                    <Button className="w-full !text-[rgba(0,0,0,0.7)] text-left !flex !justify-start">
                                        Footwear
                                    </Button>
                                </Link>

                                {submenuIndex === 0 && innerSubmenuIndex === 2 ?
                                    <FaRegSquareMinus onClick={() => { openInnerSubmenu(2) }} className='absolute top-[10px] right-[10px]  cursor-pointer' /> :
                                    <FaRegSquarePlus onClick={() => { openInnerSubmenu(2) }} className='absolute top-[10px] right-[10px]  cursor-pointer' />
                                }
                            </li>
                            {(submenuIndex === 0 && innerSubmenuIndex === 2) &&
                                <ul className="flex flex-col justify-center gap-3 w-full pl-3">
                                    <li className="list-none !flex !justify-between relative mb-1">
                                        <Link to="/" className="link w-full !text-[rgba(0,0,0,0.7)] text-left !flex !justify-start">
                                            Leather Watch
                                        </Link>
                                    </li>
                                    <li className="list-none !flex !justify-between relative mb-1">
                                        <Link to="/" className="link w-full !text-[rgba(0,0,0,0.7)] text-left !flex !justify-start">
                                            Cabinet Table
                                        </Link>
                                    </li>
                                    <li className="list-none !flex !justify-between relative mb-1">
                                        <Link to="/" className="link w-full !text-[rgba(0,0,0,0.7)] text-left !flex !justify-start">
                                            Headphones
                                        </Link>
                                    </li>
                                    <li className="list-none !flex !justify-between relative mb-1">
                                        <Link to="/" className="link w-full !text-[rgba(0,0,0,0.7)] text-left !flex !justify-start">
                                            Sunglasses
                                        </Link>
                                    </li>

                                </ul>
                            }
                        </ul>

                    }

                </ul>
            </div>
        </Box>
    );
    // <li></li>
    // <li></li>
    // <li></li>
    // <li></li>
    return (
        <>
            <Button onClick={toggleDrawer(true)} className={props.className}>
                {props.children}
            </Button>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </>
    );
}
export default CategoryPanel;