import React from "react";
import { Box, Paper, Typography } from "@mui/material";
const OutputBox = () => {
  return (
    <Box flex={2}>
      <Paper sx={{ height: "38rem", padding: 2 }}>
        <Typography>OutPut box:</Typography>
      </Paper>
    </Box>
  );
};

export default OutputBox;
