  import React, {useContext, useState} from 'react'
  import { Container, Paper, Typography, Box} from "@mui/material"
  import VisibilityIcon from '@mui/icons-material/Visibility';
  import { useTheme } from '@mui/material/styles';
  import { GlobalContext } from '../../context/GlobalState';
  import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
  import PaidIcon from '@mui/icons-material/Paid';
  import PersonIcon from '@mui/icons-material/Person';
  import SavingsIcon from '@mui/icons-material/Savings';
  import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';

  const MainPage = () => {
    const {connectBank, updateConnectBank, updateUser } = useContext(GlobalContext)
    const theme = useTheme()
    const [balance, setBalance] = useState(false)

    // const handleChangeTab = (tab) => {
    //   setCurTab(tab)
    // }
    // const handleSignIn = async () => {
    //   updateUser(username)
    //   updateConnectBank(!connectBank)
    // }

    return (
      <Container sx={{display: "flex"}}>
        <Paper
          sx={{
            width: "45%", 
            height: "400px", 
            backgroundColor: "#2eb07f",
            borderRadius: "10px",
            margin: "50px auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            py: "50px"}}
          elevation={3} > 
          <AccountBalanceIcon sx={{fontSize: "200px", fontWeight: 400, color: "white"}}/>
          <Typography
            textAlign={"center"}
            sx={{
              fontFamily: theme.typography,
              fontWeight: "600",
              color: "white",
              fontSize: "35px",
              marginTop: "50px"
              }}>
            TÀI KHOẢN THANH TOÁN
          </Typography>
          <Typography
            textAlign={"center"}
            sx={{
              fontFamily: theme.typography,
              fontWeight: "700",
              color: "white",
              fontSize: "30px",
              marginTop: "10px"
              }}>
            095123456789
          </Typography>
          <Box sx={{display: "flex", marginTop: "20px", alignItems: "center"}}>
            <Typography
              textAlign={"center"}
              sx={{
                fontFamily: theme.typography,
                fontWeight: "600",
                color: "white",
                fontSize: "25px",
                marginRight: "10px"
                }}>
              Số dư: 
            </Typography>
            <Typography
              textAlign={"center"}
              sx={{
                fontFamily: theme.typography,
                fontWeight: "700",
                color: "white",
                fontSize: "25px",
                marginRight: "10px"
                }}>
              {balance ? "1.000.000.000" : "************"} VND
            </Typography>
            <VisibilityIcon sx={{
              fontSize: "20px",
              color: "white"
            }} onClick={() => setBalance(!balance)}/>
          </Box>
        </Paper>
        <Paper
          sx={{
            width: "45%", 
            height: "470px", 
            backgroundColor: "#2eb07f",
            borderRadius: "10px",
            paddingBottom: "30px",
            display: "flex",
            flexDirection: "column",
            alignItems: "space-between",  
            justifyContent: "space-between",
            margin: "50px auto"}}
          elevation={3}> 
          <Typography
              textAlign={"center"}
              sx={{
                fontFamily: theme.typography,
                fontWeight: "600",
                color: "white",
                fontSize: "35px",
                marginRight: "10px",
                marginTop: "30px"
                }}>
             DỊCH VỤ
          </Typography>
          <Box sx={{display: "flex", justifyContent: "space-around"}}>
            <Paper
              sx={{
                width: "210px", 
                height: "170px", 
                backgroundColor: "white",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                borderRadius: "10px"}}
              elevation={3}> 
              <Box sx={{height: "80px", marginTop: "15px"}}>
                <PaidIcon sx={{fontSize: "80px", color: "#FFD700"}}/>
              </Box>
              <Typography
                textAlign={"center"}
                sx={{
                  fontFamily: theme.typography,
                  fontWeight: "700",
                  color: "#2eb07f",
                  fontSize: "25px",
                  }}>
              Chuyển tiền
            </Typography>
            </Paper>
            <Paper
              sx={{
                width: "210px", 
                height: "170px", 
                backgroundColor: "white",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                borderRadius: "10px"}}
              elevation={3}> 
              <Box sx={{height: "80px", marginTop: "15px"}}>
                <PersonIcon sx={{fontSize: "80px", color: "#FFD700"}}/>
              </Box>
              <Typography
                textAlign={"center"}
                sx={{
                  fontFamily: theme.typography,
                  fontWeight: "700",
                  color: "#2eb07f",
                  fontSize: "25px",
                  }}>
              Quản lý thông tin cá nhân
            </Typography>
            </Paper>
          </Box>
          <Box sx={{display: "flex", justifyContent: "space-around"}}>
            <Paper
              sx={{
                width: "210px", 
                height: "170px", 
                backgroundColor: "white",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                borderRadius: "10px"}}
              elevation={3}> 
              <Box sx={{height: "80px", marginTop: "15px"}}>
                <SavingsIcon sx={{fontSize: "80px", color: "#FFD700"}}/>
              </Box>
              <Typography
                textAlign={"center"}
                sx={{
                  fontFamily: theme.typography,
                  fontWeight: "700",
                  color: "#2eb07f",
                  fontSize: "25px",
                  }}>
              Tiết kiệm
            </Typography>
            </Paper>
            <Paper
              sx={{
                width: "190px", 
                height: "170px", 
                backgroundColor: "white",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                borderRadius: "10px",
                px: "10px"}}
              elevation={3}> 
              <Box sx={{height: "80px", marginTop: "15px"}}>
                <DriveFileRenameOutlineIcon sx={{fontSize: "80px", color: "#FFD700"}}/>
              </Box>
              <Typography
                textAlign={"center"}
                sx={{
                  fontFamily: theme.typography,
                  fontWeight: "700",
                  color: "#2eb07f",
                  fontSize: "25px",
                  }}>
              Đăng ký vay vốn
            </Typography>
            </Paper>
          </Box>
        </Paper>
      </Container>
    )
  }

  export default MainPage