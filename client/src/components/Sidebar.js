import React from 'react'
import {
  Box, Divider, Drawer, IconButton, ListItem, ListItemButton, ListItemIcon,
  ListItemText, Typography, useTheme
} from '@mui/material'
import {
  SettingsOutlined, ChevronLeft, ChevronRightOutlined,
  HomeOutlined, ShoppingCartOutlined, Groups2Outlined, ReceiptLongOutlined,
  PublicOutlined, PointOfSaleOutlined, TodayOutlined, CalendarMonthOutlined,
  AdminPanelSettingsOutlined, TrendingUpOutlined, PieChartOutlined
} from '@mui/icons-material'

import { useLocation, useNavigate } from 'react-router-dom'
import FlexBetween from './FlexBetween'
import profileImage from '../assets/profile.jpg'


const Sidebar = ({
  isNonMobile, drawerWidth, isSideBarOpen, setIsSideBarOpen
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
    <Box component='nav' >
      {isSideBarOpen && (
        <Drawer open={isSideBarOpen}
          onClose={
            () => setIsSideBarOpen(false)
          }
          variant='persistent'
          anchor='left'
          sw={{
            width: drawerWidth,
            '& .MuiDrawer-paper': {
              color: theme.palette.secondary[200],
              backgroundColor: theme.palette.background.alt,
              boxSizing: 'border-box',
              borderWidth: isNonMobile ? '0px' : '2px',
              width: drawerWidth,
            }
          }}
        >
          <Box width='100%' >
            <Box m='1.5rem 2rem 2rem 3rem' >
              <FlexBetween  color = {theme.palette.secondary.main}>
                <Box display='flex' alignItems = 'center' gap = '0.5rem' >
                  
                </Box>
              </FlexBetween>
            </Box>
          </Box>
        </Drawer>
      )}

    </Box>
  )
}

export default Sidebar