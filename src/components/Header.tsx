import { useEffect } from 'react';
import Link from 'next/link';
import smoothscroll from 'smoothscroll-polyfill';

const Header = () => {
  useEffect(() => {
    smoothscroll.polyfill();
  }, []);

  const handleScroll = (
    event: React.UIEvent<HTMLDivElement> | 
           React.MouseEvent<HTMLAnchorElement> | 
           React.MouseEvent<HTMLSpanElement>,  // Added HTMLSpanElement type
    targetId: string
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
            <h1 className='text-2xl font-bold mix-blend-difference drop-shadow-xl'>
            Summertime
            </h1>
        </div>
        <div className='flex px-6 py-4 justify-center bg-white bg-opacity-60 backdrop-blur-lg rounded-full text-slate-600 font-semibold'>
            <ul className='flex flex-nowrap gap-5'>
                <li>
                  <Link href="#about" passHref>
                    {/* Updated to include HTMLSpanElement */}
                    <span onClick={(event) => handleScroll(event, 'about')}>About</span>
                  </Link>
                </li>
                <li>Buy Ticket</li>
                <li>Venue</li>
                <li>Gallery</li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Header;
