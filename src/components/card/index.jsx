import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@material-ui/core";

export default function CardHeroes(props) {
  const { item } = props;

  return (
    <Card sx={{ maxWidth: "100%", borderRadius: "10px" }}>
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
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
