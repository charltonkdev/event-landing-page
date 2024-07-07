import React from 'react';
import ArrowButton from './ui/ArrowButton';

export const Location = () => {
  return (
    <div id="location" className="flex flex-col w-full h-auto relative px-12 py-24 md:p-24 gap-6 text-white bg-slate-950 overflow-hidden">
        <p>Locations</p>
        <h2 className='text-2xl md:text-4xl w-full md:max-w-5xl'>
            Summertime Music Festival 2024 wil be held at Waterfront Park, a stunning waterfront location in the heart of UK. Easily accessible by public transportation, with ample parking available.
        </h2>
        <ArrowButton>VIEW LOCATION</ArrowButton>
        <div className="relative w-full md:h-[60vh] overflow-hidden rounded-3xl">
        <video className="video-bg" autoPlay muted loop>
        <source src="/eventlocation.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        
        </div>
    </div>
  )
}
