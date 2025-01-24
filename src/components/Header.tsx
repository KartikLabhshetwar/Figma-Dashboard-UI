'use client';

import { useState } from 'react';
import Image from 'next/image';
import Icon from './Icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState('Last week');

  const handlePeriodSelect = (period: string) => {
    setSelectedPeriod(period);
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between h-auto sm:h-[88px] p-4 sm:px-8 border-b border-[#F5ECD5] bg-[#FFFAEC] gap-4 sm:gap-0">
      <div className="relative bg-[#FFFAEC] w-full sm:w-auto">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-[#353535]">Sort:</span>
          <button
            className="flex items-center justify-between gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white/50 rounded-full border border-gray-100 w-full sm:w-[180px] h-[40px] sm:h-[48px]"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="text-[#CCCCCC] text-sm sm:text-base">{selectedPeriod}</span>
            <FontAwesomeIcon 
              icon={faChevronDown}
              className={`text-[#CCCCCC] w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            />
          </button>
        </div>

        {isOpen && (
          <div className="absolute top-full left-0 mt-2 w-full sm:w-[180px] bg-white rounded-xl shadow-lg border border-[#F5ECD5] py-2 z-10">
            {['Last week', 'Last month', 'Last year'].map((period) => (
              <button
                key={period}
                className={`w-full px-4 py-2 text-left text-sm hover:bg-[#FFFAEC] flex items-center justify-between ${
                  selectedPeriod === period ? 'text-[#578E7E] font-medium' : 'text-[#353535]'
                }`}
                onClick={() => handlePeriodSelect(period)}
              >
                {period}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="flex items-center gap-4 sm:gap-8 w-full sm:w-auto justify-between sm:justify-end">
        <button className="relative">
          <Icon 
            name="notification" 
            size={24} 
            className="text-[#353535]" 
          />
          <span className="absolute top-0 right-0 w-2 h-2 bg-[#FF5789] rounded-full" />
        </button>

        <div className="flex items-center gap-4">
          <div className="relative w-8 sm:w-10 h-8 sm:h-10">
            <div className="absolute -top-[2px] -right-[2px] w-3 h-3 bg-[#00FD48] rounded-full border-2 border-white z-10" />
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <Image
                src="/image.jpg"
                alt="Profile"
                fill
                className="object-cover w-full h-full rounded-full"
                priority
                sizes="40px"
              />
            </div>
          </div>
          <div className="text-left">
            <h3 className="text-sm font-medium text-[#353535]">Kartik</h3>
            <p className="text-xs text-[#CCCCCC]">kartik@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;