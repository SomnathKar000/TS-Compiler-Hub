import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import { useCodeContext } from "../contexts/code-context";

const OutputBox = () => {
  const { output, computeTime, loading } = useCodeContext();

  return (
    <Box flex={2}>
      <Paper sx={{ height: "38rem", padding: 2 }}>
        <Typography variant="h6">Output Box:</Typography>
        <Typography variant="body1" sx={{ marginBottom: 2 }}>
          Execution Time: {computeTime}s
        </Typography>
        {loading ? (
          <Typography variant="body2">Running the code...</Typography>
        ) : (
          <Typography variant="body2">{output}</Typography>
        )}
      </Paper>
    </Box>
  );
};

export default OutputBox;
