import React from "react";
import Navbar from "./components/Navbar";
import CodeEditor from "./components/CodeEditor";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  // Container,
} from "@mui/material";
import { PaletteMode } from "@mui/material";

function App() {
  let mode: PaletteMode = "light";
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <CodeEditor />
    </ThemeProvider>
  );
}

export default App;
