import React, {useContext, useState} from 'react'
import { Container, Paper, Box, Typography, Button } from "@mui/material"
import { useTheme } from '@mui/material/styles';
import Dialog from '@mui/material';
import { GlobalContext } from '../../context/GlobalState';
import CustomedDialog from './CustomedDialog';

const VerifyProof = () => {
  const theme = useTheme()
  const [open, setOpen] = useState(false)

  const onChangeFile = async (e) => {
    const fileReader = new FileReader();
    if (e.target.files && e.target.files[0]) {
      const updatedJSON = e.target.files[0];
      fileReader.readAsText(updatedJSON, "UTF-8");
      console.log("Hehe")
      fileReader.onload = e => {
        var obj = JSON.parse(e.target.result);
        console.log(obj)
      };
    };
  };

  return (
    <Container>
      <Paper
        sx={{
          width: "80%", 
          backgroundColor: "white",
          margin: "50px auto",
          padding: "50px",
          boxShadow: "0 0 10px #1877F2"}}
        
        elevation={3} > 
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            mb={2}
          >
            <Typography
              variant="body2"
              sx={{ fontFamily: theme.typography, fontSize: "30px", fontWeight: "700"}}
            >
              Verify Proof
              <Box sx={{width: "100%", height: "4px", backgroundColor: "black", borderRadius: "10px", marginTop: "10px"}}></Box>
            </Typography>
          </Box> 
          <Box sx={{display: "flex", justifyContent: "center"}}>
            <Button
              sx={{
                backgroundColor: "black",
                color: theme.colors.light1,
                borderColor: theme.colors.light1,
                border: "1px solid #e6f2ff",
                borderRadius: "15px",
                textTransform: "none",
                height: "70px",
                width: "300px",
                fontWeight: "700",
                marginTop: "30px",
                fontFamily: theme.typography,
                fontSize: "25px",
                  "&:hover": {
                    cursor: "pointer"
                  }
                }}
                onClick={() => setOpen(true)}
              >
                Verify Proof
            </Button>
          </Box>
          
          <CustomedDialog open={open} handleClose={() => setOpen(false)}/>
      </Paper>
    </Container>
  )
}

export default VerifyProof