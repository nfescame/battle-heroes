import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import {
  CardMedia,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

import ListItemIcon from "@mui/material/ListItemIcon";
import CircleIcon from "@mui/icons-material/Circle";

import img from "../../img/backgroung_dialog.jpg";

export default function DialogBattle(props) {
  const { isOpenDialog, handleClose, selectBattle } = props;
  const [winner, setWinner] = useState("");
  const [colorIcon] = useState(["red", "green"]);
  const [powerstats] = useState([
    "intelligence",
    "strength",
    "speed",
    "durability",
    "power",
    "combat",
  ]);

  // console.log(totalPowerstatsP1, totalPowerstatsP2);

  useEffect(() => {
    const getList = async () => {
      try {
        const totalPowerstatsP1 = [
          selectBattle.player1.powerstats.intelligence +
            selectBattle.player1.powerstats.strength +
            selectBattle.player1.powerstats.speed +
            selectBattle.player1.powerstats.durability +
            selectBattle.player1.powerstats.power +
            selectBattle.player1.powerstats.combat,
        ];
        const totalPowerstatsP2 = [
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
  }, []);

  return (
    <Dialog
      sx={{ width: "100%", height: "auto" }}
      open={isOpenDialog}
      onClose={handleClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
      PaperProps={{
        style: {
          backgroundImage: `url(${img})`,
          borderRadius: "15px",
          backgroundColor: "red",
          paddingTop: "5rem",
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
        sx={{ color: "Black", fontSize: "2rem" }}
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

      <Box sx={{ display: "flex" }}>
        {/* card 1 */}
        <Box sx={{ display: "flex" }}>
          <Card sx={{ maxWidth: "100%", borderRadius: "15px" }}>
            <CardActionArea sx={{}}>
              <CardMedia
                height='200'
                component='img'
                image={selectBattle.player1.images.sm}
                alt={selectBattle.player1.name}
              />

              <CardContent sx={{ backgroundColor: "#1976D2" }}>
                <Typography
                  sx={{
                    height: "5rem",
                    textAlign: "center",
                    color: "white",
                  }}
                  className='title'
                  gutterBottom
                  variant='h5'
                  component='div'
                >
                  {selectBattle.player1.name}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <CardContent>
            <List>
              <ListItem disablePadding>
                <ListItemText
                  primary={selectBattle.player1.powerstats.intelligence}
                />
                <ListItemIcon>
                  <CircleIcon
                    sx={{
                      pl: 4,
                      color:
                        colorIcon[
                          selectBattle.player1.powerstats.intelligence <
                          selectBattle.player2.powerstats.intelligence
                            ? 0
                            : 1
                        ],
                    }}
                  />
                </ListItemIcon>
              </ListItem>
              <ListItem disablePadding>
                <ListItemText
                  primary={selectBattle.player1.powerstats.strength}
                />
                <ListItemIcon>
                  <CircleIcon
                    sx={{
                      pl: 4,
                      color:
                        colorIcon[
                          selectBattle.player1.powerstats.strength <
                          selectBattle.player2.powerstats.strength
                            ? 0
                            : 1
                        ],
                    }}
                  />
                </ListItemIcon>
              </ListItem>

              <ListItem disablePadding>
                <ListItemText primary={selectBattle.player1.powerstats.speed} />
                <ListItemIcon>
                  <CircleIcon
                    sx={{
                      pl: 4,
                      color:
                        colorIcon[
                          selectBattle.player1.powerstats.speed <
                          selectBattle.player2.powerstats.speed
                            ? 0
                            : 1
                        ],
                    }}
                  />
                </ListItemIcon>
              </ListItem>

              <ListItem disablePadding>
                <ListItemText
                  primary={selectBattle.player1.powerstats.durability}
                />
                <ListItemIcon>
                  <CircleIcon
                    sx={{
                      pl: 4,
                      color:
                        colorIcon[
                          selectBattle.player1.powerstats.durability <
                          selectBattle.player2.powerstats.durability
                            ? 0
                            : 1
                        ],
                    }}
                  />
                </ListItemIcon>
              </ListItem>

              <ListItem disablePadding>
                <ListItemText primary={selectBattle.player1.powerstats.power} />
                <ListItemIcon>
                  <CircleIcon
                    sx={{
                      pl: 4,
                      color:
                        colorIcon[
                          selectBattle.player1.powerstats.power <
                          selectBattle.player2.powerstats.power
                            ? 0
                            : 1
                        ],
                    }}
                  />
                </ListItemIcon>
              </ListItem>

              <ListItem disablePadding>
                <ListItemText
                  primary={selectBattle.player1.powerstats.combat}
                />
                <ListItemIcon>
                  <CircleIcon
                    sx={{
                      pl: 4,
                      color:
                        colorIcon[
                          selectBattle.player1.powerstats.combat <
                          selectBattle.player2.powerstats.combat
                            ? 0
                            : 1
                        ],
                    }}
                  />
                </ListItemIcon>
              </ListItem>
            </List>
          </CardContent>
        </Box>

        {/* powerstats */}
        <Box>
          <CardContent>
            <List sx={{ display: "block" }}>
              {powerstats.map((powerstat, index) => {
                return (
                  <ListItem disablePadding key={index}>
                    <ListItemText primary={powerstat} />
                  </ListItem>
                );
              })}
            </List>
          </CardContent>
        </Box>

        {/* card 2 */}
        <Box sx={{ display: "flex" }}>
          <CardContent>
            <List>
              <ListItem disablePadding>
                <ListItemIcon>
                  <CircleIcon
                    sx={{
                      color:
                        colorIcon[
                          selectBattle.player2.powerstats.intelligence <
                          selectBattle.player1.powerstats.intelligence
                            ? 0
                            : 1
                        ],
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={selectBattle.player2.powerstats.intelligence}
                />
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>
                  <CircleIcon
                    sx={{
                      color:
                        colorIcon[
                          selectBattle.player2.powerstats.strength <
                          selectBattle.player1.powerstats.strength
                            ? 0
                            : 1
                        ],
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={selectBattle.player2.powerstats.strength}
                />
              </ListItem>

              <ListItem disablePadding>
                <ListItemIcon>
                  <CircleIcon
                    sx={{
                      color:
                        colorIcon[
                          selectBattle.player2.powerstats.speed <
                          selectBattle.player1.powerstats.speed
                            ? 0
                            : 1
                        ],
                    }}
                  />
                </ListItemIcon>
                <ListItemText primary={selectBattle.player2.powerstats.speed} />
              </ListItem>

              <ListItem disablePadding>
                <ListItemIcon>
                  <CircleIcon
                    sx={{
                      color:
                        colorIcon[
                          selectBattle.player2.powerstats.durability <
                          selectBattle.player1.powerstats.durability
                            ? 0
                            : 1
                        ],
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={selectBattle.player2.powerstats.durability}
                />
              </ListItem>

              <ListItem disablePadding>
                <ListItemIcon>
                  <CircleIcon
                    sx={{
                      color:
                        colorIcon[
                          selectBattle.player2.powerstats.power <
                          selectBattle.player1.powerstats.power
                            ? 0
                            : 1
                        ],
                    }}
                  />
                </ListItemIcon>
                <ListItemText primary={selectBattle.player2.powerstats.power} />
              </ListItem>

              <ListItem disablePadding>
                <ListItemIcon>
                  <CircleIcon
                    sx={{
                      color:
                        colorIcon[
                          selectBattle.player2.powerstats.combat <
                          selectBattle.player1.powerstats.combat
                            ? 0
                            : 1
                        ],
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={selectBattle.player2.powerstats.combat}
                />
              </ListItem>
            </List>
          </CardContent>

          <Card sx={{ maxWidth: "100%", borderRadius: "15px" }}>
            <CardActionArea sx={{}}>
              <CardMedia
                component='img'
                height='200'
                image={selectBattle.player2.images.sm}
                alt={selectBattle.player2.name}
              />

              <CardContent sx={{ backgroundColor: "#1976D2" }}>
                <Typography
                  sx={{
                    height: "5rem",
                    textAlign: "center",
                    color: "white",
                  }}
                  className='title'
                  gutterBottom
                  variant='h5'
                  component='div'
                >
                  {selectBattle.player2.name}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
      </Box>

      <Button onClick={handleClose} autoFocus>
        Close
      </Button>
    </Dialog>
  );
}
