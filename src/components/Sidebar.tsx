'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Icon from '@/components/Icon';

interface NavigationItem {
  name: string;
  href: string;
  iconName: string;
  className?: string;
}

const Sidebar = () => {
  const pathname = usePathname();

  const navigation: NavigationItem[] = [
    { name: 'Home', href: '/home', iconName: 'home' },
    { name: 'Analytics', href: '/analytics', iconName: 'chart' },
    { name: 'Settings', href: '/settings', iconName: 'setting' },
    { name: 'User Profile', href: '/user-profile', iconName: 'Customers' },
  ];

  return (
    <div className="fixed left-0 top-0 h-full w-[280px] bg-[#578E7E] text-[#FFFAEC] p-8 rounded-tr-[48px] rounded-br-[48px]">
      <div className="flex items-center gap-3 mb-16 pl-5">
        <div className="w-10 h-10 bg-[#FFFAEC] flex items-center justify-center">
          <div className="w-5 h-5 bg-[#578E7E]" />
        </div>
        <span className="text-xl font-semibold">Square</span>
      </div>
      
      <nav className="space-y-2">
        {navigation.map((item) => {
          const isActive = pathname.startsWith(item.href);
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`group relative flex items-center gap-4 px-5 py-3.5 rounded-xl transition-all ${
                isActive 
                  ? 'bg-white/15 font-medium'
                  : 'hover:bg-white/10'
              }`}
            >
              {isActive && (
                <div className="absolute left-[-2rem] top-0 h-full w-[5px] bg-[#FFFAEC] rounded-r" />
              )}
              <Icon 
                name={item.iconName}
                variant="linear"
                size={24}
                className={`transition-colors ${isActive ? 'text-[#FFFAEC]' : 'text-[#CDC7B5] group-hover:text-[#FFFAEC]'}`}
              />
              <span className={`text-[15px] transition-colors ${isActive ? 'text-[#FFFAEC]' : 'text-[#CDC7B5] group-hover:text-[#FFFAEC]'}`}>
                {item.name}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;