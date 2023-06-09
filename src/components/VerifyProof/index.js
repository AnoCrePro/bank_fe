import React, {useContext, useState, useEffect} from 'react'
import { Container, Paper, Box, Typography, Button, Link} from "@mui/material"
import { useTheme } from '@mui/material/styles';
import Dialog from '@mui/material';
import {sha256} from "js-sha256"
import { GlobalContext } from '../../context/GlobalState';
import { verifyProof } from '../../shared/utils/proof';
import CustomedDialog from './CustomedDialog';
import { fetchWithAPIKey } from '../../shared/utils/database';
import { CENTIC_SERVER, API_KEY } from '../../shared/Constants/constants';

const VerifyProof = () => {
  const {user} = useContext(GlobalContext)
  const [userHash, setUserHash] = useState(user)
  const theme = useTheme()
  const [open, setOpen] = useState(false)
  const condition = 200

  useEffect(() => {
    let hash = sha256.hex(user).substring(0, 10)
    console.log(hash)
    setUserHash(hash)
  }, [user])

  const handleGetUrl = async () => {
    let res = await fetchWithAPIKey(CENTIC_SERVER + "centic/services/createUrl?web2Id=" + userHash, API_KEY)
    let url = res.url
    window.open(url, '_blank');
  }
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
          </Box> 
          <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
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
                    onClick={handleGetUrl}
                  >
                    Get Proof
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