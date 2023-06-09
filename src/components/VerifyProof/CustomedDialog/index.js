import React, {useState, useEffect, useContext}from 'react'
import {
  Button,
  Dialog,
  Box,
  DialogContent,
  DialogTitle,
  Typography,
  TextField,
} from "@mui/material";
import {LoadingButton} from "@mui/lab"
import CloseIcon from "@mui/icons-material/Close";
import VerifiedIcon from '@mui/icons-material/Verified';
import ClearIcon from '@mui/icons-material/Clear';
import { GlobalContext } from '../../../context/GlobalState';
import { fetchData } from '../../../shared/utils/database';
import {useTheme} from '@mui/material';
import { SERVER } from '../../../shared/Constants/constants';

const CustomedDialog = ({open, handleClose}) => {
  const theme = useTheme()
  const { address } = useContext(GlobalContext)
  const [ loading, setLoading ] = useState(false);
  const [ url, setUrl ] = useState(null)
  const [ success, setSuccess ] = useState(0)

  const handleCloseDialog = async () => {
    handleClose()
    setSuccess(0)
    setUrl(null)
  }

  const handleVerify = async () => {
    setLoading(true)
    try {
      let start = Date.now();
      const response = await fetch(url);
      const content = await response.text();
      const proof = JSON.parse(content)
      let startFunction = Date.now()
      let res = await fetchData({proof: proof.proof, publicSignals: proof.publicSignals}, SERVER + "bank/user/verify")
      let timeTaken = Date.now() - start;
      let timeTaken2 = Date.now() - startFunction;
      console.log(timeTaken)
      console.log(timeTaken2)
      setSuccess(1)
    } catch (error) {
      console.error('Error:', error);
      setSuccess(2)
    }
    setLoading(false)
  }

  return (
    <Dialog
    open={open}
    onClose={loading ? "" : handleCloseDialog}
    fullWidth
    PaperProps={{
      padding: "100px",
      backgroundColor: theme.colors.color4,
      position: "relative",
    }}
  >
    <DialogTitle sx={{ textAlign: "center" }} mt={3}>
        <Typography variant="h4" sx={{fontFamily: theme.typography, fontSize: "30px", fontWeight: 700, }}>Verify Credit Proof</Typography>
      </DialogTitle>
      <CloseIcon
        sx={{ position: "absolute", top: "20px", right: "20px" }}
        onClick={loading ? "" : handleCloseDialog}
      />
          { success === 0 ? <Box sx={{width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <Typography sx={{fontSize: "14px", marginBottom: "10px"}}>Enter your proof url</Typography>
            <TextField id="outlined-basic" label="Proof Url" variant="outlined" sx={{width: "80%", marginBottom: "20px"}} value={url} onChange={(e) => setUrl(e.target.value)}/>  
          <LoadingButton
            loading={loading}
            component="label"
            sx={{
              "& .MuiCircularProgress-root": {
                color: "#FFF",
              },
              backgroundColor: "black",
              color: theme.colors.light1,
              borderColor: theme.colors.light1,
              border: "1px solid #e6f2ff",
              borderRadius: "15px",
              textTransform: "none",
              height: "50px",
              width: "80%",
              margin: "0 auto",
              fontWeight: "700",
              marginBottom: "50px",
              fontFamily: theme.typography,
              fontSize: "20px",
                "&:hover": {
                  cursor: "pointer"
                  }
                }}
              onClick={handleVerify}
              >
                Verify
              </LoadingButton></Box> : ""}
        {success === 1 ? 
        <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", margin: "50px 0"}}>
          <VerifiedIcon sx={{fontSize: "30px", fontWeight: 500, color: "green", marginRight: "10px"}}/>
          <Typography textAlign={"center"} variant="h4" sx={{fontFamily: theme.typography, fontSize: "30px", fontWeight: 600}}>
            Your proof is verified!
           </Typography>
        </Box> 
        : ""}
        {success === 2 ? 
        <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", margin: "50px 0"}}>
          <ClearIcon sx={{fontSize: "30px", fontWeight: 500, color: "red", marginRight: "10px"}}/>
          <Typography textAlign={"center"} variant="h4" sx={{fontFamily: theme.typography, fontSize: "30px", fontWeight: 600}}>
            Please try again!
           </Typography>
        </Box> 
        : ""}
  </Dialog>  
  )
}

export default CustomedDialog