import React, {useState} from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './style.css';
// import required modules
import { Navigation } from 'swiper/modules';

import Rating from '@mui/material/Rating';
import { FaRegHeart } from "react-icons/fa";
import { IoMdGitCompare } from "react-icons/io";
import { MdZoomOutMap } from "react-icons/md";

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { IoClose } from "react-icons/io5";
import ProductDetailsView from "../ProductDetailsView" 
const ProductItem = () => {
    const [openProductDetailsModels, setOpenProductDetailsModels] = useState(false);

    const handleOpenProductDetailsModel = () => {
        setOpenProductDetailsModels(true);
    };

    const handleCloseProductDetailsModel = () => {
        setOpenProductDetailsModels(false);
    };
    return (
        <>
            <div className="productItem shadow-lg rounded-md overflow-hidden">
                <div className="imgWrapper w-[100%] h-[220px] overflow-hidden rounded-md relative transition">
                    <Link to="/" className="w-full h-full block">
                        <img
                            src="https://serviceapi.spicezgold.com/download/1742463096955_hbhb1.jpg"
                            className="w-full absolute"
                        />
                        <img
                            src="https://serviceapi.spicezgold.com/download/1742463096956_hbhb2.jpg"
                            className="w-full absolute"
                        />
                    </Link>
                    {/* src="https://serviceapi.spicezgold.com/download/1742463096956_hbhb2.jpg" */}
                    <span className="discount flex items-center absolute top-[10px] left-[10px] z-50 bg-primary text-white rounded-lg text-[12px] font-[500]">
                        -%10
                    </span>
                    {/* <span className="actions flex items-center flex-col absolute top-[15px] right-[5px] z-50 gap-2 w-[50px]"> */}
                    <span className="actions duration-800 transition flex items-center flex-col absolute top-[-200px] right-[5px] z-50 gap-2 w-[40px]">
                        <Tooltip title="View Product Details" placement="left-start">
                            <Button className="!w-[35px] !h-[35px] !min-w-[35px]">
                                <FaRegHeart className="text-[18px]" />
                            </Button>
                        </Tooltip>
                        <Tooltip title="Delete" placement="left-start">
                            <Button className="!w-[35px] !h-[35px] !min-w-[35px]">
                                <IoMdGitCompare className="text-[18px]" />
                            </Button>
                        </Tooltip>
                        <Tooltip title="Delete" placement="left-start">
                            <Button className="!w-[35px] !h-[35px] !min-w-[35px]">
                                <MdZoomOutMap onClick={handleOpenProductDetailsModel} className="text-[18px]" />
                            </Button>
                        </Tooltip>
                    </span>
                </div>
                <div className="info p-3 py-5">
                    <h6 className="text-[13px] !font-[400]">
                        <Link to="/" className="link transition">
                            Soylent Green
                        </Link>
                    </h6>
                    <h3 className="text-[13px] title mt-1 mb-1 font-[500] text-[#000]" title="Siril Georgette Pink Color Saree with Blouse piece">
                        <Link to="/" className="link transition">
                            Siril Georgette Pink Color Saree with Blouse piece
                        </Link>
                    </h3>
                    {/* <Stack spacing={1}> */}
                    <Rating name="size-small" defaultValue={2} size="small" readOnly />
                    {/* <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly /> */}
                    {/* </Stack> */}
                    <div className="flex items-center gap-4">
                        <span className="oldPrice line-through text-gray-500 text-[15px] font-[500]">$58.00</span>
                        <span className="price text-primary text-[15px] font-[600]">$58.00</span>
                    </div>

                </div>

            </div>
            <Dialog
                open={openProductDetailsModels}
                onClose={handleCloseProductDetailsModel}
                maxWidth="lg"
                // fullWidth="lg"  
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                {/* <DialogTitle id="alert-dialog-title">
                  {"Use Google's location service?"}
                </DialogTitle> */}
                <DialogContent>
                    {/* <DialogContentText id="alert-dialog-description">
                    Let Google help apps determine location. This means sending anonymous
                    location data to Google, even when no apps are running.
                  </DialogContentText> */}
                    <Button className="closeDialogContent" onClick={handleCloseProductDetailsModel}>
                        <IoClose />
                    </Button>
                    <section className="bg-white py-5">
                        <ProductDetailsView />
                    </section >
                </DialogContent>
                {/* <DialogActions>
                  <Button onClick={handleCloseProductDetailsModel}>Disagree</Button>
                  <Button onClick={handleCloseProductDetailsModel} autoFocus>
                    Agree
                  </Button>
                </DialogActions> */}
            </Dialog>
        </>
    );
}
export default ProductItem;