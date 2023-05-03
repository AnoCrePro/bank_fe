import Header from "./components/Header";
import { createTheme, ThemeProvider } from "@mui/material";
import {GlobalContext} from "./context/GlobalState";
import InOut from "./components/InOut";
import { useContext } from "react";

const theme = createTheme({
  typography: {
    fontFamily: "Open Sans"
  },
  colors: {
    "light1": "white",
    "light2": "#e6f2ff",
    "dark1": "#004d99",
    "dark2": "#1877F2",
  }
})

function App() {
  const { connectBank } = useContext(GlobalContext)
  return (
      <ThemeProvider theme={theme}>
        <Header/> 
        { connectBank ? <InOut/>: ""}
      </ThemeProvider>
  );
}

export default App;
