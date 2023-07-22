  import React, {useContext, useState} from 'react'
  import { Container, Paper, Typography, Button, Grid, Box} from "@mui/material"
  import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
  import { useTheme } from '@mui/material/styles';
  import { GlobalContext } from '../../context/GlobalState';
  import CustomedDialog from '../../shared/CustomedDialog';

  const Lending = () => {
    const {connectBank, updateConnectBank, updateUser } = useContext(GlobalContext)
    const [open, setOpen] = useState(false)
    const theme = useTheme()

    return (
      <Container sx={{display: "flex"}}>
        <Grid container>
        <Grid item xs={4}>
          
            <Paper
              sx={{
                width: "100%", 
                height: "400px", 
                backgroundColor: "#2eb07f",
                borderRadius: "10px",
                margin: "50px auto",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                position: 'relative',
                py: "50px",}}
              elevation={3} > 
              <img class="new" src="./new.png"/>
              <Typography
                textAlign={"center"}
                sx={{
                  fontFamily: theme.typography,
                  fontWeight: "800",
                  color: "white",
                  fontSize: "40px",
                  marginTop: "50px"
                  }}>
                VAY TÍN CHẤP BLOCKCHAIN
              </Typography>
              <Box sx={{display: "flex", flexDirection: "column", alignItems: "start"}}>
                <Box sx={{display: "flex", alignItems: "center", marginTop: "30px",  justifyContent: "start"}}>
                  <FiberManualRecordIcon sx={{fontSize: "15px", marginRight: "10px"}}/>
                  <Typography
                    textAlign={"center"}
                    sx={{
                      fontFamily: theme.typography,
                      fontWeight: "600",
                      color: "black",
                      fontSize: "18px",
                      }}>
                    Cho vay lên tới 500 triệu VNĐ
                  </Typography>
                </Box>
                <Box sx={{display: "flex", alignItems: "center", marginTop: "5px", justifyContent: "start"}}>
                  <FiberManualRecordIcon sx={{fontSize: "15px", marginRight: "10px"}}/>
                  <Typography
                    textAlign={"center"}
                    sx={{
                      fontFamily: theme.typography,
                      fontWeight: "600",
                      color: "black",
                      fontSize: "18px",
                      }}>
                    Thời hạn vay lên đến 60 tháng
                  </Typography>
                </Box>
                <Box sx={{display: "flex", alignItems: "center", marginTop: "5px", justifyContent: "start"}}>
                  <FiberManualRecordIcon sx={{fontSize: "15px", marginRight: "10px"}}/>
                  <Typography
                    textAlign={"center"}
                    sx={{
                      fontFamily: theme.typography,
                      fontWeight: "600",
                      color: "black",
                      fontSize: "18px",
                      }}>
                    Lãi suất: 5%/năm
                  </Typography>
                </Box>
                <Box sx={{display: "flex", alignItems: "center", marginTop: "5px",  justifyContent: "start"}}>
                  <FiberManualRecordIcon sx={{fontSize: "15px", marginRight: "10px"}}/>
                  <Typography
                    textAlign={"center"}
                    sx={{
                      fontFamily: theme.typography,
                      fontWeight: "600",
                      color: "black",
                      fontSize: "18px",
                      }}>
                    Yêu cầu: Số dư địa chỉ ví lớn hơn 0.5 BTC
                  </Typography>
                </Box>
              </Box>
              <Box sx={{display: "flex", alignItem: "center", position: "absolute", top: 10, right: 10}}>
                <img class="cryptoscan" src="/CryptoScan.png"/>
              </Box>  
              <Button
                  sx={{
                    backgroundColor: "white",
                    color: "#2eb07f",
                    textTransform: "none",
                    height: "50px",
                     width: "170px",
                    fontWeight: "700",
                    marginTop: "30px",
                    fontFamily: theme.typography,
                    fontSize: "18px",
                    "&:hover": {
                      cursor: "pointer"
                    }
                  }}
                  onClick={() => setOpen(true)}
                >
                Đăng ký vay
              </Button>
              <CustomedDialog open={open} handleClose={() => setOpen(false)}/>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper
              sx={{
                width: "90%", 
                height: "400px", 
                backgroundColor: "#2eb07f",
                borderRadius: "10px",
                margin: "50px auto",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                py: "50px",}}
              elevation={3} > 
              <Typography
                textAlign={"center"}
                sx={{
                  fontFamily: theme.typography,
                  fontWeight: "800",
                  color: "white",
                  fontSize: "40px",
                  marginTop: "50px"
                  }}>
                VAY THẾ CHẤP
              </Typography>
              <Box sx={{display: "flex", flexDirection: "column", alignItems: "start"}}>
                <Box sx={{display: "flex", alignItems: "center", marginTop: "80px",  justifyContent: "start"}}>
                  <FiberManualRecordIcon sx={{fontSize: "15px", marginRight: "10px"}}/>
                  <Typography
                    textAlign={"center"}
                    sx={{
                      fontFamily: theme.typography,
                      fontWeight: "600",
                      color: "black",
                      fontSize: "18px",
                      }}>
                    95% giá trị tài sản thế chấp
                  </Typography>
                </Box>
                <Box sx={{display: "flex", alignItems: "center", marginTop: "5px", justifyContent: "start"}}>
                  <FiberManualRecordIcon sx={{fontSize: "15px", marginRight: "10px"}}/>
                  <Typography
                    textAlign={"center"}
                    sx={{
                      fontFamily: theme.typography,
                      fontWeight: "600",
                      color: "black",
                      fontSize: "18px",
                      }}>
                    Thời hạn vay lên đến 36 tháng
                  </Typography>
                </Box>
                <Box sx={{display: "flex", alignItems: "center", marginTop: "5px", justifyContent: "start"}}>
                  <FiberManualRecordIcon sx={{fontSize: "15px", marginRight: "10px"}}/>
                  <Typography
                    textAlign={"center"}
                    sx={{
                      fontFamily: theme.typography,
                      fontWeight: "600",
                      color: "black",
                      fontSize: "18px",
                      }}>
                    Lãi suất: 7,5%/năm
                  </Typography>
                </Box>
              </Box>
              
              <Button
                  sx={{
                    backgroundColor: "white",
                    color: "#2eb07f",
                    textTransform: "none",
                    height: "50px",
                     width: "170px",
                    fontWeight: "700",
                    marginTop: "50px",
                    fontFamily: theme.typography,
                    fontSize: "18px",
                    "&:hover": {
                      cursor: "pointer"
                    }
                  }}
                >
                Đăng ký vay
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={4}>
          <Paper
              sx={{
                width: "90%", 
                height: "400px", 
                backgroundColor: "#2eb07f",
                borderRadius: "10px",
                margin: "50px auto",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                py: "50px",}}
              elevation={3} > 
              <Typography
                textAlign={"center"}
                sx={{
                  fontFamily: theme.typography,
                  fontWeight: "800",
                  color: "white",
                  fontSize: "40px",
                  marginTop: "50px"
                  }}>
                VAY TRẢ GÓP
              </Typography>
              <Box sx={{display: "flex", flexDirection: "column", alignItems: "start"}}>
                <Box sx={{display: "flex", alignItems: "center", marginTop: "85px",  justifyContent: "start"}}>
                  <FiberManualRecordIcon sx={{fontSize: "15px", marginRight: "10px"}}/>
                  <Typography
                    textAlign={"center"}
                    sx={{
                      fontFamily: theme.typography,
                      fontWeight: "600",
                      color: "black",
                      fontSize: "18px",
                      }}>
                    Cho vay lên tới 21 lần thu nhập
                  </Typography>
                </Box>
                <Box sx={{display: "flex", alignItems: "center", marginTop: "5px", justifyContent: "start"}}>
                  <FiberManualRecordIcon sx={{fontSize: "15px", marginRight: "10px"}}/>
                  <Typography
                    textAlign={"center"}
                    sx={{
                      fontFamily: theme.typography,
                      fontWeight: "600",
                      color: "black",
                      fontSize: "18px",
                      }}>
                    Thời hạn vay lên đến 60 tháng
                  </Typography>
                </Box>
                <Box sx={{display: "flex", alignItems: "center", marginTop: "5px", justifyContent: "start"}}>
                  <FiberManualRecordIcon sx={{fontSize: "15px", marginRight: "10px"}}/>
                  <Typography
                    textAlign={"center"}
                    sx={{
                      fontFamily: theme.typography,
                      fontWeight: "600",
                      color: "black",
                      fontSize: "18px",
                      }}>
                    Lãi suất: 10%/năm
                  </Typography>
                </Box>
              </Box>
              
              <Button
                  sx={{
                    backgroundColor: "white",
                    color: "#2eb07f",
                    textTransform: "none",
                    height: "50px",
                     width: "170px",
                    fontWeight: "700",
                    marginTop: "50px",
                    fontFamily: theme.typography,
                    fontSize: "18px",
                    "&:hover": {
                      cursor: "pointer"
                    }
                  }}
                >
                Đăng ký vay
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    )
  }

  export default Lending