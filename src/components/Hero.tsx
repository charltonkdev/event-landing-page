import React from 'react'
import Styles from './styles.module.css' 
import ArrowButton from './ui/ArrowButton'

const Hero = () => {
  return (
    <div className="px-24 w-full h-screen flex flex-col py-6 justify-center bg-[url('/herobg01.jpg')] bg-no-repeat bg-cover bg-fixed bg-bottom">
        <p>July 15-17, 2024 | Kuching, Sarawak</p>
        <h1 className='text-5xl md:text-8xl font-bold mt-14'>
            Summertime Music <br/>
            <span className={`${Styles.textOutline} bg-clip-text text-transparent backdrop-blur-lg bg-white bg-opacity-20`}>Festival 2024</span>
        </h1>
        <ArrowButton>BUY TICKET</ArrowButton>
    </div>
  )
}

export default Hero
