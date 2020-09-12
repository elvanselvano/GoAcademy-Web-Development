import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
// import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";
import Description from "./Description";
import "../css/RestaurantCard.css";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginBottom: 40,
  },
  media: {
    height: 175,
  },
});

function RestaurantCard(props) {
  const classes = useStyles();
  return (
    <Card className="restaurant__card">
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.imageURL}
          title={props.title}
        />
        <Description
          title={props.title}
          cuisine={props.cuisine}
          budget={props.budget}
          rating={props.rating}
        />
      </CardActionArea>
    </Card>
  );
}

export default RestaurantCard;
