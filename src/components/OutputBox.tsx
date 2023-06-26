import React from "react";
import { Box, TextField } from "@mui/material";
const OutputBox = () => {
  return (
    <Box flex={2}>
      <TextField
        fullWidth
        multiline
        rows={25}
        variant="filled"
        defaultValue="Output box:"
        disabled
      />
    </Box>
  );
};

export default OutputBox;
