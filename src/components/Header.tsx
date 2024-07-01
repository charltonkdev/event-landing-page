import React from 'react'

const Header = () => {
  return (
    <div className='fixed w-[88vw] top 10px mx-auto py-5 flex flex-col md:flex-row justify-between items-center '>
        <div className='flex relative'>
            <h1 className='text-4xl font-bold'>
            Summertime
            </h1>
        </div>
        <div className='flex px-6 py-4 justify-center bg-white bg-opacity-10 backdrop-blur-lg rounded-full'>
            <ul className='flex flex-nowrap gap-5'>
                <li>About</li>
                <li>Buy Ticket</li>
                <li>Venue</li>
                <li>Gallery</li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Header