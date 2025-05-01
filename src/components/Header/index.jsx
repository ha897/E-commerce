import React from 'react'
import { Link } from "react-router-dom";
import Search from "../Search";
import Button from '@mui/material/Button';
import './style.css';

import Stack from '@mui/material/Stack';
// import MailIcon from '@mui/icons-material/Mail';
import { CiMail } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";

import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { MdOutlineShoppingCart } from "react-icons/md";

import { IoMdGitCompare } from "react-icons/io";
import Tooltip from '@mui/material/Tooltip';
import Navigation from './Navigation';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
        padding: '0 4px',
    },
}));
const Header = () => {
    return (
        <header className="bg-white">
            <div className="top-strip py-2 border-t-[1px] border-b-[1px] border-gray">
                <div className="container">
                    <div className="flex items-center justify-between">
                        <div className="col1 w-[50%]">
                            <p className="text-[12px] font-[500]">Get up to 50% off new season styles, limited time only</p>
                        </div>
                        <div className="col2 flex items-center justify-end">
                            <ul className="flex items-center gap-3">
                                <li className="list-none">
                                    <Link to="/help-center" className="text-[13px] link font-[500] transition">help center</Link>

                                </li>
                                <li className="list-none">
                                    <Link to="/help-center" className="text-[13px] link font-[500] transition">Order Tracking</Link>

                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
            <div className="header py-4 border-b-[1px] border-gray">
                <div className="container flex items-center justify-between">
                    <div className="col1 w-[25%]">
                        <Link to={"/"}><img src="/logo.jpg" /></Link>
                    </div>
                    <div className="col2 w-[45%]">
                        <Search />
                    </div>
                    <div className="col3 w-[30%] flex items-center">
                        <ul className="flex items-center gap-3 w-full justify-end">
                            <li className="list-none">
                                {/* if no use sing-in delete */}
                                <Link className="sing-in link transition text-[15px] font-[500]" to="/login">Sign In</Link> | <Link className="link transition text-[15px] font-[500]" to="/register">Regester</Link>
                            </li>
                            <li className="list-none">
                                <Tooltip title="Compare">

                                    <IconButton aria-label="cart">
                                        <StyledBadge badgeContent={4} color="secondary">
                                            <IoMdGitCompare />
                                        </StyledBadge>
                                    </IconButton>
                                </Tooltip>

                            </li>

                            <li className="list-none">
                                <Tooltip title="Wishlist">
                                    <IconButton aria-label="cart">
                                        <StyledBadge badgeContent={4} color="secondary">
                                            <FaRegHeart />
                                        </StyledBadge>
                                    </IconButton>
                                </Tooltip>

                            </li>
                            <li className="list-none">
                                <Tooltip title="Cart">
                                    <IconButton aria-label="cart">
                                        <StyledBadge badgeContent={4} color="secondary">
                                            <MdOutlineShoppingCart />
                                        </StyledBadge>
                                    </IconButton>
                                </Tooltip>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
            <Navigation/>
        </header>
    )
}

export default Header;