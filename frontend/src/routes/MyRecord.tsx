import { Box } from '@mui/system'
import React from 'react';
import GIRINEE from '../assets/images/GIRINEE.png'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import { Typography } from '@mui/material'
import './MyRecord.css'
import Paper from '@mui/material/Paper';
import { GameReport } from '../components/myRecord/GameReport'
import { PracticeReport } from '../components/myRecord/PracticeReport'
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
// import Grid from '@mui/material/Grid';



// main 함수
export function MyRecord() {
    // script
    const logout = () => {
      const logoutConfirm = window.confirm('로그아웃 하시겠습니까?')
      if (logoutConfirm) {
        localStorage.setItem("token", ' ');
        console.log('로그아웃 되었습니다.')
        window.location.replace('http://localhost:3000')
      }
    };

    // 그래프 뒷 배경
    const Item = styled(Paper)(({ theme }) => ({
      backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#0f0f0f',
      ...theme.typography.body2,
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    }));

    interface TabPanelProps {
      children?: React.ReactNode;
      index: number;
      value: number;
    }

    // Tab으로 나누기
    function TabPanel(props: TabPanelProps) {
      const { children, value, index, ...other } = props;

      return (
        <div
          role="tabpanel"
          hidden={value !== index}
          id={`simple-tabpanel-${index}`}
          aria-labelledby={`simple-tab-${index}`}
          {...other}
        >
          {value === index && (
            <Box sx={{ p: 3 }}>
              <Typography>{children}</Typography>
            </Box>
          )}
        </div>
      );
    }

    function a11yProps(index: number) {
      return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
      };
    }

    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };

    // JSX
    return (

        <Box id="my-record-body" sx={{ display: 'flex', flexDirection: 'column' }}>

          {/* Navbar */}
          <Box id="my-record-menu-bar" sx={{ mt: 4, px: 8, display: 'flex', justifyContent: 'space-between'}}>
            {/* 텍스트로고 */}
            <img id="girinee-img" src={GIRINEE} alt="GIRINEE.png" />
            <Stack spacing={2} direction="row">
              <Button variant="text">
                <Typography className="menu-text">MY PAGE</Typography>
              </Button>
              <Button variant="text">
                <Typography className="menu-text" onClick={logout}>LOGOUT</Typography>
              </Button>
            </Stack>
          </Box>

          {/* 그래프 */}
          <Box>
            <Box sx={{ borderBottom: 2, borderColor: 'secondary', display: 'flex', justifyContent: 'center' }}>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" indicatorColor="secondary" textColor="secondary">
                <Tab label="Code 정확도" {...a11yProps(0)} />
                <Tab label="Game" {...a11yProps(1)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
            Code 정확도
            {/* <Box sx={{ display: 'flex', justifyContent: 'center'}}> */}
              {/* <GameReport /> */}
            {/* </Box> */}
            </TabPanel>
            <TabPanel value={value} index={1}>
            Game
            {/* <Box { display: 'flex', justifyContent: 'center'}> */}
              {/* <PracticeReport /> */}
            {/* </Box> */}
            </TabPanel>
          </Box>

        </Box>          
    )
  }


  
  // Three Function