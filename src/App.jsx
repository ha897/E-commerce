import React from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from "./pages/home"
import ProductListing from "./pages/ProductListing"
import Header from "./components/Header"
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* تحديد الراوتس */}
        <Route path="/" element={<Home />} />
        <Route path="/help-center" element={<h1>help</h1>} />
        <Route path="/product-listing" element={<ProductListing />} />
      </Routes>
      <Footer />

    </BrowserRouter>
  )
}

export default App
