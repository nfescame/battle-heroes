import React, { useState, useEffect } from "react";
import {
  Button,
  Dialog,
  CardContent,
  CardMedia,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  Grid,
} from "@material-ui/core";

import img from "../../img/backgroung_dialog.jpg";

import ListItemComponent from "../listItemComponent";

export default function DialogBattle(props) {
  const { isOpenDialog, handleClose, selectBattle } = props;
  const [winner, setWinner] = useState("");

  const powerstatsList = [
    "intelligence",
    "strength",
    "speed",
    "durability",
    "power",
    "combat",
  ];

  useEffect(() => {
    const getList = async () => {
      try {
        const totalPowerstatsP1 = await [
          selectBattle.player1.powerstats.intelligence +
            selectBattle.player1.powerstats.strength +
            selectBattle.player1.powerstats.speed +
            selectBattle.player1.powerstats.durability +
            selectBattle.player1.powerstats.power +
            selectBattle.player1.powerstats.combat,
        ];
        const totalPowerstatsP2 = await [
          selectBattle.player2.powerstats.intelligence +
            selectBattle.player2.powerstats.strength +
            selectBattle.player2.powerstats.speed +
            selectBattle.player2.powerstats.durability +
            selectBattle.player2.powerstats.power +
            selectBattle.player2.powerstats.combat,
        ];
        if (totalPowerstatsP1 > totalPowerstatsP2) {
          setWinner(selectBattle.player1.name);
        } else {
          setWinner(selectBattle.player2.name);
        }
      } catch (err) {
        console.error(err);
      }
    };
    getList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Dialog
      maxWidth='lg'
      open={isOpenDialog}
      onClose={handleClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
      PaperProps={{
        style: {
          backgroundImage: `url(${img})`,
          borderRadius: "15px",
          padding: "2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        },
      }}
    >
      <Typography
        component={"span"}
        variant={"body2"}
        sx={{ color: "#9F0013", fontSize: "2rem", fontWeight: "bold" }}
      >
        Winner{" "}
        <Typography
          component={"span"}
          variant={"body2"}
          sx={{ color: "white", fontSize: "2rem" }}
        >
          {winner}
        </Typography>
      </Typography>

      <Grid container spacing={0}>
        <Grid item lg={4} md={4} sm={4} xs={12}>
          {/* card 1 */}
          <Box sx={{ display: "flex" }}>
            <Box>
              <CardMedia
                component='img'
                image={selectBattle.player1.images.sm}
                alt={selectBattle.player1.name}
              />

              <Typography
                sx={{
                  height: "5rem",
                  textAlign: "start",
                  color: "white",
                  fontsize: "10rem",
                }}
                className='title'
                gutterBottom
                variant='h6'
                component='div'
              >
                {selectBattle.player1.name}
              </Typography>
            </Box>

            <CardContent sx={{ paddingRight: "0" }}>
              <List>
                <ListItemComponent
                  tg={"player1"}
                  paddingLeft={4}
                  player1Intelligence={
                    selectBattle.player1.powerstats.intelligence
                  }
                  player2Intelligence={
                    selectBattle.player2.powerstats.intelligence
                  }
                />
                <ListItemComponent
                  tg={"player1"}
                  paddingLeft={4}
                  player1Intelligence={selectBattle.player1.powerstats.strength}
                  player2Intelligence={selectBattle.player2.powerstats.strength}
                />
                <ListItemComponent
                  tg={"player1"}
                  paddingLeft={4}
                  player1Intelligence={selectBattle.player1.powerstats.speed}
                  player2Intelligence={selectBattle.player2.powerstats.speed}
                />
                <ListItemComponent
                  tg={"player1"}
                  paddingLeft={4}
                  player1Intelligence={
                    selectBattle.player1.powerstats.durability
                  }
                  player2Intelligence={
                    selectBattle.player2.powerstats.durability
                  }
                />
                <ListItemComponent
                  tg={"player1"}
                  paddingLeft={4}
                  player1Intelligence={selectBattle.player1.powerstats.power}
                  player2Intelligence={selectBattle.player2.powerstats.power}
                />
                <ListItemComponent
                  tg={"player1"}
                  paddingLeft={4}
                  player1Intelligence={selectBattle.player1.powerstats.combat}
                  player2Intelligence={selectBattle.player2.powerstats.combat}
                />
              </List>
            </CardContent>
          </Box>
        </Grid>
        <Grid item lg={4} md={4} sm={4} xs={12}>
          {/* powerstats */}
          <Box>
            <CardContent sx={{ paddingLeft: "0", paddingRight: "0" }}>
              <List>
                {powerstatsList.map((powerstat, index) => {
                  return (
                    <ListItem
                      key={index}
                      disablePadding
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        textAlign: "center",
                      }}
                    >
                      <ListItemText
                        primary={powerstat}
                        sx={{
                          color: "white",
                          fontSize: "1.5rem",
                        }}
                        disableTypography
                      />
                    </ListItem>
                  );
                })}
              </List>
            </CardContent>
          </Box>
        </Grid>
        <Grid item lg={4} md={4} sm={4} xs={12}>
          {/* card 2 */}
          <Box sx={{ display: "flex" }}>
            <CardContent sx={{ paddingLeft: "0" }}>
              <List>
                <ListItemComponent
                  tg={"player2"}
                  paddingLeft={0}
                  player1Intelligence={
                    selectBattle.player1.powerstats.intelligence
                  }
                  player2Intelligence={
                    selectBattle.player2.powerstats.intelligence
                  }
                />
                <ListItemComponent
                  tg={"player2"}
                  paddingLeft={0}
                  player1Intelligence={selectBattle.player1.powerstats.strength}
                  player2Intelligence={selectBattle.player2.powerstats.strength}
                />
                <ListItemComponent
                  tg={"player2"}
                  paddingLeft={0}
                  player1Intelligence={selectBattle.player1.powerstats.speed}
                  player2Intelligence={selectBattle.player2.powerstats.speed}
                />
                <ListItemComponent
                  tg={"player2"}
                  paddingLeft={0}
                  player1Intelligence={
                    selectBattle.player1.powerstats.durability
                  }
                  player2Intelligence={
                    selectBattle.player2.powerstats.durability
                  }
                />
                <ListItemComponent
                  tg={"player2"}
                  paddingLeft={0}
                  player1Intelligence={selectBattle.player1.powerstats.power}
                  player2Intelligence={selectBattle.player2.powerstats.power}
                />
                <ListItemComponent
                  tg={"player2"}
                  paddingLeft={0}
                  player1Intelligence={selectBattle.player1.powerstats.combat}
                  player2Intelligence={selectBattle.player2.powerstats.combat}
                />
              </List>
            </CardContent>

            <Box>
              <CardMedia
                component='img'
                image={selectBattle.player2.images.sm}
                alt={selectBattle.player2.name}
              />

              <Typography
                sx={{
                  height: "5rem",
                  textAlign: "end",
                  color: "white",
                  fontsize: "1rem",
                }}
                className='title'
                gutterBottom
                variant='h6'
                component='div'
              >
                {selectBattle.player2.name}
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Button
        variant='contained'
        color='error'
        sx={{ backgroundColor: "#9F0013" }}
        onClick={handleClose}
      >
        Close
      </Button>
    </Dialog>
  );
}
