import { FC } from 'react';
import Image from 'next/image';
import { IconName } from '../types/icon';

interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
  color?: string;
}

const Icon: FC<IconProps> = ({ 
  name, 
  size = 24, 
  className = '',
  color = '#CDC7B5'
}) => {
  return (
    <Image
      src={`/Svg/linear/${name}.svg`}
      alt={`${name} icon`}
      width={size}
      height={size}
      className={className}
      style={{
        filter: `brightness(0) saturate(100%) ${color.toLowerCase() === '#ffffff' ? 'invert(100%)' : `invert(${getColorBrightness(color)})`}`,
      }}
    />
  );
};

// Helper function to calculate brightness for the invert filter
function getColorBrightness(hex: string) {
  // Remove the hash if present
  hex = hex.replace('#', '');
  
  // Convert hex to RGB
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  
  // Calculate perceived brightness (human eye favors green color)
  const brightness = (r * 0.299 + g * 0.587 + b * 0.114) / 255;
  
  return brightness;
}

export default Icon;