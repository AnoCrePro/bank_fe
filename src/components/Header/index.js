import { Box, Typography } from '@mui/material'
import React from 'react'
import { useTheme } from '@mui/material/styles';
import Connect from '../../shared/Connect';

const Header = () => {
  const theme = useTheme()
  
  return (
    <Box sx={{fontFamily: "Open Sans", height: "60px", backgroundColor: theme.colors.dark2, display: "flex", alignItems: "center", justifyContent: "space-between", paddingLeft: "100px", paddingRight: "100px"}}> 
      <Typography 
        sx={{
          fontFamily: theme.typography,
          color: theme.colors.light1,
          fontWeight: 1000,
          fontSize: "20px",
          border: "1px solid #e6f2ff",
          padding: "5px"
        }}>
          Bank
      </Typography>
      <Connect/>
    </Box>
  )
}

export default Header