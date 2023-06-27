import React, { useRef, useState, useEffect } from "react";
import { Box, TextField, Typography } from "@mui/material";

const InputBox = () => {
  let textFieldRef = useRef<HTMLTextAreaElement>(null);
  const [totalLines, setTotalLines] = useState(25);
  useEffect(() => {
    const calculateTotalLines = () => {
      if (textFieldRef.current) {
        const textField = textFieldRef.current;
        const lineCount = textField.value.split("\n").length;
        setTotalLines(lineCount);
      }
    };

    calculateTotalLines();
  }, []);

  return (
    <Box flex={3} sx={{ display: "flex", overflowY: "auto", height: "38rem" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          marginY: 1,
          width: "3rem",
          marginRight: "0.5rem",
          alignItems: "flex-end",
        }}
      >
        {Array.from({ length: totalLines }, (_, index) => (
          <Typography component="span" sx={{ margin: 0 }} key={index}>
            {index + 1}
          </Typography>
        ))}
      </Box>
      <TextField
        inputRef={textFieldRef}
        fullWidth
        multiline
        rows={totalLines}
        size="small"
        variant="outlined"
        defaultValue={`console.log("Hello world");`}
        sx={{ border: "none" }}
        onInput={() => {
          const textField = textFieldRef.current;
          const lineCount = textField?.value.split("\n").length;
          setTotalLines(lineCount!);
        }}
        onScroll={() => {
          const textField = textFieldRef.current;
          const lineNumberBox = document.getElementById("line-number-box");
          if (textField && lineNumberBox) {
            lineNumberBox.scrollTop = textField.scrollTop;
          }
        }}
      />
    </Box>
  );
};

export default InputBox;
