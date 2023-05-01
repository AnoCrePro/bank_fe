import Header from "./components/Header";
import { createTheme, ThemeProvider } from "@mui/material";
import { GlobalProvider } from "./context/GlobalState";
import InOut from "./components/InOut";

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
  return (
    <GlobalProvider>
      <ThemeProvider theme={theme}>
        <Header/>
        <InOut/>
      </ThemeProvider>
    </GlobalProvider>
  );
}

export default App;
