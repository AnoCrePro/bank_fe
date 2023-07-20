  import React, {useContext, useState} from 'react'
  import { Container, Paper, Grid, Typography, Button, TextField, Link} from "@mui/material"
  import { useTheme } from '@mui/material/styles';
  import { fetchData } from '../../shared/utils/database';
  import { SERVER } from '../../shared/Constants/constants';
  import { GlobalContext } from '../../context/GlobalState';
  import { mimc7 } from "circomlib";

  const InOut = () => {
    const {connectBank, updateConnectBank, updateUser } = useContext(GlobalContext)
    const [curTab, setCurTab] = useState("in")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const theme = useTheme()

    const handleChangeTab = (tab) => {
      setCurTab(tab)
    }
    const handleSignIn = async () => {
      // let res = await fetchData({username: username, password: password}, SERVER + "bank/user/login")
      // if(res === true) {
      //   updateUser(username)
      //   updateConnectBank(!connectBank)
      // }
      updateUser(username)
      updateConnectBank(!connectBank)
    }

    return (
      <Container>
        <Paper
          sx={{
            width: "80%", 
            height: "500px", 
            backgroundColor: "#2eb07f",
            borderRadius: "10px",
            margin: "50px auto"}}
          elevation={3} > 
            <Grid container>
              {curTab == "out" ? 
              <Grid item xs={12} lg={6} 
                  sx={{
                    height: "500px", 
                    borderTopRightRadius: "5px",
                    borderBottomRightRadius: "5px",
                    padding: "50px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"}}>
                  <Typography
                    sx={{
                      fontFamily: theme.typography,
                      fontWeight: "1000",
                      color: "white",
                      fontSize: "40px"
                    }}>
                      Welcome Back!
                  </Typography>
                  <Typography
                    textAlign={"center"}
                    sx={{
                      fontFamily: theme.typography,
                      fontWeight: "700",
                      color: "white",
                      fontSize: "20px"
                    }}>
                      To keep connected with us please login with your personal info!
                  </Typography>
                  <Button
                    sx={{
                      backgroundColor: theme.colors.dark2,
                      color: theme.colors.light1,
                      borderColor: theme.colors.light1,
                      border: "1px solid #e6f2ff",
                      borderRadius: "15px",
                      textTransform: "none",
                      height: "50px",
                      width: "170px",
                      fontWeight: "700",
                      marginTop: "30px",
                      fontFamily: theme.typography,
                      fontSize: "17px",
                      "&:hover": {
                        cursor: "pointer"
                      }
                    }}
                    onClick={() => handleChangeTab("in")}
                  >
                    Sign In
                  </Button>
                </Grid>
                : 
                <Grid item xs={12} lg={6} 
                  sx={{
                    backgroundColor: "white", 
                    height: {
                      "xs": "400px",
                      "lg": "500px"}, 
                    borderTopLeftRadius: "5px",
                    borderBottomLeftRadius: "5px",
                    padding: "50px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"}}>
                  <Typography
                    sx={{
                      fontFamily: theme.typography,
                      fontWeight: "1000",
                      color: "black",
                      fontSize: {
                        "xs": "25px",
                        "lg": "40px"}
                    }}>
                      Welcome back
                  </Typography>   
                  <Typography
                    textAlign={"center"}
                    sx={{
                      fontFamily: theme.typography,
                      fontWeight: "500",
                      color: "black",
                      fontSize: {
                        "xs": "12px",
                        "lg": "15px"}
                    }}>
                      Nhập thông tin để đăng nhập!
                  </Typography>
                  
                  <TextField sx={{input: { paddingLeft: "20px", color: 'black'}, '& .MuiOutlinedInput-root': {'& fieldset': {borderRadius: "10px"},'&:hover fieldset': {
                      borderColor: theme.colors.color3, color: '#E2EDFF'
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#6F7E8C',
                    }, } ,  width: "100%", marginTop: "25px", backgroundColor: "white", borderRadius: "10px"}} InputLabelProps={{style: {color: theme.colors.color6 },}}  label="Tài khoản" value={username} onChange={(e) => setUsername(e.target.value)} variant="outlined" />
                    <TextField sx={{input: { paddingLeft: "20px", color: 'black'}, '& .MuiOutlinedInput-root': {'& fieldset': {borderRadius: "10px"},'&:hover fieldset': {
                      borderColor: theme.colors.color3, color: '#E2EDFF'
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#6F7E8C',
                    }, } ,  width: "100%", marginTop: "25px", backgroundColor: "white", borderRadius: "10px"}} InputLabelProps={{style: {color: theme.colors.color6 },}}  label="Mật khẩu" value={password} onChange={(e) => setPassword(e.target.value)} variant="outlined" type="password" />
                  <Button
                    sx={{
                      backgroundColor: "#2eb07f",
                      color: "#FFFFFF",
                      textTransform: "none",
                      height: "50px",
                      width: "170px",
                      fontWeight: "700",
                      marginTop: "50px",
                      fontFamily: theme.typography,
                      fontSize: "17px",
                      "&:hover": {
                        cursor: "pointer"
                      }
                    }}
                    onClick={() => handleSignIn()}
                  >
                    Đăng nhập
                  </Button>
                </Grid>}
              {curTab == "in" ? 
                <Grid item xs={12} lg={6} 
                  sx={{
                    height: {
                      "xs": "400px",
                      "lg": "500px"}, 
                    borderTopRightRadius: "5px",
                    borderBottomRightRadius: "5px",
                    padding: "50px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"}}>
                  <Typography
                    sx={{
                      fontFamily: theme.typography,
                      fontWeight: "1000",
                      color: "white",
                      fontSize: {
                        "xs": "25px",
                        "lg": "40px"}
                    }}>
                      Đăng ký
                  </Typography>
                  <Typography
                    textAlign={"center"}
                    sx={{
                      fontFamily: theme.typography,
                      fontWeight: "700",
                      color: "white",
                      marginTop: "20px",
                      fontSize: {
                        "xs": "12px",
                        "lg": "15px"}
                    }}>
                      Nhập thông tin cá nhân của bạn và bắt đầu cuộc hành trình với chúng tôi!
                  </Typography>
                  <Button
                    sx={{
                      backgroundColor: "white",
                      color: '#2eb07f',
                      textTransform: "none",
                      height: "50px",
                      width: "170px",
                      fontWeight: "700",
                      marginTop: "50px",
                      fontFamily: theme.typography,
                      fontSize: "17px",
                      "&:hover": {
                        cursor: "pointer"
                      }
                    }}
                    onClick={() => handleChangeTab("out")}
                  >
                    Đăng ký
                  </Button>
                </Grid>
                : 
                <Grid item xs={12} lg={6} 
                  sx={{
                    backgroundColor: "#0D1921", 
                    height: "500px", 
                    borderTopLeftRadius: "5px",
                    borderBottomLeftRadius: "5px",
                    padding: "50px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"}}>
                  <Typography
                    sx={{
                      fontFamily: theme.typography,
                      fontWeight: "1000",
                      color: "#97A8BC",
                      fontSize: "40px"
                    }}>
                      Hello, friend!
                  </Typography>   
                  <Typography
                    textAlign={"center"}
                    sx={{
                      fontFamily: theme.typography,
                      fontWeight: "500",
                      color: "#97A8BC",
                      fontSize: "15px"
                    }}>
                      Enter your personal details and start journey with us!
                  </Typography>
                  <TextField sx={{input: { paddingLeft: "20px", color: '#E2EDFF'}, '& .MuiOutlinedInput-root': {'& fieldset': {borderRadius: "10px"},'&:hover fieldset': {
                      borderColor: theme.colors.color3, color: '#E2EDFF'
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#6F7E8C',
                    }, } ,  width: "100%", marginTop: "25px", backgroundColor: theme.colors.color5, borderRadius: "10px"}} InputLabelProps={{style: {color: theme.colors.color6 },}}  label="Identification" value={username} onChange={(e) => setUsername(e.target.value)} variant="outlined" />
                  <TextField sx={{input: { paddingLeft: "20px", color: '#E2EDFF'}, '& .MuiOutlinedInput-root': {'& fieldset': {borderRadius: "10px"},'&:hover fieldset': {
                      borderColor: theme.colors.color3, color: '#E2EDFF'
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#6F7E8C',
                    }, } ,  width: "100%", marginTop: "25px", backgroundColor: theme.colors.color5, borderRadius: "10px"}} InputLabelProps={{style: {color: theme.colors.color6 },}} label="Password" value={password} onChange={(e) => setPassword(e.target.value)} variant="outlined" />
                  <Button
                    sx={{
                      backgroundColor: theme.colors.color5,
                      color: "#FFFFFF",
                      borderColor: theme.colors.light1,
                      border: "1px solid black",
                      borderRadius: "15px",
                      textTransform: "none",
                      height: "50px",
                      width: "100%",
                      fontWeight: "700",
                      marginTop: "30px",
                      fontFamily: theme.typography,
                      fontSize: "17px",
                      "&:hover": {
                        cursor: "pointer"
                      }
                    }}
                    onClick={() => handleSignIn()}
                  >
                    Upload Identification Images
                  </Button>
                  <Button
                    sx={{
                      backgroundColor: "#009FDB",
                      color: "#FFFFFF",
                      borderColor: theme.colors.light1,
                      border: "1px solid black",
                      borderRadius: "15px",
                      textTransform: "none",
                      height: "50px",
                      width: "170px",
                      fontWeight: "700",
                      marginTop: "30px",
                      fontFamily: theme.typography,
                      fontSize: "17px",
                      "&:hover": {
                        cursor: "pointer"
                      }
                    }}
                    onClick={() => handleSignIn()}
                  >
                    Sign Up
                  </Button>
                </Grid>}
            </Grid>
        </Paper>
      </Container>
    )
  }

  export default InOut