import React from 'react'
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Product from './pages/Product';
import ErrorPage from './pages/ErrorPage';



const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product' element={<Product /> } />

        <Route path='/*' element={<ErrorPage /> } />
      </Routes>
    </div>
  )
}

export default App
