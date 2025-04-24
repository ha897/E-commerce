import React from 'react'
import "./style.css"
import { IoMdTime } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const BlogItem = () => {
    return (
        <div className="blogItem">
            <div className='imgWrapper w-full overflow-hidden rounded-md cursor-pointer relative'>
                <img
                    src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/psblog/b/9/1105_813/b-blog-7.jpg"
                    className="w-full block transition"
                    alt="blog image"
                />
                {/* <span className="flex items-center justify-center text-white absolute top-0 left-0 w-full h-full bg-[#000000b3] text-[20px] font-[600]"> */}
                <span className="flex items-center justify-center text-white absolute bottom-[15px] right-[15px] z-50 bg-primary rounded-md p-1 text-[11px] font-[500] gap-1">
                    <IoMdTime className="text-[16px]" /> 5 APRIL, 2023
                </span>
            </div>

            <div className="info py-4">
                <h2 className="text-[15px] font-[600] text-black">
                    <Link to="/" className='link'>
                        Nullam ullamcorper ornare molestie
                    </Link>
                </h2>

                <p className="text-[13px] font-[400] text-[rgba(0,0,0,0.8)] mb-4">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry......
                </p>
                {/* hedden the rest */}
                {/* Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. */}
                <Link className="link font-[500] text-[14px] flex items-center gap-1">Read More <IoIosArrowForward /></Link>
            </div>

        </div>

    );
}
export default BlogItem;