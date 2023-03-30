import React from 'react'
import { LightModeOutlined, DarkModeOutlined, Menu as MenuIcon, Search, SettingsOutlined, ArrowDropDownOutlined } from '@mui/icons-material'

import FlexBetween from './FlexBetween'
import { useDispatch } from 'react-redux'
import { setMode } from 'state'
import profileImage from 'assets/profile.jpg'
import { AppBar, IconButton, InputBase, Toolbar, useTheme, Button, Box, Typography, Menu, MenuItem } from '@mui/material'
// import { Button } from 'bootstrap'


const Navbar = ({ user, isSideBarOpen, setIsSideBarOpen }) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  // for the menu dropdown
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isOpen = Boolean(anchorEl)
  const handleClick = (e) => {
    console.log(e);
    setAnchorEl(e.currentTarget);
  }
  const handleClose = (e) => {
    console.log(e);
    setAnchorEl(null);
  }

  return (
    <AppBar
      sx={{
        position: 'static',
        background: 'none',
        boxShadow: 'none',
        // backgroundColor : 'yellow'
      }}
    >
      <Toolbar
        sx={{
          justifyContent: 'space-between',
          // backgroundColor : 'orange'
        }}
      >
        {/* left side */}
        <FlexBetween sx={{}} >
          <IconButton onClick={() => setIsSideBarOpen(!isSideBarOpen)} >
            <MenuIcon  ></MenuIcon>
          </IconButton>
          <FlexBetween
            backgroundColor={theme.palette.background.alt}
            borderRadius='9px'
            gap='3rem'
            p='0.1rem 1.5rem'
          >
            <InputBase placeholder='Search...' />
            <IconButton><Search /></IconButton>
          </FlexBetween>
        </FlexBetween>
        {/* right side */}
        <FlexBetween gap='1.5rem' sx={{}}>
          <IconButton onClick={() => dispatch(setMode())} >
            {theme.palette.mode === 'dark' ? <DarkModeOutlined sx={{ fontSize: '25px' }} /> : <LightModeOutlined sx={{ fontSize: '25px' }} />}
          </IconButton>
          <IconButton >
            <SettingsOutlined sx={{ fontSize: '25px' }} />
          </IconButton>

          {/* user information displayed here */}

          <FlexBetween  >
            <Button onClick={handleClick}
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                textTransform: 'none',
                gap: '1rem'
              }}
            >
              <Box component='img' alt='profile' src={profileImage}
                height='32px' width='32px' borderRadius='50%'
                sx={{
                  objectFit: 'cover',
                }}
              />
              <Box textAlign='left' >
                <Typography fontWeight='bold' fontSize='0.85rem' sx={{
                  color: theme.palette.secondary[100]
                }}>
                  {user.name}
                </Typography>
                <Typography fontSize='0.75rem' sx={{
                  color: theme.palette.secondary[200]
                }}>
                  {user.occupation}
                </Typography>
              </Box>
              <ArrowDropDownOutlined
                sx={{
                  color: theme.palette.secondary[300],
                  fontSize: '25px',
                }}
              />
            </Button>
            <Menu anchorEl = {anchorEl} open = {isOpen} onClick = {handleClose}  
              anchorOrigin = {{ vertical : 'bottom', horizontal : 'center' }}
            >
              <MenuItem onClick = {handleClose} >Log Out</MenuItem>
            </Menu>
          </FlexBetween>


        </FlexBetween>

      </Toolbar>
    </AppBar>
  )
}

export default Navbar