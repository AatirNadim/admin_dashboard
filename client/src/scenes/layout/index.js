import React from 'react'
import { Box, useMediaQuery } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Navbar from 'components/Navbar'
import Sidebar from 'components/Sidebar'
import { useGetUserQuery } from 'state/api'


const Layout = () => {
  const isNonMobile = useMediaQuery(`(min-width : 600px)`)
  const [isSideBarOpen, setIsSideBarOpen] = React.useState(true);
  const userID = useSelector((state) => state.global.userId);
  const { data } = useGetUserQuery(userID); 

  // console.log('data from the backend --> \n', data);



  return (
    <Box width='100%' height='100%' display={isNonMobile ? 'flex' : 'block'} >
      <Sidebar  user = {data || {}} isNonMobile={isNonMobile} drawerWidth='270px' isSideBarOpen={isSideBarOpen}
        setIsSideBarOpen={setIsSideBarOpen}
      />
      <Box backgroundColor='' flexGrow={1}>
        <Navbar 
          user = {data || {}}
        isSideBarOpen={isSideBarOpen}
          setIsSideBarOpen={setIsSideBarOpen} />
        <Outlet />
      </Box>
    </Box>
  )
}

export default Layout