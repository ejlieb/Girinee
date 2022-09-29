import React, { useState, useEffect } from 'react';
import { Box } from '@mui/system'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from "recharts";
import Typography from '@mui/material/Typography';
import axios from 'axios';

import './PracticeReport.css';


// main
export function PracticeReport() {

  // axios 상태 관리
  const [users, setUsers] = React.useState(null);
  
  // 로컬 스토리지에 있는 토큰 값 저장
  const accessToken = window.localStorage.getItem('accessToken')

  const graphdata = [
    // {
    //   name: "A",
    //   CodeAccuracy: 0,
    // },
    {
      name: "B",
      CodeAccuracy: 0,
      // CodeAccuracy: (users['B'].get("success")/(users['B'].get("success") + users['B'].get("failure")) * 100).toFixed(0),
    },
    {
      name: "C",
      CodeAccuracy: 0,
      // CodeAccuracy: (users['C'].get("success")/(users['C'].get("success") + users['c'].get("failure")) * 100).toFixed(0),
    },
    {
      name: "D",
      CodeAccuracy: 0,
      // CodeAccuracy: (users['D'].get("success")/(users['D'].get("success") + users['D'].get("failure")) * 100).toFixed(0),
    },
    {
      name: "E",
      CodeAccuracy: 0,
      // CodeAccuracy: (users['E'].get("success")/(users['E'].get("success") + users['E'].get("failure")) * 100).toFixed(0),
    },
    {
      name: "F",
      CodeAccuracy: 0,
      // CodeAccuracy: (users['F'].get("success")/(users['F'].get("success") + users['F'].get("failure")) * 100).toFixed(0),
    },
    {
      name: "G",
      CodeAccuracy: 0,
      // CodeAccuracy: (users['G'].get("success")/(users['G'].get("success") + users['G'].get("failure")) * 100).toFixed(0),
    }
  ];

  // axios 요청
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 users 를 초기화하고 loading 상태를 true 로 바꿉니다.
        // setError(null);
        // setLoading(true);
        // setUsers(null);

        const response = await axios.get(
          'https://j7a202.p.ssafy.io/api/record/practice', {
            headers: {
              Authorization: `Bearer ${accessToken}`
            }
          }
        );
        setUsers(response.data); // 데이터는 response.data 안에 들어있습니다.
        console.log('data = ', response.data)
        console.log(response.data['B'])
        console.log(response.data['B']['success'])
        console.log(response.data['B']['failure'])
      } catch (e: any) {
        console.log('errer=', e)
        // setError(e);
      }
      // setLoading(false);

    };

    fetchUsers();
  }, []);


  // 그래프 데이터 관리
  if(users != null) {
    console.log("if문 안에서", users)
    console.log("if문 안에서", users['B'])
    console.log("if문 안에서", users['B']['success'])
    console.log("if문 안에서", users['B']['failure'])
    console.log("if문 안에서", typeof(users['B']['failure']))
    const Bs = users['B']['success']
    const Bf = users['B']['failure']
    
    const graphdata = [
      // {
      //   name: "A",
      //   // CodeAccuracy: 80,
      //   CodeAccuracy: ( parseInt(users['A']['success'])/( parseInt(users['A']['success']) +  parseInt(users['A']['failure'])) * 100).toFixed(0),
      // },
      {
        name: "B",
        CodeAccuracy: parseInt(users['B']['success'])
        // CodeAccuracy: ( parseInt(users['B']['success'])/( parseInt(users['B']['success']) +  parseInt(users['B']['failure'])) * 100).toFixed(0),
      },
      {
        name: "C",
        CodeAccuracy: parseInt(users['C']['success'])
        // CodeAccuracy: ( parseInt(users['C']['success'])/( parseInt(users['C']['success']) +  parseInt(users['c']['failure'])) * 100).toFixed(0),
      },
      {
        name: "D",
        CodeAccuracy: parseInt(users['D']['success'])
        // CodeAccuracy: ( parseInt(users['D']['success'])/( parseInt(users['D']['success']) +  parseInt(users['D']['failure'])) * 100).toFixed(0),
      },
      {
        name: "E",
        CodeAccuracy: parseInt(users['E']['success'])
        // CodeAccuracy: ( parseInt(users['E']['success'])/( parseInt(users['E']['success']) +  parseInt(users['E']['failure'])) * 100).toFixed(0),
      },
      {
        name: "F",
        CodeAccuracy: parseInt(users['F']['success'])
        // CodeAccuracy: ( parseInt(users['F']['success'])/( parseInt(users['F']['success']) +  parseInt(users['F']['failure'])) * 100).toFixed(0),
      },
      {
        name: "G",
        CodeAccuracy: parseInt(users['B']['success'])
        // CodeAccuracy: ( parseInt(users['G']['success'])/( parseInt(users['G']['success']) +  parseInt(users['G']['failure'])) * 100).toFixed(0),
      }
    ];
  }


  // if (loading) return <div>로딩중..</div>;
  // if (error) return <div>에러가 발생했습니다</div>;
  return (

    <Box component="div">
      <Typography sx={{ display: 'flex', justifyContent: 'center', mb:3}} id="text-color-practice">코드별 정확도를 확인할 수 있습니다.</Typography>
      <BarChart
        width={900}
        height={600}
        data={graphdata}
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

export default PracticeReport;
