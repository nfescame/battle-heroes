import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import { CardActionArea } from "@material-ui/core";
import { AuthContext } from "../../providers/auth";

import "./card.css";

export default function CardHeroes() {
  const data = React.useContext(AuthContext);
  console.log("provisers", data);

  return (
    <section className='row'>
      {data.provider.map((item) => {
        console.log(item);
        return (
          <div className='column'>
            <Card className='card'>
              <CardActionArea className='cardContext'>
                <CardMedia
                  component='img'
                  image={item.images.sm}
                  alt='green iguana'
                />

                <CardContent>
                  <Typography
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
          </div>
        );
      })}
    </section>
  );
}
