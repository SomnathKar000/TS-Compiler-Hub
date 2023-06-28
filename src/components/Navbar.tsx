import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import TerminalIcon from "@mui/icons-material/Terminal";
import Tooltip from "@mui/material/Tooltip";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useCodeContext } from "../contexts/code-context";

export default function ButtonAppBar() {
  const { changeMode, mode, loading, codeCompute, createNewProgram } =
    useCodeContext();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ bgcolor: "background.paper" }}>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <TerminalIcon sx={{ color: "#155fa0" }} />
          </IconButton>
          <Typography
            variant="h6"
            component="a"
            sx={{
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 800,
              color: "#155fa0",
              textDecoration: "none",
            }}
          >
            TS compiler
          </Typography>
          <Tooltip title="Create a new program" sx={{ marginX: 1 }}>
            <Button size="medium" onClick={createNewProgram}>
              New
            </Button>
          </Tooltip>
          <Tooltip title="Run your code" sx={{ marginX: 1 }}>
            <Button
              size="medium"
              variant="contained"
              endIcon={<PlayArrowIcon />}
              color="error"
              onClick={codeCompute}
              disabled={loading}
            >
              Run
            </Button>
          </Tooltip>
          <Tooltip title={`Enable ${mode === "dark" ? "light" : "dark"} mode`}>
            <IconButton onClick={changeMode}>
              {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
