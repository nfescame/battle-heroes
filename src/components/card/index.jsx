import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Button,
  Stack,
} from "@material-ui/core";

import ModalDetails from "../modalDetails";

export default function CardHeroes(props) {
  const { item, handleBattle } = props;

  return (
    <Card sx={{ maxWidth: "100%", borderRadius: "10px" }}>
      <ModalDetails item={item} />
      <CardActionArea>
        <CardMedia component='img' image={item.images.sm} alt={item.name} />

        <CardContent sx={{ backgroundColor: "#1976D2" }}>
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

          <Stack direction='row' spacing={2}>
            <Button
              onClick={() => {
                handleBattle(item);
              }}
              variant='contained'
            >
              Select
            </Button>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
