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
import CategoryCollapse from "../../CategoryCollapse"
const CategoryPanel = (props) => {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" className="category-panel">
            <h3 className='p-3 text-[16px] font-[500]  flex items-center justify-between'>Shop by category <IoCloseSharp onClick={toggleDrawer(false)} className='cursor-pointer text-[20px]' /></h3>
            <CategoryCollapse/>
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