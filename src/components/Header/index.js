import { Box, Typography } from '@mui/material'
import React from 'react'
import { useTheme } from '@mui/material/styles';
import Connect from '../../shared/Connect';

const Header = () => {
  const theme = useTheme()
  
  return (
    <Box sx={{fontFamily: "Open Sans", height: "60px", backgroundColor: "black", display: "flex", alignItems: "center", justifyContent: "start", paddingLeft: "100px", paddingRight: "100px"}}> 
      <img class="header-logo" src="./Logo-Centic_copy_74x-82x.png"/> 
      <Typography sx={{color: theme.colors.color2, fontWeight: 800, fontSize: "23px", marginLeft: "10px"}}> - Third party</Typography>
    </Box>
  )
}

export default Header