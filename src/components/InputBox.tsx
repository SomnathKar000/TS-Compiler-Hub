import React, { useRef, useState, useEffect } from "react";
import { Box, TextField, Typography, Tooltip, IconButton } from "@mui/material";
import { useCodeContext } from "../contexts/code-context";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const InputBox = () => {
  const { code, codeChange } = useCodeContext();
  let textFieldRef = useRef<HTMLTextAreaElement>(null);
  const [totalLines, setTotalLines] = useState(1);
  const onChange = () => {
    if (textFieldRef.current) {
      codeChange(textFieldRef.current.value);
    }
  };

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
    <Box
      flex={3}
      sx={{
        display: "flex",
        overflowY: "auto",
        height: "38rem",
        border: 1,
        cursor: "text",

        borderWidth: 2,
        borderRadius: 2,
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        transition: "border-color 0.7s",

        "&:hover": {
          borderColor: "primary.light",
        },

        "&:active": {
          borderColor: "primary.dark",
        },
      }}
      onClick={() => {
        if (textFieldRef.current) {
          textFieldRef.current.focus();
        }
      }}
    >
      <Box
        id="line-number-box"
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
          <Typography
            component="span"
            sx={{
              margin: 0,
              fontWeight: 500,
              fontSize: "0.9589rem",
            }}
            key={index}
          >
            {index + 1}
          </Typography>
        ))}
      </Box>

      <TextField
        inputRef={textFieldRef}
        fullWidth
        multiline
        onChange={onChange}
        value={code}
        rows={totalLines}
        size="small"
        variant="outlined"
        placeholder="Enter your code"
        sx={{
          border: "none",
          fontWeight: "bold",
          "& .MuiOutlinedInput-root": {
            border: "none",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
        }}
        onInput={() => {
          const textField = textFieldRef.current;
          const lineCount = textField?.value.split("\n").length;
          setTotalLines(lineCount!);
        }}
      />
      <Box>
        <Tooltip title="Copy Code">
          <IconButton onClick={() => navigator.clipboard.writeText(code)}>
            <ContentCopyIcon />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
};

export default InputBox;
