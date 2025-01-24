import { FC } from 'react';
import Image from 'next/image';
import { IconName } from '../types/icon';

interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
  isActive?: boolean;
  color?: string;
}

const Icon: FC<IconProps> = ({ 
  name, 
  size = 24, 
  className = '',
  isActive = false,
  color 
}) => {
  return (
    <div 
      style={{ 
        width: size, 
        height: size,
        color: color || (isActive ? '#F5ECD5' : '#CDC7B5')
      }} 
      className={`inline-flex items-center justify-center ${className}`}
    >
      <Image
        src={`/Svg/linear/${name}.svg`}
        alt={`${name} icon`}
        width={size}
        height={size}
        className="w-full h-full"
      />
    </div>
  );
};

export default Icon;