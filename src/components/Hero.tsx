import React from 'react'
import Styles from './styles.module.css' 
import { GoArrowUpRight } from "react-icons/go";

const Hero = () => {
  return (
    <div className="px-24 w-full h-screen flex flex-col py-6 justify-center bg-[url('/herobg01.jpg')] bg-no-repeat bg-cover bg-fixed bg-bottom">
        <p>July 15-17, 2024 | Kuching, Sarawak</p>
        <h1 className='text-8xl font-bold mt-14'>
            Sunset Music <br/>
            <span className={`${Styles.textOutline} bg-clip-text text-transparent backdrop-blur-lg bg-white bg-opacity-20`}>Festival 2024</span>
        </h1>
        <button className='relative w-fit px-5 py-3 mt-10 border rounded-full hover:bg-white hover:text-black duration-500 flex justify-center pl-14 hover:pl-5 hover:pr-14 group'>
            <GoArrowUpRight className='absolute group-hover:left-[75%] left-[5px] top-[6px] bg-white duration-500 group-hover:rotate-45 text-black rounded-full text-4xl mr-3 p-1'/>BUY TICKET
        </button>
    </div>
  )
}

export default Hero
