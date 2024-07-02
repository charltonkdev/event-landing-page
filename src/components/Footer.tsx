'use client'
import React from 'react';
import { useEffect } from 'react';
import Link from 'next/link';
import smoothscroll from 'smoothscroll-polyfill';
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
import styles from './styles.module.css';

export const Footer = () => {
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
        <div className="grid grid-cols-1 md:grid-cols-3 w-full p-24 bg-slate-950 border-t-[1px] border-slate-800">
            <div className="flex flex-col mb-12">
                <h4 className="text-4xl font-bold">
                    Summertime
                </h4>
                <span className="text-sm font-light">Bring People Together</span>
            </div>
            <div className="flex flex-col mx-auto flex-grow items-start md:items-center mb-12">
                <h4 className="text-xl font-bold mb-4">
                    Quick Links
                </h4>
                <ul className={`${styles.footerlink} flex flex-col md:flex-row gap-4`}>
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
            <div className="flex flex-col md:items-end items-start">
                <h4 className="text-xl font-bold mb-4">
                    Our Social Links
                </h4>
                <div className="flex gap-4">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-xl text-blue-600">
                        <FaFacebookF />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-xl text-pink-500">
                        <FaInstagram />
                    </a>
                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-xl text-red-600">
                        <FaYoutube />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-xl text-blue-400">
                        <FaTwitter />
                    </a>
                </div>
            </div>
        </div>
    )
}
