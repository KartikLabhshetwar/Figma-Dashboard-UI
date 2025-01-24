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
    <div className="flex items-center h-[88px] px-6 hover:bg-[#FFFAEC] transition-colors cursor-pointer">
      <div className="w-[200px] flex items-center gap-4">
        <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
          <Image
            src={avatar || '/placeholder-avatar.jpg'} // Provide a default avatar
            alt={name}
            fill
            className="object-cover"
            sizes="40px"
          />
        </div>
        <h3 className="text-[#1A1A1A] text-base font-medium pl-4">{name}</h3>
      </div>
      
      <div className="flex-1 min-w-0 ml-40">
        <p className="text-black text-sm truncate">{message}</p>
      </div>
      
      <div className="w-[200px] flex items-center justify-between">
        <span className={`text-sm ${
          status === 'Pending' 
            ? 'text-[#CCCCCC]' 
            : 'text-[#578E7E]'
        }`}>
          {status}
        </span>
      </div>
      <div className='pr-4'>
        <span className="text-[#CCCCCC] text-sm">{time}</span>
      </div>
    </div>
  );
};

export default MessageCard;