import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import { useCodeContext } from "../contexts/code-context";
import CircularProgress from "@mui/material/CircularProgress";

const OutputBox = () => {
  const { output, computeTime, loading } = useCodeContext();

  return (
    <Box flex={2}>
      <Paper sx={{ height: "38rem", padding: 2 }}>
        <Typography variant="h6">Output Box:</Typography>
        {loading ? (
          <Box>
            <Typography variant="body2">Running the code...</Typography>
            <CircularProgress />
          </Box>
        ) : (
          <Box>
            <Typography variant="body1" sx={{ marginBottom: 2 }}>
              Execution Time: {computeTime}s
            </Typography>
            <Typography variant="body2">{output}</Typography>
          </Box>
        )}
      </Paper>
    </Box>
  );
};

export default OutputBox;
