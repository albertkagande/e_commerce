import React from 'react'
import hero from '../images/hero.jpg'
import { motion } from 'framer-motion'

function Hero() {
  return (
      <>
    <div className="flex flex-col-reverse md:flex-row">

        <img src={hero} className="shadow flex items-center justify-between"/>
        <motion.span animate={{ rotate: 2 }} transition={{ duration: 4,  ease: "easeOut" }} className="w-2/4 h-12 
                         sm:h-24 lg:h-96 md:pt:32 lg:pt-44
                         md:text-5xl
                         lg:text-7xl 
                         text-gray-900
                         font-sans
                         text-center
                         ml-4 sm:ml-3
                         mt-48 
                         absolute
                         font-extrabold
                         md:top-4 
                         hover:cursor-pointer
                         ">PIMP YOUR CLOSET</motion.span>

        <motion.div animate={{ rotate: 1 }} transition={{ duration: 4 }} className="w-2/4 h-12 
                         lg:text-4xl sm:hidden md:hidden
                         text-cyan-900
                         font-sans
                         text-center
                         py-40 md:py-32 sm: text-xs sm:py-16
                         xl:text-md 
                         ml-4
                         mt-72
                         absolute
                         italic pt-12
                         font-bold
                         "> Clothes transform your body language and attitude. 
                         <motion.span className="block ">They lift you physically and emotionally</motion.span>
        </motion.div>
    </div>
    </>
  )
}

export default Hero
