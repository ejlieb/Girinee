import React from 'react';
import { Box } from '@mui/system'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from "recharts";


const data = [
  {
    name: "A",
    CodeAccuracy: 2400,
  },
  {
    name: "B",
    CodeAccuracy: 1398,
  },
  {
    name: "C",
    CodeAccuracy: 9800,
  },
  {
    name: "D",
    CodeAccuracy: 3908,
  },
  {
    name: "E",
    CodeAccuracy: 4800,
  },
  {
    name: "F",
    CodeAccuracy: 3800,
  },
  {
    name: "G",
    CodeAccuracy: 4300,
  }
];

export function GameReport() {
  
    return (
      <Box component="div">
        <BarChart
          width={900}
          height={600}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="2 2" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="CodeAccuracy" fill="#e0ffff" barSize={30} />
        </BarChart>
      </Box>
    )
  }

export default GameReport;