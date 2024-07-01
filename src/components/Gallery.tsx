import React from 'react'

const Gallery = () => {
    return (
        <div id="gallery" className='flex flex-col w-full h-auto relative p-24 gap-6 overflow-hidden'>
            <p>Festival Gallery</p>
            <h2 className='text-2xl md:text-6xl max-w-6xl '>
                Experience the magic of past festivals with our special photo gallery.
            </h2>
            <div className="columns-2 md:columns-3">
                <img alt="gallery" src='/gallery01.jpg' />
                <img alt="gallery" src='/gallery02.jpg' />
                <img alt="gallery" src='/gallery03.jpg' />
                <img alt="gallery" src='/gallery04.jpg' />
                <img alt="gallery" src='/gallery05.jpg' />
                <img alt="gallery" src='/gallery06.jpg' />
                <img alt="gallery" src='/gallery07.jpg' />
            </div>
        </div>
    )
}

export default Gallery
