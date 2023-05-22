import React, {useContext, useState, useEffect} from 'react'
import { Container, Paper, Box, Typography, Button, Link} from "@mui/material"
import { useTheme } from '@mui/material/styles';
import Dialog from '@mui/material';
import {sha256} from "js-sha256"
import { GlobalContext } from '../../context/GlobalState';
import { verifyProof } from '../../shared/utils/proof';
import CustomedDialog from './CustomedDialog';

const VerifyProof = () => {
  const {user} = useContext(GlobalContext)
  const [userHash, setUserHash] = useState(user)
  const theme = useTheme()
  const [open, setOpen] = useState(false)
  const condition = 200

  useEffect(() => {
    let hash = sha256.hex(user)
    setUserHash(hash)
  }, [user])

  const onChangeFile = async (e) => {
    const fileReader = new FileReader();
    if (e.target.files && e.target.files[0]) {
      const updatedJSON = e.target.files[0];
      fileReader.readAsText(updatedJSON, "UTF-8");
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
          backgroundColor: theme.colors.color4,
          margin: "50px auto",
          padding: "50px"}}
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
              sx={{ fontFamily: theme.typography, fontSize: "30px", fontWeight: "700", color: theme.colors.color2}}
            >
              Verify Proof
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontFamily: theme.typography, fontSize: "20px", fontWeight: "500", color: theme.colors.color2}}
            >
              Bank Id: 123
            </Typography>
          </Box> 
          <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <Typography
                variant="body2"
                sx={{ fontFamily: theme.typography, fontSize: "20px", fontWeight: "500", color: theme.colors.color2, marginTop: "20px"}}
              >
                Your Web2 ID: {userHash}
            </Typography>
            <Link sx={{textDecoration: "none"}} href={"http://localhost:3000/" + userHash + "/" + condition} target="_blank">
            <Button
                  sx={{
                    backgroundColor: "#009FDB",
                    color: "#FFFFFF",
                    borderColor: theme.colors.light1,
                    border: "1px solid black",
                    borderRadius: "15px",
                    textTransform: "none",
                    height: "50px",
                    width: "300px",
                    fontWeight: "700",
                    marginTop: "30px",
                    fontFamily: theme.typography,
                    fontSize: "25px",
                    "&:hover": {
                      cursor: "pointer"
                    }
                  }}
                >
                  Get Proof
              </Button>
            </Link>
            <Button
                  sx={{
                    backgroundColor: "#009FDB",
                    color: "#FFFFFF",
                    borderColor: theme.colors.light1,
                    border: "1px solid black",
                    borderRadius: "15px",
                    textTransform: "none",
                    height: "50px",
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