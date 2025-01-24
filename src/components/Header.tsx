'use client';

import { useState } from 'react';
import Image from 'next/image';
import Icon from './Icon';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FFFAEC] px-8 py-6 flex items-center justify-between">
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-4 py-2 text-sm text-[#353535] bg-white rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.05)]"
        >
          <span>Last week</span>
          <Icon name="arrow-down" variant="linear" size={16} className="text-[#CCCCCC]" />
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 mt-2 w-40 bg-white rounded-lg shadow-lg py-2">
            <button
              className="w-full px-4 py-2 text-left text-sm text-[#353535] hover:bg-[#FFFAEC]"
              onClick={() => setIsOpen(false)}
            >
              Last week
            </button>
            <button
              className="w-full px-4 py-2 text-left text-sm text-[#353535] hover:bg-[#FFFAEC]"
              onClick={() => setIsOpen(false)}
            >
              Last month
            </button>
            <button
              className="w-full px-4 py-2 text-left text-sm text-[#353535] hover:bg-[#FFFAEC]"
              onClick={() => setIsOpen(false)}
            >
              Last year
            </button>
          </div>
        )}
      </div>

      <div className="flex items-center gap-6">
        <button className="relative">
          <Icon name="notification" variant="linear" size={24} className="text-[#353535]" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-[#FF5789] rounded-full" />
        </button>

        <div className="flex items-center gap-4">
          <div className="text-right">
            <h3 className="text-sm font-medium text-[#353535]">Kartik</h3>
            <p className="text-xs text-[#CCCCCC]">kartik@gmail.com</p>
          </div>
          <div className="relative w-10 h-10 rounded-full overflow-hidden">
            <Image
              src="/avatar1.jpg"
              alt="Profile"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;