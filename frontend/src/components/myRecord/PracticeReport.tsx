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
  const graphdata = [
        {
          name: "A",
          CodeAccuracy: 0,
        },
        {
          name: "B",
          CodeAccuracy: 0,
        },
        {
          name: "C",
          CodeAccuracy: 0,
        },
        {
          name: "D",
          CodeAccuracy: 0,
        },
        {
          name: "E",
          CodeAccuracy: 0,
        },
        {
          name: "F",
          CodeAccuracy: 0,
        },
        {
          name: "G",
          CodeAccuracy: 0,
        }
      ];

  // 로컬 스토리지에 있는 토큰 값 저장
  const accessToken = window.localStorage.getItem('accessToken')

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
      } catch (e: any) {
        console.log('errer=', e)
        // setError(e);
      }
      // setLoading(false);

    };

    fetchUsers();
  }, []);


  // 그래프 데이터 관리
  // if (users) {
    // const graphdata = [
    //   {
    //     name: "A",
    //     // CodeAccuracy: 80,
    //     CodeAccuracy: (users['A']["success"]/(users['A']["success"] + users['A']["failure"]) * 100).toFixed(0),
    //   },
    //   {
    //     name: "B",
    //     // CodeAccuracy: 40,
    //     CodeAccuracy: (users['B']["success"]/(users['B']["success"] + users['B']["failure"]) * 100).toFixed(0),
    //   },
    //   {
    //     name: "C",
    //     // CodeAccuracy: 30,
    //     CodeAccuracy: (users['C']["success"]/(users['C']["success"] + users['c']["failure"]) * 100).toFixed(0),
    //   },
    //   {
    //     name: "D",
    //     // CodeAccuracy: 90,
    //     CodeAccuracy: (users['D']["success"]/(users['D']["success"] + users['D']["failure"]) * 100).toFixed(0),
    //   },
    //   {
    //     name: "E",
    //     // CodeAccuracy: 60,
    //     CodeAccuracy: (users['E']["success"]/(users['E']["success"] + users['E']["failure"]) * 100).toFixed(0),
    //   },
    //   {
    //     name: "F",
    //     // CodeAccuracy: 50,
    //     CodeAccuracy: (users['F']["success"]/(users['F']["success"] + users['F']["failure"]) * 100).toFixed(0),
    //   },
    //   {
    //     name: "G",
    //     // CodeAccuracy: 85,
    //     CodeAccuracy: (users['G']["success"]/(users['G']["success"] + users['G']["failure"]) * 100).toFixed(0),
    //   }
    // ];
  // } else {
  //   const graphdata = [
  //     {
  //       name: "A",
  //       CodeAccuracy: 0,
  //     },
  //     {
  //       name: "B",
  //       CodeAccuracy: 0,
  //     },
  //     {
  //       name: "C",
  //       CodeAccuracy: 0,
  //     },
  //     {
  //       name: "D",
  //       CodeAccuracy: 0,
  //     },
  //     {
  //       name: "E",
  //       CodeAccuracy: 0,
  //     },
  //     {
  //       name: "F",
  //       CodeAccuracy: 0,
  //     },
  //     {
  //       name: "G",
  //       CodeAccuracy: 0,
  //     }
  //   ];
  // }


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
      {users}
    </Box>
  )
}

export default PracticeReport;
