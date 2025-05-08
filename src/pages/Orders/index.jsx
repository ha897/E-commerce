import React from "react";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

import "./style.css";
import ProfileSidebar from "../../components/ProfileSidebar";
import ProductOrderRow from "../../components/ProductOrderRow";
import "react-phone-input-2/lib/style.css";

const Orders = () => {
  return (
    <section className="section py-10">
      <div className="container flex gap-3">
        <ProfileSidebar />
        <div className="card bg-white shadow-md w-full rounded-md bg-white p-5 m-1 h-fit overflow-x-scroll">
          <div className="py-5 px-3 border-b border-[rgba(0,0,0,0.1)]">
            <h2>Orders</h2>
            <p className="mt-0 mb-0">
              There are <span className="font-bold text-primary">2</span>{" "}
              products in your list
            </p>
          </div>
          <table className="w-[230%] text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  <Button className="!w-fit !min-w-fit !h-fit !rounded-full">
                    <FaAngleDown />
                  </Button>
                </th>
                <th scope="col" className="px-6 py-3">
                  ORDER ID
                </th>
                <th scope="col" className="px-6 py-3">
                  PAYMANT ID
                </th>
                <th scope="col" className="px-6 py-3">
                  NAME
                </th>
                <th scope="col" className="px-6 py-3">
                  PHONE NUMBER
                </th>
                <th scope="col" className="px-6 py-3">
                  ADDRESS
                </th>
                <th scope="col" className="px-6 py-3">
                  PINCODE
                </th>
                <th scope="col" className="px-6 py-3">
                  TOTAL AMOUNT
                </th>
                <th scope="col" className="px-6 py-3">
                  EMAIL
                </th>
                <th scope="col" className="px-6 py-3">
                  USER ID
                </th>
                <th scope="col" className="px-6 py-3">
                  ORDER STATUS
                </th>
                <th scope="col" className="px-6 py-3">
                  DATE
                </th>
              </tr>
            </thead>
            <tbody>
            <ProductOrderRow/>
            </tbody>
          </table>
{/* 
prodiuct id
product title
image
Quantity
Price
Subtotal
*/}
        </div>
      </div>
    </section>
  );
};
export default Orders;
