import React from "react";
import { AppBar, Box, Toolbar, Typography, Link } from "@material-ui/core";

import MenuIcon from "@mui/icons-material/Menu";
import ListAltIcon from "@mui/icons-material/ListAlt";
import HomeIcon from "@mui/icons-material/Home";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' sx={{ backgroundColor: "#202020" }}>
        <Toolbar>
          <Link href='/'>
            <HomeIcon
              size='large'
              edge='start'
              color='error'
              aria-label='menu'
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </HomeIcon>
          </Link>

          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Battle Heroes
          </Typography>
          <Link href='/list'>
            <ListAltIcon
              size='large'
              edge='end'
              color='error'
              aria-label='menu'
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </ListAltIcon>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
