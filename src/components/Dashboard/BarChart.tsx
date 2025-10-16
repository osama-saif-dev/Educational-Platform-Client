'use client';
import React from 'react';
import {
  BarChart as NewBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const data = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
];

export default function BarChart() {
  return (
    <div className='w-full'>
      <div className='flex items-center justify-between mb-4 pb-4 border-b border-collapse'>
        <h1 className='font-bold'>Profile View</h1>
        <Select>
          <SelectTrigger className="w-[180px] focus:outline-none focus:border-none">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent position="popper" className="max-h-60 overflow-y-auto transition-none">
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <NewBarChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          barSize={20}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey='pv' name={'Profile View'} fill="#22c55e" background={{ fill: '#eee' }} />
          <div>
            <h1>7,443 L.E</h1>
            <p>Pound you earned.</p>
          </div>
        </NewBarChart>
      </ResponsiveContainer>
    </div>
  );
}
