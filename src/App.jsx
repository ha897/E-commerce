import React from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from "./pages/home"
import ProductListing from "./pages/ProductListing"
import ProductDetails from "./pages/ProductDetails"
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./components/Header"
import Footer from "./components/Footer";

// import { createContext } from "react";

// const MyContext = createContext();
function App() {

  return (
    <>
      <BrowserRouter>
        {/* <MyContext.Provider> */}
        <Header />
        <Routes>
          {/* تحديد الراوتس */}
          <Route path="/" element={<Home />} />
          <Route path="/help-center" element={<h1>help</h1>} />
          <Route path="/product-listing" element={<ProductListing />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
        {/* </MyContext.Provider> */}

        </BrowserRouter>

    </>
  )
}

export default App
