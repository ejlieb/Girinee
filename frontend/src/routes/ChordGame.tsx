import GIRINEE from '../assets/images/GIRINEE.png'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
// import { typography } from '@mui/system'
import './ChordGame.css'

export function ChordGame() {
    // script
  
    // JSX
    return (
      <Box id="game-body" sx={{ display: 'flex', flexDirection: 'column' }}>
        {/* Navbar */}
        <Box id="menu-bar" sx={{ mt: 4, px: 8, display: 'flex', justifyContent: 'space-between'}}>
          {/* 텍스트로고 */}
          <img id="girinee-img" src={GIRINEE} alt="GIRINEE.png" />
          <Stack spacing={2} direction="row">
            <Button variant="text">
              <Typography className="menu-text">MY PAGE</Typography>
            </Button>
            <Button variant="text">
              <Typography className="menu-text">LOGOUT</Typography>
            </Button>
          </Stack>
        </Box>
      
        {/* 컨트롤패널 */}
        <Box id="control-panel" sx={{ mt: 5, px: 8, display: 'flex', justifyContent: 'space-between'}}>
          <Box sx={{ display: 'flex'}}>
            {/* 컨트롤러 */}
            <div id="level-controller">
              <div id="level-index"></div>
            </div>

            {/* 레벨버튼 누르면 해당하는 부분으로 위의 컨트롤러가 회전 */}
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
              {/* 추후 버튼으로 수정 */}
              <Button id="low-level-btn" variant="text">
                <Typography className="white-text">LOW</Typography>
              </Button>
              <Button id="mid-level-btn" variant="text">
                <Typography className="white-text">MID</Typography>
              </Button>
              <Button id="high-level-btn" variant="text">
                <Typography className="white-text">HIGH</Typography>
              </Button>
            </Box>
          </Box>

          <div className='white-text'> 여기서 고른 난이도를 보여줌 </div>
          <Switch color="default"></Switch>
          <div className='white-text'> https://mui.com/material-ui/react-switch/#basic-switches</div>
          <div className='white-text'> 여기서 스위치로 메인화면</div>
        </Box>

        {/* 메인 화면 */}
        <Box id="game-content">

        </Box>
      </Box>
    )
  }
  
  // Three Function
