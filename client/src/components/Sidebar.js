import React from 'react'
import {
  Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon,
  ListItemText, Typography, useTheme
} from '@mui/material'
import { ChevronLeft, ChevronRight, ChevronRightOutlined, SettingsOutlined } from '@mui/icons-material'

import { useLocation, useNavigate } from 'react-router-dom'
import FlexBetween from './FlexBetween'
import profileImage from '../assets/profile.jpg'
import { navItems } from 'assets/NavItems'

const Sidebar = ({
  user, isNonMobile, drawerWidth, isSideBarOpen, setIsSideBarOpen
}) => {

  const { pathname } = useLocation();
  const [active, setActive] = React.useState('');
  const navigate = useNavigate();
  const theme = useTheme();

  React.useEffect(() => {
    setActive(pathname?.substring(1))
    // console.log(pathname)
  }, [pathname])
  return (
    <Box component='nav'
      sx={{

      }}
    >
      {isSideBarOpen && (
        <Drawer open={isSideBarOpen}
          onClose={
            () => setIsSideBarOpen(false)
          }
          variant='persistent'
          anchor='left'
          sx={{
            width: drawerWidth,
            '& .MuiDrawer-paper': {
              color: theme.palette.secondary[200],
              backgroundColor: theme.palette.background.alt,
              // backgroundColor : 'brown',
              boxSizing: 'border-box',
              borderWidth: isNonMobile ? '0px' : '2px',
              width: drawerWidth,
            },
          }}
        >
          <Box width='100%' >
            <Box m='1.5rem 2rem 2rem 3rem' >
              <FlexBetween color={theme.palette.secondary[300]}
              // sx = {{ backgroundColor : 'red' }}
              >
                <Box display='flex' alignItems='center' gap='0.5rem' >
                  <Typography variant='h4' fontWeight='bold'>
                    COMNIVATE
                  </Typography>
                </Box>
                {!isNonMobile && (
                  <IconButton onClick={() => setIsSideBarOpen(!isSideBarOpen)}>
                    <ChevronLeft />
                  </IconButton>
                )}
              </FlexBetween>
            </Box>
            <List >
              {
                navItems.map(({ text, icon }) => {
                  if (!icon) {
                    return (
                      // defining the key is important, the list item is re-rendered based on the change of this value 
                      <Typography key={text} sx={{
                        m: '2.25rem 0 1rem 3rem',
                        backgroundColor: ''
                      }} >{text}</Typography>
                    )
                  }
                  const lcText = text.toLowerCase();

                  return (
                    <ListItem key={text} disablePadding sx={{ backgroundColor: '' }} >
                      <ListItemButton onClick={() => {
                        navigate(`/${lcText}`);
                        setActive(lcText)
                      }}
                        sx={{
                          backgroundColor: active === lcText ? theme.palette.secondary[300] : 'transparent',
                          color: active === lcText ? theme.palette.primary[600] : theme.palette.secondary[100],
                        }}

                      >
                        <ListItemIcon
                          sx={{
                            marginLeft: '2rem',
                            color: active === lcText ? theme.palette.primary[600] : theme.palette.secondary[200],

                          }}
                        >
                          {icon}
                        </ListItemIcon>
                        <ListItemText primary={text}
                          sx={{

                          }}
                        >
                          {text}
                        </ListItemText>
                        {
                          active === lcText && (
                            <ChevronRightOutlined sx={{ ml: 'auto' }} />
                          )
                        }
                      </ListItemButton>
                    </ListItem>
                  )
                })
              }
            </List>
          </Box>

          {/* user information */}

          {/* changed here, deviated here */}
          <Box position='relative' bottom='0.5rem'
            sx={{ backgroundColor: '' }}
          >
            <Divider />
            <FlexBetween textTransform='none' gap='1rem' m='1rem 2rem 0rem 3rem ' >
              <Box component='img' alt='profile' src={profileImage}
                height='40px' width='40px' borderRadius='50%'
                sx={{
                  objectFit: 'cover',
                }}
              />
              <Box textAlign='left' >
                <Typography fontWeight='bold' fontSize='0.9rem' sx={{
                  color: theme.palette.secondary[100]
                }}>
                  {user.name}
                </Typography>
                <Typography fontSize='0.8rem' sx={{
                  color: theme.palette.secondary[200]
                }}>
                  {user.occupation}
                </Typography>
              </Box>
              <SettingsOutlined sx = {{ color : theme.palette.secondary[200], fontSize : '25px'
              
            }} />
            </FlexBetween>
          </Box>
        </Drawer>
      )}

    </Box>
  )
}

export default Sidebar