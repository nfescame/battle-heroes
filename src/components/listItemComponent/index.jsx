import React, { useState } from "react";
import { ListItem, ListItemText, ListItemIcon, Box } from "@material-ui/core";
import CheckTwoToneIcon from "@mui/icons-material/CheckTwoTone";

export default function ListItemComponent(props) {
  const [colorIcon] = useState(["red", "green"]);
  const { player1Intelligence, player2Intelligence, paddingLeft, tg } = props;

  return (
    <Box>
      {tg === "player1" ? (
        <ListItem disablePadding>
          <ListItemText
            primary={player1Intelligence}
            sx={{
              color: "white",
              fontSize: "1.5rem",
            }}
            disableTypography
          />
          <ListItemIcon>
            <CheckTwoToneIcon
              sx={{
                pl: paddingLeft,
                color:
                  colorIcon[player1Intelligence < player2Intelligence ? 0 : 1],
              }}
            />
          </ListItemIcon>
        </ListItem>
      ) : (
        <ListItem disablePadding>
          <ListItemIcon>
            <CheckTwoToneIcon
              sx={{
                pl: paddingLeft,
                color:
                  colorIcon[player1Intelligence < player2Intelligence ? 1 : 0],
              }}
            />
          </ListItemIcon>
          <ListItemText
            primary={player2Intelligence}
            sx={{
              color: "white",
              fontSize: "1.5rem",
            }}
            disableTypography
          />
        </ListItem>
      )}
    </Box>
  );
}
