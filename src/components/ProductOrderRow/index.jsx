import { Button } from "@mui/material";
import { useState } from "react";
import Badge from "../Badge";
import { IoClose } from "react-icons/io5";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

const ProductOrderRow = () => {
  const [showProducts, setShowProducts] = useState(false);

  const OpenProductsTable = () => setShowProducts(true);
  const CloseProductsTable = () => setShowProducts(false);

  return (
    <>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
        <td className="px-6 py-4">
          <Button onClick={OpenProductsTable}>SHOW PRODUCTS</Button>
        </td>
        <td className="px-6 py-4 text-primary">24</td>
        <td className="px-6 py-4 text-primary">24</td>
        <td className="px-6 py-4 whitespace-nowrap">24</td>

        <td className="px-6 py-4">24</td>
        <td className="px-6 py-4">
          <span className="block w-[400px]">
            H No 222 Street No 6 Adarsh Mohalla Maujpur Delhi near shivam
            medical ph. +91-9643990046
          </span>
        </td>
        <td className="px-6 py-4">110334</td>

        <td className="px-6 py-4">3400</td>
        <td className="px-6 py-4">alshihy.567a@gmail.com</td>
        <td className="px-6 py-4 font-[500]">
          <span className="text-primary">66e120733d4b2dc4a19335ab</span>
        </td>
        <td className="px-6 py-4">
          <Badge status="delivered" />
        </td>
        <td className="px-6 py-4 whitespace-nowrap">24-2-2023</td>
      </tr>
      <Dialog
        open={showProducts}
        onClose={CloseProductsTable}
        maxWidth="lg" // xs, sm, md, lg, xl
        fullWidth
      >
        <DialogTitle>
        <span className="w-full flex justify-between">
          Order Details
          <Button className="closeDialogContent" onClick={CloseProductsTable}>
            <IoClose />
          </Button>
        </span>
        </DialogTitle>
        <DialogContent>
          <section className="bg-white py-5">
            <div className="container flex gap-8 items-center">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      prodiuct id
                    </th>
                    <th scope="col" className="px-6 py-3">
                      product title
                    </th>
                    <th scope="col" className="px-6 py-3">
                      image
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Quantity
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Subtotal
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                    <td className="px-6 py-4">12234</td>
                    <td className="px-6 py-4">dress</td>
                    <td className="px-6 py-4">
                      <img
                        src="https://serviceapi.spicezgold.com/download/1742463096955_hbhb1.jpg"
                        alt="product img"
                        className="w-[75px]"
                      />
                    </td>
                    <td className="px-6 py-4">2</td>
                    <td className="px-6 py-4">24</td>
                    <td className="px-6 py-4">12</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </DialogContent>
        {/* <DialogActions>
          <Button onClick={CloseProductsTable}>إغلاق</Button>
        </DialogActions> */}
      </Dialog>
    </>
  );
};
export default ProductOrderRow;
