import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  XAxis,
  CartesianGrid,
  Tooltip,
  AreaChart,
  Area,
  ResponsiveContainer,
} from 'recharts';
import { adminUsersBreakdown } from '../../features/admin/AdminActions';

const data = [
  // {
  //   name: 'Jan',
  //   2024: 2400,
  //   2021: 4000,
  //   2020: 2400,
  // },
  {
    2024: 1,
    month: 'Feb',
    // user_count: 1,
  },
  {
    2024: 3,
    month: 'Mar',
    // user_count: 1,
  },
  // {
  //   year: 2024,
  //   month: 'Feb',
  //   user_count: 1,
  // },
  // {
  //   year: 2024,
  //   month: 'Mar',
  //   user_count: 1,
  // },
  // {
  //   name: 'Apr',
  //   2022: 3908,
  //   2021: 2780,
  //   2020: 2000,
  // },
  // {
  //   name: 'May',
  //   2022: 4800,
  //   2021: 1890,
  //   2020: 2181,
  // },
  // {
  //   name: 'Jun',
  //   2022: 3800,
  //   2021: 2390,
  //   2020: 2500,
  // },
  // {
  //   name: 'Jul',
  //   2022: 4300,
  //   2021: 3490,
  //   2020: 2100,
  // },
  // {
  //   name: 'Aug',
  //   2022: 4320,
  //   2021: 3480,
  //   2020: 2190,
  // },
  // {
  //   name: 'Sep',
  //   2022: 4370,
  //   2021: 3460,
  //   2020: 2150,
  // },
  // {
  //   name: 'Oct',
  //   2022: 4340,
  //   2021: 3510,
  //   2020: 2150,
  // },
  // {
  //   name: 'Nov',
  //   2022: 4360,
  //   2021: 3550,
  //   2020: 2180,
  // },
  // {
  //   name: 'Dec',
  //   2022: 4390,
  //   2021: 3600,
  //   2020: 2200,
  // },
];



const AdminChart = () => {
  const [chart, setChart] = useState([])
  const [loading, setLoading] = useState(false)

  const dispatch = useDispatch();


useEffect(() => {
  dispatch(adminUsersBreakdown(setChart, setLoading))
  // console.log(chart)
}, [dispatch, chart])

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
            <XAxis dataKey="month" style={{fontSize: '9px'}} />
            <Tooltip />
            <Area type="monotone" dataKey="2024" stroke="#D15F1E" fill="#FCF6F2" />
            {/*<Area type="monotone" dataKey="2021" stroke="#F79009" fill="#FCF6F2" />
             <Area type="monotone" dataKey="2020" stroke="#EBB79A" fill="#FCF6F2" />*/}
          </AreaChart>
        </ResponsiveContainer>
  )
}

export default AdminChart
