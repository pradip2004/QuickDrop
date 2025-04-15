"use client"
import SideNav from '@/app/_components/SideNav'
import TopHeader from '@/app/_components/TopHeader'
import React, { useState } from 'react'

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const toggleSideNav = () => {
    setIsSideNavOpen((prev) => !prev);
  };

  const closeSideNav = () => {
    setIsSideNavOpen(false);
  };

  return (
    <div className='w-screen'>
      {/* SideNav */}
      <div className='md:w-64 fixed inset-y-0 z-50'>
        <SideNav show={isSideNavOpen} onClose={closeSideNav} />
      </div>

      {/* TopHeader */}
      <div className='md:hidden'>
        <TopHeader toggleMenu={toggleSideNav} />
      </div>

      {/* Main Content */}
      <div className='ml-0 md:ml-64'>
        <div className='hidden md:block'>
          <TopHeader toggleMenu={toggleSideNav} />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Layout;