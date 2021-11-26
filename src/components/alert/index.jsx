import * as React from "react";
import { Alert, Box } from "@material-ui/core";

export default function Alerts(props) {
  const { selectHeroesName } = props;

  return (
    <Box
      sx={{
        width: "100%",
        position: "fixed",
        top: "1rem",
        zIndex: "100",
        display: "flex",
        justifyContent: "center",
      }}
      spacing={1}
    >
      <Alert sx={{ width: "50%" }} variant='filled' severity='error'>
        {selectHeroesName} already select
      </Alert>
    </Box>
  );
}
