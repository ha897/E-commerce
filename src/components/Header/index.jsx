import React from "react";
import { Link } from "react-router-dom";
import Search from "../Search";
import Button from "@mui/material/Button";
import "./style.css";

import Stack from "@mui/material/Stack";
// import MailIcon from '@mui/icons-material/Mail';
import { CiMail } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";

import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { MdOutlineShoppingCart } from "react-icons/md";

import { IoMdGitCompare } from "react-icons/io";
import Tooltip from "@mui/material/Tooltip";
import Navigation from "./Navigation";
import { useContext } from "react";
import { MyContext } from "../../App";
import { FaRegUser } from "react-icons/fa";

import CartPanel from "./Navigation/CartPanel";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { VscAccount } from "react-icons/vsc";
import { IoLocationOutline } from "react-icons/io5";
import { IoBagCheckOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoLogOutOutline } from "react-icons/io5";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: "0 4px",
  },
}));
const Header = () => {
  const context = useContext(MyContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <header className="bg-white">
      <div className="top-strip py-2 border-t-[1px] border-b-[1px] border-gray">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="col1 w-[50%]">
              <p className="text-[12px] font-[500]">
                Get up to 50% off new season styles, limited time only
              </p>
            </div>
            <div className="col2 flex items-center justify-end">
              <ul className="flex items-center gap-3">
                <li className="list-none">
                  <Link
                    to="/help-center"
                    className="text-[13px] link font-[500] transition"
                  >
                    help center
                  </Link>
                </li>
                <li className="list-none">
                  <Link
                    to="/help-center"
                    className="text-[13px] link font-[500] transition"
                  >
                    Order Tracking
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="header py-4 border-b-[1px] border-gray">
        <div className="container flex items-center justify-between">
          <div className="col1 w-[25%]">
            <Link to={"/"}>
              <img src="/logo.jpg" />
            </Link>
          </div>
          <div className="col2 w-[45%]">
            <Search />
          </div>
          <div className="col3 w-[30%] flex items-center">
            <ul className="flex items-center gap-3 w-full justify-end">
              {context.isLogin === false ? (
                <li className="list-none">
                  {/* if no use sing-in delete */}
                  <Link
                    className="sing-in link transition text-[15px] font-[500]"
                    to="/login"
                  >
                    Sign In
                  </Link>{" "}
                  |{" "}
                  <Link
                    className="link transition text-[15px] font-[500]"
                    to="/register"
                  >
                    Regester
                  </Link>
                </li>
              ) : (
                <>
                  <Button
                    className="flex gap-2 !h-fit p-1 z-50"
                    onClick={handleClick}
                  >
                    <div className="!bg-[#e5e7eb] flex items-center justify-center w-[35px] h-[35px]  rounded-full !text-[#000] !font-[300]">
                      <FaRegUser />
                    </div>
                    <div className="info flex flex-col justify-center text-left !text-[#434343]">
                      <h4 className="!text-[11px]">hamdan</h4>
                      <span className="!text-[11px]">
                        alshihy.567a@gmail.com
                      </span>
                    </div>
                  </Button>

                  <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    slotProps={{
                      paper: {
                        elevation: 0,
                        sx: {
                          overflow: "visible",
                          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                          mt: 1.5,
                          "& .MuiAvatar-root": {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                          },
                          "&::before": {
                            content: '""',
                            display: "block",
                            position: "absolute",
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: "background.paper",
                            transform: "translateY(-50%) rotate(45deg)",
                            zIndex: 0,
                          },
                        },
                      },
                    }}
                    transformOrigin={{ horizontal: "right", vertical: "top" }}
                    anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                  >
                    <Link className="link" to="/my-account">
                      <MenuItem
                        onClick={handleClose}
                        className="!text-[14px] flex gap-2"
                      >
                        <VscAccount className="!font-[300] text-[23px]" />
                        my account
                      </MenuItem>
                    </Link>
                    {/* <Link className="link" >
                      <MenuItem
                        onClick={handleClose}
                        className="!text-[14px] flex gap-2"
                      >
                        <IoLocationOutline className="!font-[300] text-[23px]" />
                        address
                      </MenuItem>
                    </Link> */}
                    <Link className="link" >
                      <MenuItem
                        onClick={handleClose}
                        className="!text-[14px] flex gap-2"
                      >
                        <IoBagCheckOutline className="!font-[300] text-[23px]" />
                        orders
                      </MenuItem>
                    </Link>
                    <Link className="link" >
                    <MenuItem
                      onClick={handleClose}
                      className="!text-[14px] flex gap-2"
                      >
                      <IoMdHeartEmpty className="!font-[300] text-[23px]" />
                      my list
                    </MenuItem>
                      </Link>
                    <Link className="link" >
                    <MenuItem
                      onClick={handleClose}
                      className="!text-[14px] flex gap-2"
                      >
                      <IoLogOutOutline className="!font-[300] text-[23px]" />
                      logout
                    </MenuItem>
                      </Link>
                  </Menu>
                </>
              )}
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
                <CartPanel className="text-black gap-2 w-full">
                  <Tooltip title="Cart">
                    <IconButton aria-label="cart">
                      <StyledBadge badgeContent={4} color="secondary">
                        <MdOutlineShoppingCart />
                      </StyledBadge>
                    </IconButton>
                  </Tooltip>
                </CartPanel>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
