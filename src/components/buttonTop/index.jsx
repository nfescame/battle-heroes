import React from "react";
import { Box } from "@material-ui/core";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

export default function ButtonsTop() {
  return (
    <Box
      sx={{
        position: "fixed",
        zIndex: "101",
        color: "#D32F2F",
        bottom: "3rem",
        right: "3rem",
      }}
    >
      <ArrowCircleUpIcon fontSize='large' />
    </Box>
  );
}
