import React, {useState, useEffect, useContext}from 'react'
import {
  Button,
  Dialog,
  Box,
  DialogContent,
  DialogTitle,
  Typography,
  TextField
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import VerifiedIcon from '@mui/icons-material/Verified';
import ClearIcon from '@mui/icons-material/Clear';
import { GlobalContext } from '../../../context/GlobalState';
import generateProof from '../../../shared/utils/proof';
import {useTheme} from '@mui/material';
import { createContract } from '../../../shared/utils/contract';
import { CONTRACT_ADDRESS } from '../../../shared/Constants/constants';
import { toSolidityInput } from '../../../shared/utils/proof';
import contractAbi from "../../../abi/contractAbi.json"
import Web3 from 'web3';

const CustomedDialog = ({open, handleClose}) => {
  const theme = useTheme()
  const { address } = useContext(GlobalContext)
  const [ loading, setLoading ] = useState(false);
  const [ upload, setUpload ] = useState(false)
  const [ proof, setProof ] = useState({})
  const [ success, setSuccess ] = useState(0)

  const onChangeFile = async (e) => {
    const fileReader = new FileReader();
    if (e.target.files && e.target.files[0]) {
      const updatedJSON = e.target.files[0];
      fileReader.readAsText(updatedJSON, "UTF-8");
      fileReader.onload = e => {
        let obj = JSON.parse(e.target.result);
        let _proof = {
          "pi_a": obj.proof.pi_a,
          "pi_b": obj.proof.pi_b,
          "pi_c": obj.proof.pi_c,
          "publicSignals": obj.publicSignals
        }
        setProof(_proof)
        setUpload(true)
      };
    };
  };

  const handleCloseDialog = async () => {
    handleClose()
    setProof({})
    setSuccess(0)
    setUpload(false)
  }

  const handleVerify = async () => {
    const web3 = new Web3(window.ethereum)
    let contract = await createContract(web3, contractAbi, CONTRACT_ADDRESS)
    let contractInput = toSolidityInput(proof)
    try {
      await contract.methods.verifyProof(contractInput.a, contractInput.b, contractInput.c, contractInput.publicSignals).send({from: address})
        .then(data => console.log(data))
        .catch(err => console.log(err))
      setSuccess(1)
    } catch {
      setSuccess(2)
    }
    
  }

  return (
    <Dialog
    open={open}
    onClose={loading ? "" : handleCloseDialog}
    fullWidth
    PaperProps={{
      padding: "100px",
      backgroundColor: "#DCDCDC",
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
      {success === 0 ? <Box sx={{display: "flex", justifyContent: "center"}}>
        {upload? 
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "90%",
              margin: "0 5%",
              marginTop: "20px",
            }}
          >
            <Box sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
              <VerifiedIcon sx={{fontSize: "20px", fontWeight: 500, color: "green", marginRight: "10px"}}/>
              <Typography textAlign={"center"} variant="h4" sx={{fontFamily: theme.typography, fontSize: "20px", fontWeight: 600}}>
                Uploaded, click to verify
              </Typography>
            </Box>
            <Button
            component="label"
            sx={{
              backgroundColor: "black",
              color: theme.colors.light1,
              borderColor: theme.colors.light1,
              border: "1px solid #e6f2ff",
              borderRadius: "15px",
              textTransform: "none",
              height: "70px",
              width: "80%",
              margin: "0 auto",
              fontWeight: "700",
              marginTop: "20px",
              marginBottom: "50px",
              fontFamily: theme.typography,
              fontSize: "25px",
                "&:hover": {
                  cursor: "pointer"
                  }
                }}
              onClick={handleVerify}
              >
                Verify
              </Button>
          </Box>
          :
          <Button
            component="label"
            sx={{
              backgroundColor: "black",
              color: theme.colors.light1,
              borderColor: theme.colors.light1,
              border: "1px solid #e6f2ff",
              borderRadius: "15px",
              textTransform: "none",
              height: "70px",
              width: "80%",
              margin: "0 auto",
              fontWeight: "700",
              marginTop: "30px",
              marginBottom: "50px",
              fontFamily: theme.typography,
              fontSize: "25px",
                "&:hover": {
                  cursor: "pointer"
                  }
                }}
              >
                Load From Local
                <input
                  type="file"
                  hidden
                  onChange={onChangeFile}
                />
              </Button> }
      </Box> : ""}
      
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