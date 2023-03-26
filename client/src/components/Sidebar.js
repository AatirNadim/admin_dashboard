import React from 'react'
import {
    Box, Divider, Drawer, IconButton, ListItem, ListItemButton, ListItemIcon,
    ListItemText, Typography, useTheme
} from '@mui/material'
import { SettingsOutlined, ChevronLeft, ChevronRightOutlined,
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

    const { pathName } = useLocation();
    const [active, setActive] = React.useState('');
    return (
        <div>Sidebar</div>
    )
}

export default Sidebar