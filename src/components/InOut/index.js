import React, {useState} from 'react'
import { Container, Paper, Grid, Typography, Button } from "@mui/material"
import { useTheme } from '@mui/material/styles';

const InOut = () => {
  const [curTab, setCurTab] = useState("in")
  const theme = useTheme()

  const handleChangeTab = (tab) => {
    setCurTab(tab)
  }
  return (
    <Container>
      <Paper
        sx={{
          width: "80%", 
          height: "500px", 
          backgroundColor: "white",
          margin: "50px auto",
          boxShadow: "0 0 10px #1877F2"}}
        
        elevation={3} > 
          <Grid container>
            {curTab == "out" ? 
            <Grid item xs={6} 
                sx={{
                  backgroundColor: "#1877F2", 
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
              <Grid item xs={6} 
                sx={{
                  backgroundColor: "white", 
                  height: "500px", 
                  borderTopLeftRadius: "5px",
                  borderBottomLeftRadius: "5px",
                  padding: "50px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center"}}>
              </Grid>}
            {curTab == "in" ? 
              <Grid item xs={6} 
                sx={{
                  backgroundColor: "#1877F2", 
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
                    Sign Up
                </Typography>
                <Typography
                  textAlign={"center"}
                  sx={{
                    fontFamily: theme.typography,
                    fontWeight: "700",
                    color: "white",
                    fontSize: "20px"
                  }}>
                    Enter your personal details and start journey with us!
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
                  onClick={() => handleChangeTab("out")}
                >
                  Sign Up
                </Button>
              </Grid>
              : 
              <Grid item xs={6} 
                sx={{
                  backgroundColor: "white", 
                  height: "500px", 
                  borderTopLeftRadius: "5px",
                  borderBottomLeftRadius: "5px",
                  padding: "50px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center"}}>
              </Grid>}
          </Grid>
      </Paper>
    </Container>
  )
}

export default InOut