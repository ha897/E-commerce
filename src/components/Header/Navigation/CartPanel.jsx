import React from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
import { IoCloseSharp } from "react-icons/io5";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";

const CartPanel = (props) => {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box sx={{ width: 400 }} role="presentation" className="category-panel">
            <>
                <div className="flex items-center justify-between py-3 px-4 gap-3 border-b border-[rgba(0,0,0,0.1)] overflow-hidden">
                    <h4 className='p-3 text-[16px] font-[500]  flex items-center justify-between w-full'>
                        Shopping Cart (0)<IoCloseSharp onClick={toggleDrawer(false)} className='cursor-pointer text-[20px]' />
                    </h4>
                </div>
                <div className="flex items-center justify-between h-[89vh] flex-col">
                    {/* <img src="/empty-cart.png" className="w-[150px]" />
                    <h4>Your Cart is currently empty</h4>
                    <Button className="btn-org">
                        Continue Shopping
                    </Button> */}
                    <div className="scroll w-full h-[calc(75%_-_140px)] overflow-y-scroll overflow-x-hidden pt-3 px-4">
                        <div className="cartItem w-full flex items-center gap-4 border-b border-[rgba(0,0,0,0.1)] py-2">
                            <div className="img w-[25%] overflow-hidden h-[80px] rounded-md">
                                <Link className="block group" to="/product/67dbde5b6e949cc6cd6576ec" data-discover="true">
                                    <img
                                        src="https://serviceapi.spicezgold.com/download/1742462552739_siril-georgette-pink-color-saree-with-blouse-piece-product-images-rvrk9p11sk-0-202308161432.webp"
                                        className="w-full group-hover:scale-105 transition"
                                        alt="product"
                                    />
                                </Link>
                            </div>
                            <div className="info w-[75%] pr-5 relative pt-3">
                                <h4 className="text-[12px] sm:text-[14px] font-[500]">
                                    <Link className="link transition-all" to="/product/67dbde5b6e949cc6cd6576ec" data-discover="true">
                                        Embroidered Satin Sa...
                                    </Link>
                                </h4>
                                <p className="flex items-center gap-5 mt-2 mb-2">
                                    <span className="text-[13px] sm:text-[14px]">Qty : <span>1</span></span>
                                    <span className="text-primary font-bold">₹4,785.00</span>
                                </p>
                                <MdOutlineDeleteOutline className="absolute top-[10px] right-[10px] cursor-pointer text-[20px] link transition-all" />
                            </div>
                        </div>
                        <div className="cartItem w-full flex items-center gap-4 border-b border-[rgba(0,0,0,0.1)] py-2">
                            <div className="img w-[25%] overflow-hidden h-[80px] rounded-md">
                                <Link className="block group" to="/product/67dbde5b6e949cc6cd6576ec" data-discover="true">
                                    <img
                                        src="https://serviceapi.spicezgold.com/download/1742462552739_siril-georgette-pink-color-saree-with-blouse-piece-product-images-rvrk9p11sk-0-202308161432.webp"
                                        className="w-full group-hover:scale-105 transition"
                                        alt="product"
                                    />
                                </Link>
                            </div>
                            <div className="info w-[75%] pr-5 relative pt-3">
                                <h4 className="text-[12px] sm:text-[14px] font-[500]">
                                    <Link className="link transition-all" to="/product/67dbde5b6e949cc6cd6576ec" data-discover="true">
                                        Embroidered Satin Sa...
                                    </Link>
                                </h4>
                                <p className="flex items-center gap-5 mt-2 mb-2">
                                    <span className="text-[13px] sm:text-[14px]">Qty : <span>1</span></span>
                                    <span className="text-primary font-bold">₹4,785.00</span>
                                </p>
                                <MdOutlineDeleteOutline className="absolute top-[10px] right-[10px] cursor-pointer text-[20px] link transition-all" />
                            </div>
                        </div>
                        <div className="cartItem w-full flex items-center gap-4 border-b border-[rgba(0,0,0,0.1)] py-2">
                            <div className="img w-[25%] overflow-hidden h-[80px] rounded-md">
                                <Link className="block group" to="/product/67dbde5b6e949cc6cd6576ec" data-discover="true">
                                    <img
                                        src="https://serviceapi.spicezgold.com/download/1742462552739_siril-georgette-pink-color-saree-with-blouse-piece-product-images-rvrk9p11sk-0-202308161432.webp"
                                        className="w-full group-hover:scale-105 transition"
                                        alt="product"
                                    />
                                </Link>
                            </div>
                            <div className="info w-[75%] pr-5 relative pt-3">
                                <h4 className="text-[12px] sm:text-[14px] font-[500]">
                                    <Link className="link transition-all" to="/product/67dbde5b6e949cc6cd6576ec" data-discover="true">
                                        Embroidered Satin Sa...
                                    </Link>
                                </h4>
                                <p className="flex items-center gap-5 mt-2 mb-2">
                                    <span className="text-[13px] sm:text-[14px]">Qty : <span>1</span></span>
                                    <span className="text-primary font-bold">₹4,785.00</span>
                                </p>
                                <MdOutlineDeleteOutline className="absolute top-[10px] right-[10px] cursor-pointer text-[20px] link transition-all" />
                            </div>
                        </div>
                        <div className="cartItem w-full flex items-center gap-4 border-b border-[rgba(0,0,0,0.1)] py-2">
                            <div className="img w-[25%] overflow-hidden h-[80px] rounded-md">
                                <Link className="block group" to="/product/67dbde5b6e949cc6cd6576ec" data-discover="true">
                                    <img
                                        src="https://serviceapi.spicezgold.com/download/1742462552739_siril-georgette-pink-color-saree-with-blouse-piece-product-images-rvrk9p11sk-0-202308161432.webp"
                                        className="w-full group-hover:scale-105 transition"
                                        alt="product"
                                    />
                                </Link>
                            </div>
                            <div className="info w-[75%] pr-5 relative pt-3">
                                <h4 className="text-[12px] sm:text-[14px] font-[500]">
                                    <Link className="link transition-all" to="/product/67dbde5b6e949cc6cd6576ec" data-discover="true">
                                        Embroidered Satin Sa...
                                    </Link>
                                </h4>
                                <p className="flex items-center gap-5 mt-2 mb-2">
                                    <span className="text-[13px] sm:text-[14px]">Qty : <span>1</span></span>
                                    <span className="text-primary font-bold">₹4,785.00</span>
                                </p>
                                <MdOutlineDeleteOutline className="absolute top-[10px] right-[10px] cursor-pointer text-[20px] link transition-all" />
                            </div>
                        </div>
                        <div className="cartItem w-full flex items-center gap-4 border-b border-[rgba(0,0,0,0.1)] py-2">
                            <div className="img w-[25%] overflow-hidden h-[80px] rounded-md">
                                <Link className="block group" to="/product/67dbde5b6e949cc6cd6576ec" data-discover="true">
                                    <img
                                        src="https://serviceapi.spicezgold.com/download/1742462552739_siril-georgette-pink-color-saree-with-blouse-piece-product-images-rvrk9p11sk-0-202308161432.webp"
                                        className="w-full group-hover:scale-105 transition"
                                        alt="product"
                                    />
                                </Link>
                            </div>
                            <div className="info w-[75%] pr-5 relative pt-3">
                                <h4 className="text-[12px] sm:text-[14px] font-[500]">
                                    <Link className="link transition-all" to="/product/67dbde5b6e949cc6cd6576ec" data-discover="true">
                                        Embroidered Satin Sa...
                                    </Link>
                                </h4>
                                <p className="flex items-center gap-5 mt-2 mb-2">
                                    <span className="text-[13px] sm:text-[14px]">Qty : <span>1</span></span>
                                    <span className="text-primary font-bold">₹4,785.00</span>
                                </p>
                                <MdOutlineDeleteOutline className="absolute top-[10px] right-[10px] cursor-pointer text-[20px] link transition-all" />
                            </div>
                        </div>
                        <div className="cartItem w-full flex items-center gap-4 border-b border-[rgba(0,0,0,0.1)] py-2">
                            <div className="img w-[25%] overflow-hidden h-[80px] rounded-md">
                                <Link className="block group" to="/product/67dbde5b6e949cc6cd6576ec" data-discover="true">
                                    <img
                                        src="https://serviceapi.spicezgold.com/download/1742462552739_siril-georgette-pink-color-saree-with-blouse-piece-product-images-rvrk9p11sk-0-202308161432.webp"
                                        className="w-full group-hover:scale-105 transition"
                                        alt="product"
                                    />
                                </Link>
                            </div>
                            <div className="info w-[75%] pr-5 relative pt-3">
                                <h4 className="text-[12px] sm:text-[14px] font-[500]">
                                    <Link className="link transition-all" to="/product/67dbde5b6e949cc6cd6576ec" data-discover="true">
                                        Embroidered Satin Sa...
                                    </Link>
                                </h4>
                                <p className="flex items-center gap-5 mt-2 mb-2">
                                    <span className="text-[13px] sm:text-[14px]">Qty : <span>1</span></span>
                                    <span className="text-primary font-bold">₹4,785.00</span>
                                </p>
                                <MdOutlineDeleteOutline className="absolute top-[10px] right-[10px] cursor-pointer text-[20px] link transition-all" />
                            </div>
                        </div>
                    </div>
                    <div className="bottomSec h-[140px] w-full overflow-hidden pr-5">
                        <div className="bottomInfo py-3 px-4 w-full border-t border-[rgba(0,0,0,0.1)] flex items-center justify-between flex-col">
                            <div className="flex items-center justify-between w-full">
                                <span className="text-[14px] font-[600]">
                                    2 item
                                </span>
                                <span className="text-primary font-bold">
                                    ₹6,784.00
                                </span>
                            </div>
                        </div>
                        <div className="bottomInfo py-3 px-4 w-full border-t border-[rgba(0,0,0,0.1)] flex items-center justify-between flex-col">
                            <div className="flex items-center justify-between w-full">
                                <span className="text-[14px] font-[600]">
                                    Total (tax excl.)
                                </span>
                                <span className="text-primary font-bold">
                                    ₹6,784.00
                                </span>
                            </div>
                            <br/>
                                <div className="flex items-center justify-between w-full gap-5">
                                    <Link className=" w-[50%] d-block" data-discover="true" to="/cart">
                                        <Button className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary btn-org btn-lg w-full css-iyey26" tabindex="0" type="button">
                                            View Cart
                                            <span className="MuiTouchRipple-root css-4mb1j7">
                                            </span>
                                        </Button>
                                    </Link>
                                    <Link className=" w-[50%] d-block" to="/checkout" data-discover="true">
                                        <Button className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary btn-org btn-border btn-lg w-full css-iyey26" tabindex="0" type="button">
                                            Checkout
                                            <span className="MuiTouchRipple-root css-4mb1j7">
                                            </span>
                                        </Button>
                                    </Link>
                                </div>
                        </div>
                    </div>

                </div>
            </>

        </Box>
    );
    // <li></li>
    // <li></li>
    // <li></li>
    // <li></li>
    return (
        <>
            <div onClick={toggleDrawer(true)} className={props.className}>
                {props.children}
            </div>

            <Drawer
                open={open ? "right" : false}
                anchor={"right"}
                onClose={toggleDrawer(false)

                }>
                {DrawerList}
            </Drawer>

        </>
    );
}
export default CartPanel;