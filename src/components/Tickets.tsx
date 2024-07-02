import React from 'react'
import ArrowButton from './ui/ArrowButton'

export const Tickets = () => {
  return (
    <div id="ticket" className="flex flex-col w-full h-auto relative p-24 gap-6 text-black bg-white overflow-hidden">
        <p>Tickets</p>
        <h2 className='text-2xl md:text-4xl w-full md:max-w-3xl '>
            Choose from a variety of tickets options organized by Summertime Events.
        </h2>
        <div className='flex flex-col md:flex-row mt-6 gap-6 relative'>
            <div className='flex flex-col p-3 border rounded-md flex-grow'>
                <h3 className='font-bold text-xl'>
                    VIP Pass
                </h3>
                <p>
                    Exclusive viewing area, with vip restrooms available.
                </p>
                <hr className='my-6'/>
                <h4 className='font-bold text-4xl'>
                    $49
                </h4>
                <ArrowButton>Buy Ticket</ArrowButton>
            </div>
            <div className='flex flex-col p-3 border rounded-md flex-grow'>
                <h3 className='font-bold text-xl'>
                    Premium Pass
                </h3>
                <p>
                    Premium viewing area, with premium restrooms available.
                </p>
                <hr className='my-6'/>
                <h4 className='font-bold text-4xl'>
                    $39
                </h4>
                <ArrowButton>Buy Ticket</ArrowButton>
            </div>
        </div>
    </div>
  )
}
