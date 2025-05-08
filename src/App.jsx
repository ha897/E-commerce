import React, {useState} from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import ProductListing from "./pages/ProductListing";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Register from "./pages/Register";
import Checkout from "./pages/Checkout";
import Verify from "./pages/Verify";
import MyAccount from "./pages/MyAccount";
import MyList from "./pages/MyList";
import Orders from "./pages/Orders";
import Header from "./components/Header";
import Footer from "./components/Footer";
import toast, { Toaster } from "react-hot-toast";

import { createContext } from "react";

export const MyContext = createContext();

function App() {
  const openAlertBox = (msg,state=null) => {
    if(state === null){
      toast(msg);
    }else if(state === "success"){
      toast.success(msg);

    }else if(state === "error"){
      toast.error(msg);

    }
  };
  const [isLogin, setIsLogin] = useState(true)
  const values = {
    openAlertBox,
    setIsLogin,
    isLogin
  };
  return (
    <>
      <BrowserRouter>
        <MyContext.Provider value={values}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/help-center" element={<h1>help</h1>} />
            <Route path="/product-listing" element={<ProductListing />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/verify" element={<Verify />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            
            <Route path="/my-account" element={<MyAccount />} />
            {/* <Route path="/address" element={<MyAccount />} /> */}
            <Route path="/my-list" element={<MyList />} />
            <Route path="/my-orders" element={<Orders />} />
          </Routes>
          <Footer />
        </MyContext.Provider>
        <Toaster />
      </BrowserRouter>
    </>
  );
}

export default App;
