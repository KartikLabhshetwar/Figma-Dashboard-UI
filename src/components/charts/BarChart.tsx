import { BarChart as RechartsBarChart, Bar, ResponsiveContainer } from 'recharts';

interface BarChartProps {
  data: { value: number }[];
  color: string;
}

export default function BarChart({ data, color }: BarChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsBarChart data={data} margin={{ top: 5, right: 5, bottom: 5, left: 5 }} barGap={4}>
        <defs>
          <linearGradient id={`gradient-${color}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity={0.9} />
            <stop offset="100%" stopColor={color} stopOpacity={0.05} />
          </linearGradient>
        </defs>
        <Bar 
          dataKey="value" 
          fill={`url(#gradient-${color})`} 
          radius={[10, 10, 10, 10]} 
          maxBarSize={12} 
        />
      </RechartsBarChart>
    </ResponsiveContainer>
  );
} 