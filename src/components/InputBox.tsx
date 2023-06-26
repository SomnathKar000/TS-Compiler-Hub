import React, { useRef } from "react";
import { Box, TextField, Typography } from "@mui/material";

const InputBox = () => {
  let codeRef = useRef<HTMLDivElement>(null);
  return (
    <Box flex={3}>
      <TextField
        inputRef={codeRef}
        fullWidth
        multiline
        rows={25}
        variant="outlined"
        defaultValue={`console.log("Hello world");`}
        InputProps={{ disableUnderline: true }}
      />
    </Box>
  );
};

export default InputBox;
