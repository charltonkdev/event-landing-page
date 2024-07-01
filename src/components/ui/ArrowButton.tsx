// components/ui/ArrowButton.tsx
import { GoArrowUpRight } from 'react-icons/go';
import { FC, PropsWithChildren } from 'react';

const ArrowButton: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <button className='relative w-fit px-5 py-3 mt-10 border rounded-full hover:bg-white hover:text-black duration-500 flex justify-center pl-14 hover:pl-5 hover:pr-14 group'>
      <GoArrowUpRight className='absolute group-hover:left-[75%] left-[5px] top-[6px] bg-white duration-500 group-hover:rotate-45 text-black rounded-full text-4xl mr-3 p-1'/>
      {children}
    </button>
  );
};

export default ArrowButton;
