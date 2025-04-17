import React from 'react'
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { FaSearch } from "react-icons/fa";

import "./style.css"

const Search = () => {
    return (
        // h-[50px]
        <div className='searchBox w-[100%]  bg-[#e5e5e5] rounded-[5px] relative'>
            <input
                type='text'
                placeholder='Search for products...'
                className='w-[100%] h-[35px] focus:outline-none bg-inherit text-[15px]'
            />
            <Button variant="text" className="searsh-btn">

                <FaSearch />
            </Button>

        </div>

    )
}
export default Search;