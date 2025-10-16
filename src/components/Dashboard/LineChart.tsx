'use client';
import {
  LineChart as NewLine, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer
} from 'recharts';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const data = [
  { date: 'Aug 01', value: 100000 },
  { date: 'Aug 07', value: 51749 },
  { date: 'Aug 20', value: 90000 },
];

export default function LineChart() {
  return (
    <div className='w-full'>
      <div className='flex items-center justify-between mb-4 pb-4 border-b border-collapse'>
        <h1 className='font-bold'>Revenue</h1>
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
        <NewLine data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#4F46E5" strokeWidth={2} dot />
        </NewLine>
      </ResponsiveContainer>
    </div>
  )
}


