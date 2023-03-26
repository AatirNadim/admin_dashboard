import React from 'react'
import { Box, useMediaQuery } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Navbar from 'components/Navbar'
import Sidebar from 'components/Sidebar'

const Layout = () => {
  const isNonMobile = useMediaQuery(`(min-width : 600px)`)
  const [isSideBarOpen, setIsSideBarOpen] = React.useState(true);
  console.log(isNonMobile);

  return (
    <Box width='100%' height='100%' display={isNonMobile ? 'flex' : 'block'} >
      <Sidebar isNonMobile={isNonMobile} drawerWidth='250px' isSideBarOpen={isSideBarOpen}
        setIsSideBarOpen={setIsSideBarOpen}
      />
      <Box backgroundColor='' flexGrow={1}>
        <Navbar isSideBarOpen={isSideBarOpen}
          setIsSideBarOpen={setIsSideBarOpen} />
        <Outlet />
      </Box>
    </Box>
  )
}

export default Layout