'use client';

import { ReactNode } from 'react';
import { colors } from '@/constants/colors';

interface StatCardProps {
  title: string;
  value: string;
  icon: ReactNode;
  chart: ReactNode;
  className?: string;
}

export default function StatCard({ title, value, icon, chart, className = '' }: StatCardProps) {
  return (
    <div className={`bg-white rounded-[20px] p-4 sm:p-6 h-full hover:shadow-lg transition-shadow duration-200 ${className}`}>
      <header className="flex items-center justify-between mb-4 sm:mb-6">
        <div className="space-y-0.5 sm:space-y-1">
          <h3 className="text-sm sm:text-base font-medium" style={{ color: colors.text.muted }}>{title}</h3>
          <p className="text-lg sm:text-2xl font-bold" style={{ color: colors.text.secondary }}>{value}</p>
        </div>
        <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#F5F5F5] flex items-center justify-center flex-shrink-0">
          {icon}
        </span>
      </header>
      <div className="h-[100px] sm:h-[120px]">
        {chart}
      </div>
    </div>
  );
} 