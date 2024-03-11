import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Brush,
  AreaChart,
  Area,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Jan',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Feb',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Mar',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Apr',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'May',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Jun',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Jul',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Aug',
    uv: 3480,
    pv: 4320,
    amt: 2190,
  },
  {
    name: 'Sep',
    uv: 3460,
    pv: 4370,
    amt: 2150,
  },
  {
    name: 'Oct',
    uv: 3510,
    pv: 4340,
    amt: 2150,
  },
  {
    name: 'Nov',
    uv: 3550,
    pv: 4360,
    amt: 2180,
  },
  {
    name: 'Dec',
    uv: 3600,
    pv: 4390,
    amt: 2200,
  },
];
const AdminChart = () => {
  return (
        <ResponsiveContainer width={'100%'} height='100%'>
          <AreaChart
            width={500}
            height={150}
            data={data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 10,
              left: 10,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" style={{fontSize: '9px'}} />
            <Tooltip />
            <Area type="monotone" dataKey="pv" stroke="#EBB79A" fill="#FCF6F2" />
            <Area type="monotone" dataKey="uv" stroke="#F79009" fill="#FCF6F2" />
            <Area type="monotone" dataKey="amt" stroke="#D15F1E" fill="#FCF6F2" />
          </AreaChart>
        </ResponsiveContainer>
  )
}

export default AdminChart
