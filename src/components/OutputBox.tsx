import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import { useCodeContext } from "../contexts/code-context";

const OutputBox = () => {
  const { output, computeTime } = useCodeContext();
  return (
    <Box flex={2}>
      <Paper sx={{ height: "38rem", padding: 2 }}>
        <Typography>OutPut box:</Typography>
        <Typography>{computeTime}</Typography>
        <Typography>{output}</Typography>
      </Paper>
    </Box>
  );
};

export default OutputBox;
