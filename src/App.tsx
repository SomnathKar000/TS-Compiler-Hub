import React from "react";
import Navbar from "./components/Navbar";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Container,
} from "@mui/material";
import { PaletteMode } from "@mui/material";

function App() {
  let mode: PaletteMode = "dark";
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <h3>TS Compiler Project</h3>
    </ThemeProvider>
  );
}

export default App;
