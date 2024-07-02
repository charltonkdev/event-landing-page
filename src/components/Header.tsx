'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import smoothscroll from 'smoothscroll-polyfill';
import styles from './styles.module.css';

export const Header = () => {
  useEffect(() => {
    smoothscroll.polyfill();
  }, []);

  const handleScroll = (
    event: React.UIEvent<HTMLDivElement> |
      React.MouseEvent<HTMLAnchorElement> |
      React.MouseEvent<HTMLSpanElement>,
    targetId: string,
  ) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='fixed w-[88vw] top 10px mx-auto py-5 flex flex-col gap-5 md:flex-row justify-between items-center z-50 bg-transparent'>
      <div className='flex relative'>
        <h1 className={`${styles.logoHeading} text-3xl font-bold mix-blend-difference drop-shadow-xl`}>
          Summertime
        </h1>
      </div>
      <div className='flex px-6 py-4 justify-center bg-white bg-opacity-60 backdrop-blur-lg rounded-full text-slate-900 font-semibold'>
        <ul className='flex flex-nowrap gap-5'>
          <li>
            <Link href="#about" passHref>
              <span onClick={(event) => handleScroll(event, 'about')}>About</span>
            </Link>
          </li>
          <li>
            <Link href="#ticket" passHref>
              <span onClick={(event) => handleScroll(event, 'ticket')}>Buy Ticket</span>
            </Link>
          </li>
          <li>
            <Link href="#location" passHref>
              <span onClick={(event) => handleScroll(event, 'location')}>Location</span>
            </Link>
          </li>
          <li>
            <Link href="#gallery" passHref>
              <span onClick={(event) => handleScroll(event, 'gallery')}>Gallery</span>
            </Link>
          </li>
          <li>
            <Link href="#contact" passHref>
              <span onClick={(event) => handleScroll(event, 'contact')}>Contact</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
