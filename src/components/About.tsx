import React from 'react'
import Image from 'next/image'
const About = () => {
  return (
    <div className='flex flex-col w-full h-screen relative px-24 py-12 gap-6 text-black bg-white'>
        <p>About The Festival</p>
        <h2 className='text-6xl max-w-6xl '>
            With a stunning lineup of headliners and immersive experiences, this is the must attend event of the summer.
        </h2>
        <Image className="w-full items-center flex" alt="" src="/aboutbg01.jpg" width={1000} height={1000} />
    </div>
  )
}

export default About