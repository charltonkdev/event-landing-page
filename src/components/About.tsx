import React from 'react'
import Image from 'next/image'
import TextParallax from './ui/TextParallax'
const About = () => {
  return (
    <div id="about" className='flex flex-col w-full h-auto relative p-24 gap-6 text-black bg-white overflow-hidden'>
        <p>About The Festival</p>
        <h2 className='text-2xl md:text-6xl max-w-6xl '>
            With a stunning lineup of headliners and immersive experiences, this is the must attend event of the summer.
        </h2>
        <Image className="w-full items-center flex" alt="" src="/aboutbg01.jpg" width={1000} height={1000} />
        <TextParallax />
        <h3 className='absolute bottom-[13vh] md:right-[5vw] right-[20vw] text-white md:p-6 text-right text-sm md:text-6xl md:max-w-6xl max-w-[50vw]'>
        We aim to create a memorable experience that brings music lovers from around the world together.
        </h3>
    </div>
  )
}

export default About