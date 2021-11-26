import React, { useState } from "react";
import { ListItem, ListItemText, ListItemIcon, Box } from "@material-ui/core";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function ListItemComponent(props) {
  const [colorIcon] = useState(["#9F0013", "#0B4619"]);
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
            <CheckCircleIcon
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
            <CheckCircleIcon
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
