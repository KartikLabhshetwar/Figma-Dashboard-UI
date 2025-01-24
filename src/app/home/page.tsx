'use client';

import StatCard from '@/components/StatCard';
import RecentMessages from '@/components/RecentMessages';
import Icon from '@/components/Icon';
import { BarChart, Bar, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const revenueData = [
  { value: 400 },
  { value: 300 },
  { value: 500 },
  { value: 200 },
  { value: 400 },
  { value: 300 },
  { value: 450 },
  { value: 350 },
];

const expensesData = [
  { value: 300 },
  { value: 400 },
  { value: 200 },
  { value: 400 },
  { value: 450 },
  { value: 500 },
  { value: 300 },
  { value: 350 },
];

const salesData = [
  { value: 1000, label: 'M' },
  { value: 2500, label: 'T' },
  { value: 3500, label: 'W' },
  { value: 2000, label: 'T' },
  { value: 1500, label: 'F' },
  { value: 3200, label: 'S' },
  { value: 1800, label: 'S' },
];


export default function HomePage() {
  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6 lg:space-y-8">
      <div>
        <h1 className="text-2xl sm:text-3xl lg:text-[36px] font-extrabold mb-1 text-[#353535]">Home</h1>
        <p className="text-[#CCCCCC] text-sm sm:text-base font-medium">Welcome back, Kartik</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
        <div className="w-full min-h-[200px] sm:min-h-[240px] lg:min-h-[260px]">
          <StatCard
            title="Revenue"
            value="$3690"
            icon={<Icon name="arrow-up" variant="linear" size={20} className="text-[#578E7E]" />}
            chart={
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={revenueData} margin={{ top: 0, right: 0, bottom: 0, left: 0 }} barGap={8}>
                  <defs>
                    <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#578E7E" stopOpacity={0.9} />
                      <stop offset="100%" stopColor="#578E7E" stopOpacity={0.05} />
                    </linearGradient>
                  </defs>
                  <Bar dataKey="value" fill="url(#revenueGradient)" radius={[20, 20, 20, 20]} maxBarSize={16} />
                </BarChart>
              </ResponsiveContainer>
            }
          />
        </div>
        <div className="w-full min-h-[200px] sm:min-h-[240px] lg:min-h-[260px]">
          <StatCard
            title="Expenses"
            value="$1200.5"
            icon={<Icon name="arrow-down" variant="linear" size={20} className="text-[#FF5789] icon-color-[#CCCCCC]" />}
            chart={
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={expensesData} margin={{ top: 0, right: 0, bottom: 0, left: 0 }} barGap={8}>
                  <defs>
                    <linearGradient id="expensesGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#FF5789" stopOpacity={0.9} />
                      <stop offset="100%" stopColor="#FF5789" stopOpacity={0.05} />
                    </linearGradient>
                  </defs>
                  <Bar dataKey="value" fill="url(#expensesGradient)" radius={[20, 20, 20, 20]} maxBarSize={16} />
                </BarChart>
              </ResponsiveContainer>
            }
          />
        </div>
        <div className="w-full min-h-[200px] sm:min-h-[240px] lg:min-h-[260px]">
          <StatCard
            title="Sales"
            value="4389"
            icon={<Icon name="arrow-up" variant="linear" size={20} className="text-[#578E7E]" />}
            chart={
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={salesData} margin={{ top: 20, right: 20, bottom: 20, left: 0 }}>
                  <XAxis 
                    dataKey="label" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fontSize: 14, fill: '#CCCCCC' }}
                    dy={10}
                    padding={{ left: 0, right: 0 }}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 14, fill: '#CCCCCC' }}
                    tickFormatter={(value) => `${value / 1000}K`}
                    ticks={[1000, 2000, 3000, 4000]}
                    dx={-5}
                    domain={[0, 4000]}
                  />
                  <Line
                    type="monotoneX"
                    dataKey="value"
                    stroke="#353535"
                    strokeWidth={2}
                    dot={false}
                    fill="none"
                  />
                </LineChart>
              </ResponsiveContainer>
            }
          />
        </div>
      </div>

      <div className="space-y-6 w-full">
          <h2 className="text-[#1A1A1A] text-2xl font-semibold">Recent Messages</h2>
        <RecentMessages />
      </div>
    </div>
  );
}