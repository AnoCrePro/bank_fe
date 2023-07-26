import { Box, Typography, Button, Link} from '@mui/material'
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
    <Box sx={{fontFamily: "Open Sans", height: "120px", backgroundColor: "white", display: "flex", flexDirection: {"xs": "column", "lg": "row"}, alignItems: "center", paddingLeft: "150px", paddingRight: "150px", boxShadow: "0 3px 3px rgb(0 0 0 / 10%)"}}> 
      <Box sx={{display: "flex", alignItems: "center"}}>
        <img class="header-logo" src="./Header Logo.png"/> 
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
      <Box sx={{display: "flex", alignItems: "center", width: "1000px" , justifyContent: "space-around"}}>
        <Link href="/main" sx={{textDecoration: "none"}}>
          <Typography sx={{fontWeight: 700, color: "#2eb07f", transition: ".3s", fontSize: "30px"}}>Trang chủ</Typography>
        </Link>
        <Link href="/lending" sx={{textDecoration: "none"}}>
          <Typography sx={{fontWeight: 700, color: "#2eb07f", transition: ".3s", fontSize: "30px"}}>Đăng ký vay vốn</Typography>
        </Link>
      </Box>

      <Button sx={{
        backgroundColor: "#2eb07f",
        color: "white",
        fontWeight: "700",
        width: "200px",
        fontSize: "23px",
        marginLeft: "20px"
      }}>Đăng xuất</Button>
    </Box>
  )
}

export default Header