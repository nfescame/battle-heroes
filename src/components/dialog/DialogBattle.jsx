import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import {
  CardMedia,
  Typography,
  DialogActions,
  Box,
  List,
  ListItemButton,
  ListItem,
  ListItemText,
} from "@mui/material";

import InboxIcon from "@mui/icons-material/Inbox";
import ListItemIcon from "@mui/material/ListItemIcon";
import DraftsIcon from "@mui/icons-material/Drafts";

export default function DialogBattle(props) {
  const { isOpenDialog, handleClose, selectBattle } = props;
  console.log(props);

  return (
    <div>
      <Dialog
        open={isOpenDialog}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <Box sx={{ display: "flex" }}>
          {/* card 1 */}
          <Card>
            <CardActionArea sx={{ display: "flex" }}>
              <CardMedia
                component='img'
                height='140'
                image={selectBattle.player1.images.lg}
                alt='green iguana'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  {selectBattle.player1.name}
                </Typography>
                <List>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <InboxIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary={selectBattle.player1.powerstats.combat}
                      />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <DraftsIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary={selectBattle.player1.powerstats.durability}
                      />
                    </ListItemButton>
                  </ListItem>
                </List>
              </CardContent>
            </CardActionArea>
          </Card>

          {/* card 2 */}

          <Card>
            <CardActionArea sx={{ display: "flex" }}>
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  {selectBattle.player2.name}
                </Typography>
                <List>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <InboxIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary={selectBattle.player2.powerstats.combat}
                      />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <DraftsIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary={selectBattle.player2.powerstats.durability}
                      />
                    </ListItemButton>
                  </ListItem>
                </List>
              </CardContent>
              <CardMedia
                component='img'
                height='140'
                image={selectBattle.player2.images.lg}
                alt='green iguana'
              />
            </CardActionArea>
          </Card>
        </Box>

        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
