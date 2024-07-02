import React from 'react';
import styles from './styles.module.css';

export const Gallery = () => {
    return (
        <div id="gallery" className='bg-slate-950 flex flex-col w-full h-auto relative p-24 gap-6 overflow-hidden'>
            <p>Festival Gallery</p>
            <h2 className='text-2xl md:text-4xl w-full md:max-w-3xl '>
                Experience the magic of past festivals with our special photo gallery.
            </h2>
            <div className={`${styles.galleryBox} columns-2 md:columns-3`}>
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
