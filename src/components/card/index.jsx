import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import { CardActionArea } from "@material-ui/core";

export default function CardHeroes(props) {
  const { item } = props;

  return (
    <Card sx={{ maxWidth: "100%", borderRadius: "15px" }}>
      <CardActionArea sx={{}}>
        <CardMedia component='img' image={item.images.sm} alt={item.name} />

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
            {item.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
