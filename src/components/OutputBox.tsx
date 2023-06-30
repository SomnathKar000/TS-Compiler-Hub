import React from "react";
import { Box, Paper, Typography, Tooltip, IconButton } from "@mui/material";
import { useCodeContext } from "../contexts/code-context";
import CircularProgress from "@mui/material/CircularProgress";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const OutputBox = () => {
  const { output, loading } = useCodeContext();

  return (
    <Box flex={2}>
      <Paper sx={{ height: "38rem", padding: 3 }}>
        <Box display="flex" justifyContent="space-between" mb={2}>
          <Typography variant="h6">Output Box:</Typography>{" "}
          <Tooltip title="Copy Output">
            <IconButton onClick={() => navigator.clipboard.writeText(output)}>
              <ContentCopyIcon />
            </IconButton>
          </Tooltip>
        </Box>
        {loading ? (
          <Box>
            <Typography variant="body2">Running the code...</Typography>
            <CircularProgress />
          </Box>
        ) : (
          <Typography variant="body2">{output}</Typography>
        )}
      </Paper>
    </Box>
  );
};

export default OutputBox;
