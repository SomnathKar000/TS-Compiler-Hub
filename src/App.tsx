import React from "react";
import Navbar from "./components/Navbar";
import CodeEditor from "./components/CodeEditor";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

import { useCodeContext } from "./contexts/code-context";

function App() {
  const { mode } = useCodeContext();

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
