import React, {useState} from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  TextField,
  Box,
  Link
} from "@mui/material";
import { useTheme } from '@mui/material/styles';
import StarIcon from '@mui/icons-material/Star';

export default function CustomedDialog({ open, handleClose}) {
  const theme = useTheme()
  const [proof, setProof] = useState("")
  const [step, setStep] = useState(0)

  const handleChangeProof = (e) => {
    setProof(e.target.value)
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      PaperProps={{
        padding: "100px",
        backgroundColor: "#DCDCDC",
        position: "relative",
        height: "500px"
      }}
    >
      {step == 0 ? <Box>
      <DialogTitle sx={{ textAlign: "center" }} mt={3}>
        <Typography
          textAlign={"center"}
          sx={{
            fontFamily: theme.typography,
            fontWeight: "800",
            color: "#2eb07f",
            fontSize: "40px",
            marginTop: "30px"
          }}>
        XÁC MINH ĐIỀU KIỆN
        </Typography>
        <Box sx={{display: "flex", alignItems: "center", marginTop: "30px", justifyContent: "center"}}>
          <StarIcon sx={{color: "red", marginRight: "10px"}}/>
          <Typography
            textAlign={"center"}
            sx={{
              fontFamily: theme.typography,
              fontWeight: "600",
              color: "red",
              fontSize: "20px"
            }}>
          Yêu cầu: Số dư địa chỉ ví lớn hơn 5 BTC
          </Typography>
        </Box>
        
        <Typography
          textAlign={"center"}
          sx={{
            fontFamily: theme.typography,
            fontWeight: "600",
            color: "black",
            fontSize: "18px",
            marginTop: "10px",
            marginBottom: "10px"
          }}>
        Vui lòng điền địa chỉ bằng chứng xác minh ở bên dưới!
        </Typography>
        <Box sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
          <Typography
            textAlign={"center"}
            sx={{
              fontFamily: theme.typography,
              fontWeight: "400",
              color: "black",
              fontSize: "15px",
              marginTop: "5px",
              marginBottom: "10px",
              marginRight: "5px"
            }}>
          Để có thể tạo bằng chứng vui lòng truy cập 
          </Typography>
          <Link src="https://cryptoscan.io" sx={{
              fontFamily: theme.typography,
              fontWeight: "400",
              fontSize: "15px",
              marginTop: "5px",
              marginBottom: "10px"
            }}>
            https://cryptoscan.io 
          </Link>
        </Box>
        <TextField sx={{input: { paddingLeft: "20px", color: 'black'}, '& .MuiOutlinedInput-root': {'& fieldset': {borderRadius: "10px"},'&:hover fieldset': {
                      borderColor: theme.colors.color3, color: '#E2EDFF'
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#6F7E8C',
                    }, } ,  width: "100%", marginTop: "25px", backgroundColor: "white", borderRadius: "10px"}} InputLabelProps={{style: {color: theme.colors.color6 },}}  label="Địa chỉ bằng chứng" value={proof} onChange={handleChangeProof} variant="outlined" />
      </DialogTitle>
      <DialogContent>
      <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "90%",
            margin: "0 5%",
          }}
        >
        </Box>
        <Button
          sx={{
            backgroundColor: "#2eb07f",
            color: "white",
            textTransform: "none",
            height: "50px",
            width: "100%",
            fontWeight: "700",
            marginTop: "30px",
            fontFamily: theme.typography,
            fontSize: "18px",
              "&:hover": {
                cursor: "pointer"
              }
            }}
          onClick={() => setStep(1)}
          >
           Xác minh
        </Button>
        <Box sx={{display: "flex", alignItem: "center", position: "absolute", top: 10, right: 10}}>
          <img class="cryptoscan" src="/CryptoScan.png"/>
        </Box> 
      </DialogContent> </Box>: ""}
      {/* {step == 1 ? <Box>
      <DialogTitle sx={{ textAlign: "center" }} mt={3}>
        <Typography
          textAlign={"center"}
          sx={{
            fontFamily: theme.typography,
            fontWeight: "800",
            color: "#2eb07f",
            fontSize: "40px",
            marginTop: "30px"
          }}>
        XÁC MINH THÀNH CÔNG!
        </Typography>
        <Box sx={{display: "flex", alignItems: "center", marginTop: "30px", justifyContent: "center"}}>
          <Typography
            textAlign={"center"}
            sx={{
              fontFamily: theme.typography,
              fontWeight: "600",
              color: "black",
              fontSize: "18px"
            }}>
          Nhấn tiếp tục để tiến hành đăng ký vay tín chấp Blockchain
          </Typography>
        </Box>
        
      </DialogTitle>
      <DialogContent>
      <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "90%",
            margin: "0 5%",
          }}
        >
        </Box>
        <Button
          sx={{
            backgroundColor: "#2eb07f",
            color: "white",
            textTransform: "none",
            height: "50px",
            width: "100%",
            fontWeight: "700",
            marginTop: "30px",
            fontFamily: theme.typography,
            fontSize: "18px",
              "&:hover": {
                cursor: "pointer"
              }
            }}
          onClick={() => setStep(1)}
          >
           Tiếp tục
        </Button>
        <Box sx={{display: "flex", alignItem: "center", position: "absolute", top: 10, right: 10}}>
          <img class="cryptoscan" src="/CryptoScan.png"/>
        </Box> 
      </DialogContent> </Box>: ""} */}
      {step == 1 ? <Box>
      <DialogTitle sx={{ textAlign: "center" }} mt={3}>
        <Typography
          textAlign={"center"}
          sx={{
            fontFamily: theme.typography,
            fontWeight: "800",
            color: "red",
            fontSize: "40px",
            marginTop: "30px"
          }}>
        XÁC MINH THẤT BẠI!
        </Typography>
        <Box sx={{display: "flex", alignItems: "center", marginTop: "30px", justifyContent: "center"}}>
          <Typography
            textAlign={"center"}
            sx={{
              fontFamily: theme.typography,
              fontWeight: "600",
              color: "black",
              fontSize: "18px"
            }}>
          Vui lòng thử lại
          </Typography>
        </Box>
        
      </DialogTitle>
      <DialogContent>
      <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "90%",
            margin: "0 5%",
          }}
        >
        </Box>
        <Button
          sx={{
            backgroundColor: "#2eb07f",
            color: "white",
            textTransform: "none",
            height: "50px",
            width: "100%",
            fontWeight: "700",
            marginTop: "30px",
            fontFamily: theme.typography,
            fontSize: "18px",
              "&:hover": {
                cursor: "pointer"
              }
            }}
          onClick={() => setStep(1)}
          >
           Thoát
        </Button>
        <Box sx={{display: "flex", alignItem: "center", position: "absolute", top: 10, right: 10}}>
          <img class="cryptoscan" src="/CryptoScan.png"/>
        </Box> 
      </DialogContent> </Box>: ""}
    </Dialog>
  );
}