import React from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from "./pages/home"
import Header from "./components/Header"
function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      {/* تحديد الراوتس */}
        <Route path="/" element={<Home/>} />
        <Route  path="/help-center" element={<h1>help</h1>} />
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
