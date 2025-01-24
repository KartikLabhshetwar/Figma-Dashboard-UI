import { LineChart as RechartsLineChart, Line, ResponsiveContainer, XAxis, YAxis } from 'recharts';

interface LineChartProps {
  data: { value: number; label: string }[];
  color?: string;
}

export default function LineChart({ data, color = '#1A1A1A' }: LineChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsLineChart data={data} margin={{ top: 10, right: 10, bottom: 10, left: 0 }}>
        <XAxis 
          dataKey="label" 
          axisLine={false} 
          tickLine={false} 
          tick={{ fontSize: 10, fill: '#CCCCCC' }}
          dy={5}
          interval="preserveStartEnd"
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 10, fill: '#CCCCCC' }}
          tickFormatter={(value) => `${value/1000}K`}
          ticks={[1000, 2000, 3000, 4000]}
          domain={[0, 4000]}
          orientation="left"
          dx={-5}
          width={25}
        />
        <Line
          type="monotone"
          dataKey="value"
          stroke={color}
          strokeWidth={2}
          dot={false}
          fill="none"
        />
      </RechartsLineChart>
    </ResponsiveContainer>
  );
} 