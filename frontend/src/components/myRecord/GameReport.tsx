import React from 'react';
import './GameReport.css';
import { Box } from '@mui/system'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from "recharts";
import axios from 'axios';
import Stack from '@mui/material/Stack'
import { createTheme, ThemeProvider } from '@mui/material/styles';

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
  // {
  //   name: "E",
  //   CodeAccuracy: 4800,
  // },
  // {
  //   name: "F",
  //   CodeAccuracy: 3800,
  // },
  // {
  //   name: "G",
  //   CodeAccuracy: 4300,
  // }
];

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#ffffff',
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#0e0e0e",
    },
  },
});

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box component="div">
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}


export function GameReport() {
  
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
      console.log(newValue)
    };
// bgcolor: 'background.paper'
// alignItems:'center'
  
    return (
      <Box component="div">
        <Typography sx={{ display: 'flex', justifyContent: 'center', mb: 3}} id="text-color-game">지난 7게임의 기록을 확인할 수 있습니다.</Typography>
      <ThemeProvider theme={theme}>
        
      <Stack spacing={2} direction="row" sx={{ display: 'flex', justifyContent: 'center'}}>
        <Box component="div" sx={{ bgcolor: 'secondary', display: 'flex', height: 500 }}>
          <Tabs
            orientation="vertical"
            selectionFollowsFocus={true}
            // variant="scrollable"
            // aria-label="full width tabs example"
            variant="fullWidth"
            value={value}
            onChange={handleChange}
            visibleScrollbar={false}
            // sx={{ borderRight: 1, borderColor: 'divider' }}
          >
            <Tab label="level: 중" {...a11yProps(0)} id="text-color-game"/>
            <Tab label="level: 상" {...a11yProps(1)} id="text-color-game"/>
            <Tab label="level: 상" {...a11yProps(2)} id="text-color-game"/>
            <Tab label="level: 중" {...a11yProps(3)} id="text-color-game"/>
            <Tab label="level: 중" {...a11yProps(4)} id="text-color-game"/>
            <Tab label="level: 중" {...a11yProps(5)} id="text-color-game"/>
            <Tab label="level: 상" {...a11yProps(6)} id="text-color-game"/>
            
            {/* <Tab label="" disabled id="text-color"/>
            <Tab label="" disabled id="text-color"/>
            <Tab label="지난 7게임의 기록을 확인할 수 있습니다." disabled id="text-color"/> */}
          </Tabs>

          <TabPanel value={value} index={0}>
              <Box component="div" sx={{ ml:5 }}>
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
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Box component="div" sx={{ ml:5 }}>
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
          </TabPanel>
          <TabPanel value={value} index={2}>
          <Box component="div" sx={{ ml:5 }}>
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
          </TabPanel>
          <TabPanel value={value} index={3}>
          <Box component="div" sx={{ ml:5 }}>
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
          </TabPanel>
          <TabPanel value={value} index={4}>
          <Box component="div" sx={{ ml:5 }}>
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
          </TabPanel>
          <TabPanel value={value} index={5}>
            <Box component="div" sx={{ ml:5 }}>
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
          </TabPanel>
          <TabPanel value={value} index={6}>
            <Box component="div" sx={{ ml:5 }}>
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
          </TabPanel>
        </Box>  
      </Stack>
      </ThemeProvider>
      </Box>
    )
  }

export default GameReport;