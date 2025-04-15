import { UserButton } from '@clerk/nextjs'
import { AlignJustify } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const TopHeader = ({ toggleMenu }: { toggleMenu: () => void }) => {
  return (
    <div className='flex p-5 border-b border-gray-300 shadow-sm items-center justify-between md:justify-end'>
      <AlignJustify className='md:hidden cursor-pointer' onClick={toggleMenu} />
      <Image
        src='/logo.svg'
        alt='logo'
        width={150}
        height={100}
        className='md:hidden'
      />
      <UserButton />
    </div>
  );
};

export default TopHeader;