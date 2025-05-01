import React from "react"
import Sidebar from "../../components/Sidebar"
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import ProductItem from "../../components/ProductItem"
import ProductItemListView from "../../components/ProductItemListView"
import Button from '@mui/material/Button';
import { IoGridSharp } from "react-icons/io5";
import { LuMenu } from "react-icons/lu";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import './style.css';
import Pagination from '@mui/material/Pagination';

const ProductListing = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [isItemView, setIsItemView] = React.useState("grid");
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <section className="productListing py-5 pb-0">
            <div className="container">
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" className="link transition" href="/">
                        home
                    </Link>
                    <Link underline="hover" color="inherit" className="link transition" href="/">
                        Fashion
                    </Link>
                </Breadcrumbs>
            </div>
            <div className="bg-white p-2 mt-4">
                <div className="container flex gap-3">
                    <div className="sidebarWrapper w-[20%] h-full bg-white">
                        <Sidebar />
                    </div>



                    <div className="rightContent w-[80%] py-3">
                        <div className="bg-[#f1f1f1] p-2 w-full mb-4 rounded-md flex items-center justify-between">
                            <div className="col1 flex items-center gap-1 itemViewActive">
                                <Button
                                    className={`!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[#000] ${isItemView === "list" && "active"}`}
                                    onClick={() => setIsItemView("list")}
                                >
                                    <LuMenu className="!text-[rgba(0,0,0,0.7)]" />
                                </Button>
                                <Button
                                    className={`!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[#000] ${isItemView === "grid" && "active"}`}
                                    onClick={() => setIsItemView("grid")}
                                >
                                    <IoGridSharp className="!text-[rgba(0,0,0,0.7)]" />
                                </Button>
                                <span className="text-[14px] font-[500] pl-3 text-[rgba(0,0,0,0.7)]">
                                    There are 27 products.
                                </span>

                            </div>
                            <div className="col2 ml-auto flex items-center justify-end gap-3 pr-4">
                                <span className="text-[14px] font-[500] pl-3 text-[rgba(0,0,0,0.7)]">
                                    Sort by:
                                </span>
                                <Button
                                    id="demo-positioned-button"
                                    aria-controls={open ? 'demo-positioned-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}
                                    className="bg-white !text-[10px] !text-[#000] !capitalize !border-2 !border-[#000]"
                                >
                                    Sales, highest to lowest
                                </Button>
                                <Menu
                                    id="fade-menu"
                                    MenuListProps={{
                                        'aria-labelledby': 'fade-button',
                                    }}
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    TransitionComponent={Fade}
                                >
                                    <MenuItem className="!text-[13px] !text-[#000] !capitalize" onClick={handleClose}>Sales, highest to lowest</MenuItem>
                                    <MenuItem className="!text-[13px] !text-[#000] !capitalize" onClick={handleClose}>Relevance</MenuItem>
                                    <MenuItem className="!text-[13px] !text-[#000] !capitalize" onClick={handleClose}>Name, A to Z</MenuItem>
                                    <MenuItem className="!text-[13px] !text-[#000] !capitalize" onClick={handleClose}>Name, Z to A</MenuItem>
                                    <MenuItem className="!text-[13px] !text-[#000] !capitalize" onClick={handleClose}>Price, low to high</MenuItem>
                                    <MenuItem className="!text-[13px] !text-[#000] !capitalize" onClick={handleClose}>Price, high to low</MenuItem>
                                </Menu>
                            </div>
                        </div>

                        <div className={`grid ${isItemView === "grid" ? "grid-cols-4 md:grid-cols-4" : "grid-cols-1 md:grid-cols-1"} gap-3`}>
                            {isItemView === "grid" ?
                                <>
                                    <ProductItem />
                                    <ProductItem />
                                    <ProductItem />
                                    <ProductItem />
                                    <ProductItem />
                                    <ProductItem />
                                    <ProductItem />
                                    <ProductItem />
                                    <ProductItem />
                                    <ProductItem />
                                    <ProductItem />
                                    <ProductItem />
                                </>
                                :
                                <>
                                    <ProductItemListView />
                                    <ProductItemListView />
                                    <ProductItemListView />
                                    <ProductItemListView />
                                    <ProductItemListView />
                                    <ProductItemListView />
                                    <ProductItemListView />
                                    <ProductItemListView />
                                    <ProductItemListView />
                                    <ProductItemListView />
                                    <ProductItemListView />
                                    <ProductItemListView />
                                </>
                            }

                        </div>
                        <div className="flex items-center justify-center mt-10">
                                  <Pagination count={10} showFirstButton showLastButton />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
export default ProductListing;