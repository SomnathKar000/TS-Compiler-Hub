import React from "react";
import InputBox from "./InputBox";
import OutputBox from "./OutputBox";
import { Stack } from "@mui/material";

const CodeEditor = () => {
  return (
    <Stack
      direction="row"
      spacing={2}
      justifyContent="space-between"
      sx={{ height: "57vh", marginTop: 2, marginX: 1 }}
    >
      <InputBox />
      <OutputBox />
    </Stack>
  );
};

export default CodeEditor;
