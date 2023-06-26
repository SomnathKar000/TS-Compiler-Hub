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
        sx={{ margin: 0, padding: 0 }}
        disabled
      />
    </Box>
  );
};

export default OutputBox;
