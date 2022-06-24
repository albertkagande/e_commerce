import React from 'react'
import logo from '../images/logo.png'
import menu from '../images/menu.png'
import cart from '../images/cart.png'
import { motion } from 'framer-motion'


function Navbar() {
  return (

    <nav className="flex items-center justify-between w-full h-18 shadow">

        <span className=" my-0 mx-5">
      <motion.img animate={{ x:20 }} transition={{ duration: 20, type: "spring", stiffness: 900 }} src={logo} className="w-32 cursor-pointer hover:animate-bounce"/>
        </span>
        <ul className="float-right inline-flex">
            <li className="text-xl sm:text-sm md:text-lg lg:text-xl
                           p-2 mx-5 py-2 sm:h-8 sm:py-1 sm:my-2 md:py-0 md:my-2 lg:pt-1
                           text-yellow-200 
                           hover:text-white
                           cursor-pointer
                           bg-cyan-900
                           rounded-xl
                           w-28 md:w-20 lg:w-28 lg:h-10 
                           text-center hover:animate-bounce">Sign In</li>

            <li className="text-xl p-2 mx-4 
                          text-cyan-900 
                          hover:text-cyan-900
                          cursor-pointer hover:scale-90 ">Register</li>

            <li className="text-xl p-2 mx-4 
                          text-cyan-900 
                          hover:text-cyan-900
                          cursor-pointer hover:scale-90 ">Checkout</li>
            <li className="text-xl p-2 mx-4 
                          text-cyan-900 
                          hover:text-cyan-900
                          cursor-pointer hover:animate-ping"><img src={menu} className="w-8" /></li>
                          <li className="text-xl p-2 mx-4 
                          text-cyan-900 
                          hover:text-cyan-900
                          cursor-pointer hover:animate-ping"><img src={cart} className="w-8" /></li>
        </ul>
    </nav>
  
  )
}

export default Navbar