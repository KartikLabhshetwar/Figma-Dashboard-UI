'use client';

import Image from 'next/image';

interface MessageCardProps {
  name: string;
  message: string;
  status: 'Pending' | 'Answered';
  time: string;
  avatar?: string;
}

const MessageCard = ({ name, message, status, time, avatar }: MessageCardProps) => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center border-b border-gray-50 last:border-b-0 hover:bg-[#FFFAEC] transition-colors cursor-pointer">
      <div className="flex items-center gap-3 p-4 sm:p-6 w-full sm:w-[280px] sm:border-r border-gray-50">
        <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden flex-shrink-0">
          <Image
            src={avatar || '/placeholder-avatar.jpg'}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 36px, 40px"
          />
        </div>
        <h3 className="text-[#1A1A1A] text-sm sm:text-base font-medium">{name}</h3>
      </div>
      
      <div className="flex flex-1 items-center justify-between px-4 pb-4 sm:p-6 w-full">
        <p className="text-[#353535] text-sm line-clamp-1 max-w-[200px] sm:max-w-none">
          {message}
        </p>
        
        <div className="flex items-center gap-6">
          <span className={`text-sm whitespace-nowrap min-w-[70px] text-center ${
            status === 'Pending' 
              ? 'text-[#CCCCCC]' 
              : 'text-[#578E7E]'
          }`}>
            {status}
          </span>
          <span className="text-[#CCCCCC] text-sm whitespace-nowrap ml-40">{time}</span>
        </div>
      </div>
    </div>
  );
};

export default MessageCard;