import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Button,
} from "@material-ui/core";

import ModalDetails from "../modalDetails";

export default function CardHeroes(props) {
  const { item, handleBattle } = props;

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Card sx={{ maxWidth: "100%", borderRadius: "10px" }}>
      <ModalDetails
        item={item}
        handleClose={handleClose}
        handleOpen={handleOpen}
        open={open}
      />

      <CardActionArea>
        <CardMedia
          component='img'
          image={item.images.sm}
          alt={item.name}
          sx={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}
        />

        <CardContent sx={{ backgroundColor: "#202020" }}>
          <Typography
            sx={{
              width: "100%",
              height: "2.5rem",
              textAlign: "center",
              color: "white",
            }}
            className='title'
            gutterBottom
            variant='h5'
            component='div'
          >
            {item.name}
          </Typography>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              onClick={() => {
                handleBattle(item);
              }}
              variant='contained'
              color='error'
              sx={{ backgroundColor: "#9F0013" }}
            >
              Select
            </Button>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
