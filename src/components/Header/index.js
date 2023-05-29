import { Box, Typography } from '@mui/material'
import React, {useEffect, useContext, useState} from 'react'
import { useTheme } from '@mui/material/styles';
import Connect from '../../shared/Connect';
import {sha256} from "js-sha256"
import { GlobalContext } from '../../context/GlobalState';

const Header = () => {
  const {user} = useContext(GlobalContext)
  const [userHash, setUserHash] = useState(user)
  const [fullId, setFullId] = useState(false)

  useEffect(() => {
    let hash = sha256.hex(user).substring(0, 10)
    setUserHash(hash)
  }, [user])

  const theme = useTheme()
  
  return (
    <Box sx={{fontFamily: "Open Sans", height: "60px", backgroundColor: "black", display: "flex", alignItems: "center", justifyContent: "space-between", paddingLeft: "100px", paddingRight: "100px"}}> 
      <Box sx={{display: "flex", alignItems: "center"}}>
        <img class="header-logo" src="./Logo-Centic_copy_74x-82x.png"/> 
        <Typography sx={{color: theme.colors.color2, fontWeight: 800, fontSize: "23px", marginLeft: "10px"}}> - Third party</Typography>
      </Box>
      
      {user !== ""  ? <Box sx={fullId ? {
          backgroundColor: "black",
          color: theme.colors.light1,
          fontFamily: theme.typography,
          borderTop: "0 px solid #1E90FF",
          borderRadius: "10px",
          textTransform: "none",
          width: "250px",
          height: "40px",
          display: "flex",
          lineHeight: "1.28571",
          justifyContent: "center",
          border: "1px solid rgba(0, 159, 219, 0.5)",
          alignItems: "center",
        } : {
          backgroundColor: "black",
          color: theme.colors.light1,
          fontFamily: theme.typography,
          borderTop: "0 px solid #1E90FF",
          borderRadius: "10px",
          textTransform: "none",
          width: "200px",
          height: "40px",
          display: "flex",
          lineHeight: "1.28571",
          justifyContent: "center",
          border: "1px solid rgba(0, 159, 219, 0.5)",
          alignItems: "center",}}
          onClick={() => setFullId(!fullId)}> 
        <Typography sx={{
            fontSize: "0.875rem",
            fontWeight: "800",
            marginRight: "10px",
            color:"rgb(0, 159, 219)",
            fontFamily: theme.typography.fontFamily}}
          >
              Web2 ID:
          </Typography>
          <Typography sx={{
            fontSize: "0.875rem",
            fontWeight: "600",
            marginRight: "10px",
            color:"rgb(0, 159, 219)",
            fontFamily: theme.typography.fontFamily}}
          >
              {fullId ? userHash : userHash.slice(0, 6) + "..." + userHash.slice(36, 42)}
          </Typography>
        </Box> : ""}
    </Box>
  )
}

export default Header