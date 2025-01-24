'use client';

interface StatCardProps {
  title: string;
  value: string | number;
  chart: React.ReactNode;
  icon?: React.ReactNode;
}

const StatCard = ({ title, value, chart, icon }: StatCardProps) => {
  return (
    <div className="bg-white h-full rounded-2xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-[#CCCCCC] text-base font-medium">{title}</h3>
        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#FFFAEC]">
          {icon}
        </div>
      </div>
      <div className="text-2xl font-extrabold text-[#353535] mb-6">{value}</div>
      <div className="h-[120px] -mx-2">
        {chart}
      </div>
    </div>
  );
};

export default StatCard; 