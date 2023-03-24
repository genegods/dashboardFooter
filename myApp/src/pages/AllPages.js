import React from 'react'
import { Routes, Route } from "react-router-dom";
import About from '../pages/About'
import Home from '../pages/Home'
import Services from '../pages/Services'
import Privacy from '../pages/Privacy'

const AllPages = () => {
  return (
    <React.Fragment>
    <main>
      <div className='bg-blue-500 h-60 text-white text-3xl centered'>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </div>
    </main>
  </React.Fragment>
  )
}

export default AllPages