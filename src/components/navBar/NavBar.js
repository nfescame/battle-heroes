import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import SideBar from "../sideBar/SideBar";

export default function ButtonAppBar() {
  const [isOpen, SetIsOpen] = useState(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            onClick={() => SetIsOpen(isOpen === false ? true : false)}
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Batlle Heroes
          </Typography>
        </Toolbar>
      </AppBar>
      {isOpen === true ? <SideBar /> : null}
    </Box>
  );
}
