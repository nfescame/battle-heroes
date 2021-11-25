import * as React from "react";
import { Stack, CircularProgress } from "@material-ui/core";

export default function Spinner() {
  return (
    <Stack sx={{ color: "grey.500" }} spacing={2} direction='row'>
      <CircularProgress color='success' />
    </Stack>
  );
}
