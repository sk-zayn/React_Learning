import React from 'react'
import { Link } from "react-router-dom";
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';

const Navbar = () => {
  return (
    <div className='flex bg-cyan-800 justify-between items-center p-5 text-white'>
      <h2 className='font-bold text-2xl '>Zayn's</h2>
      <div className='flex gap-10 '>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/product'>Product</Link>
        <Link to='/courses'>Courses</Link>

      </div>
    </div>
  )
}

export default Navbar

