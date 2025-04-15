"use client"
import { File, Shield, Upload, X } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

const SideNav = ({ show, onClose }: { show: boolean; onClose: () => void }) => {
  const menuList = [
    {
      id: 1,
      name: 'Upload',
      icon: Upload,
      path: '/upload'
    },
    {
      id: 2,
      name: 'Files',
      icon: File,
      path: '/files'
    },
    {
      id: 3,
      name: 'Upgrade',
      icon: Shield,
      path: '/upgrade'
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-sm border-r border-gray-300 h-full transform transition-transform ${
        show ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0`}
    >
    
      <div className='p-5 border-b border-gray-300 flex items-center justify-between md:hidden'>
        <Image src='/logo.svg' alt='logo' width={150} height={100} />
        <X className='cursor-pointer' onClick={onClose} />
      </div>

      
      <div className='p-5 border-b border-gray-300 hidden md:block'>
        <Image src='/logo.svg' alt='logo' width={150} height={100} />
      </div>

      <div className='flex flex-col float-left w-full'>
        {menuList.map((item, index) => (
          <button
            key={index}
            className={`flex gap-2 p-4 px-8 hover:bg-gray-100 ${
              activeIndex === index
                ? 'text-indigo-500 bg-indigo-50'
                : 'text-gray-500'
            }`}
            onClick={() => setActiveIndex(index)}
          >
            <item.icon />
            <h2>{item.name}</h2>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SideNav;