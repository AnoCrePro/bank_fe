import Header from "./components/Header";
import { createTheme, ThemeProvider } from "@mui/material";
import {GlobalContext} from "./context/GlobalState";
import InOut from "./components/InOut";
import {Box} from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainPage from "./components/MainPage/index.js";
import Lending from "./components/Lending";
import { useContext } from "react";

const theme = createTheme({
  typography: {
    fontFamily: "Open Sans"
  },
  colors: {
    color1: "#23B7EF",
    color2: "#97A8BC",
    color3: "#1FBDD9",
    color4: "#0D1921",
    color5: "#030B10",
    color6: "#6D8198",
    color7: "#5185AA",
    btn: "#009FDB",
    "light1": "white",
    "light2": "#e6f2ff",
    "dark1": "#004d99",
    "dark2": "#030B10",
  }
})

function App() {
  const { connectBank } = useContext(GlobalContext)
  return (
      <ThemeProvider theme={theme}>
        <Header/> 
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<InOut/>}/>
              <Route path="/main" element={<MainPage/>}/>
              <Route path="/lending" element={<Lending/>}/>
          </Routes>
        </BrowserRouter>
        {/* { connectBank ? <VerifyProof/> : <InOut/>} */}
      </ThemeProvider>
  );
}

export default App;
