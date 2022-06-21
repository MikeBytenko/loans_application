import HomePage from "./pages/home-page/home-page";
import { ThemeProvider } from "@mui/material";
import theme from "./styles/theme";

function App() {
  return (
  <ThemeProvider theme={theme}>
    <HomePage />
  </ThemeProvider>
  );
}

export default App;
