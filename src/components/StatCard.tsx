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
    <div className={`bg-white rounded-[20px] p-6 h-full ${className}`}>
      <header className="flex items-center justify-between mb-6">
        <div className="space-y-1">
          <h3 className="text-base font-medium" style={{ color: colors.text.muted }}>{title}</h3>
          <p className="text-2xl font-bold" style={{ color: colors.text.secondary }}>{value}</p>
        </div>
        <span className="w-10 h-10 rounded-full bg-[#F5F5F5] flex items-center justify-center">
          {icon}
        </span>
      </header>
      <div className="h-[120px]">
        {chart}
      </div>
    </div>
  );
} 