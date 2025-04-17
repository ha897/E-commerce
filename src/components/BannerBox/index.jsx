import React from 'react'
import { Link } from "react-router-dom";

const BannerBox = (props) => {
    return (
        <div className="box bannerBox overflow-hidden rounded-lg">
            {/* الي هي وسم a */}
            <Link to={props.link}>
                <img src={props.img} className="w-full block transition" alt="banner" />
            </Link>
        </div>
    )
}

export default BannerBox;