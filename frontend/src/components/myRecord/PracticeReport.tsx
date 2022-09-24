import React from 'react';
import { Box } from '@mui/system'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from "recharts";


const data = [
  {
    name: "A",
    CodeAccuracy: 5000,
  },
  {
    name: "B",
    CodeAccuracy: 4000,
  },
  {
    name: "C",
    CodeAccuracy: 3500,
  },
  {
    name: "D",
    CodeAccuracy: 3300,
  },
  {
    name: "E",
    CodeAccuracy: 3000,
  },
  {
    name: "F",
    CodeAccuracy: 2500,
  },
  {
    name: "G",
    CodeAccuracy: 2000,
  }
];

export function PracticeReport() {
  
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
          <Bar dataKey="CodeAccuracy" fill="#e0ffff" barSize={25} />
        </BarChart>
      </Box>
    )
  }

export default PracticeReport;