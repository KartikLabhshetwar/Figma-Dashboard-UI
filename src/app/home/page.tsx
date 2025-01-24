'use client';

import StatCard from '@/components/StatCard';
import RecentMessages from '@/components/RecentMessages';
import Icon from '@/components/Icon';
import { BarChart, LineChart } from '@/components/charts';
import { revenueData, expensesData, salesData } from '@/data/mockData';
import { colors } from '@/constants/colors';

export default function HomePage() {
  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6 lg:space-y-8">
      <header>
        <h1 className="text-2xl sm:text-3xl lg:text-[36px] font-extrabold mb-1" style={{ color: colors.text.secondary }}>Home</h1>
        <p className="text-sm sm:text-base font-medium" style={{ color: colors.text.muted }}>Welcome back, Kartik</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
        <StatCard
          title="Revenue"
          value="$3690"
          icon={<Icon name="arrow-up" size={20} className="text-[#CCCCCC]" />}
          chart={<BarChart data={revenueData} color={colors.chart.revenue} />}
        />
        <StatCard
          title="Expenses"
          value="$1200.5"
          icon={<Icon name="arrow-down" size={20} className="text-[#CCCCCC]" />}
          chart={<BarChart data={expensesData} color={colors.chart.expenses} />}
        />
        <StatCard
          title="Sales"
          value="4389"
          icon={<Icon name="sales" size={20} className="text-[#CCCCCC]" />}
          chart={<LineChart data={salesData} color={colors.chart.sales} />}
        />
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold" style={{ color: colors.text.primary }}>Recent Messages</h2>
        <RecentMessages />
      </section>
    </div>
  );
}