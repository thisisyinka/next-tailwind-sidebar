import React, { useState } from 'react';
import { Inter } from '@next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';
import { useMedia } from 'react-use';

import Logo from '../images/loop.svg';

const inter = Inter({ subsets: ['latin'] });

// Menu
const menuItems = [
  {
    menu: 'Home',
    link: '/',
  },
  {
    menu: 'About',
    link: '/about',
  },
  {
    menu: 'Products',
    link: '/product',
  },
  {
    menu: 'Services',
    link: '/services',
  },
  {
    menu: 'Contact Us',
    link: '/contact',
  },
];

const SidebarComponent = () => {
  const isDesktop = useMedia('(min-width: 768px)', true);
  const [open, setOpen] = useState(false);

  const toggleSidebar = () => setOpen(!open);

  const displayMenu = () => {
    return menuItems.map((item) => (
      <Link
        key={item.menu}
        href={item.link}
        className='pb-5 hover:text-yellow md:pb-0 md:pl-6'
      >
        {item.menu}
      </Link>
    ));
  };

  return (
    <div className='flex justify-between p-2 shadow-lg items-center'>
      {/* Logo */}
      <div>
        <Image src={Logo} alt='Logo' width={100} height={100} />
      </div>

      {/* Menu links */}
      <div className={inter.className}>
        <div className='text-red'>
          {isDesktop ? (
            displayMenu()
          ) : (
            <>
              <button
                className='border-none bg-none'
                onClick={() => toggleSidebar()}
              >
                <FaBars />
              </button>
              <div
                className={
                  open
                    ? 'absolute top-0 right-0 z-50 h-screen w-3/5 bg-white shadow-md'
                    : 'hidden'
                }
              >
                <div className='flex flex-col text-center'>
                  <button
                    className='mb-7 mt-7 mr-1 flex justify-end px-5 text-xl'
                    onClick={() => toggleSidebar()}
                  >
                    <GrClose />
                  </button>
                  {displayMenu()}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SidebarComponent;
