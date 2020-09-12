import React from "react";
import "../css/Description.css";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";

function Description(props) {
  return (
    <div>
      <CardContent>
        {/* <Typography gutterBottom variant="h5" component="h2"></Typography> */}
        <Typography variant="body2" color="textSecondary" component="p">
          <div className="row">
            <span>
              <strong>{props.title}</strong>
            </span>
            <span>{props.cuisine}</span>
          </div>
          <div className="row">
            <span>{props.budget}</span>
            <span>{props.rating}</span>
          </div>
        </Typography>
      </CardContent>
    </div>
  );
}

export default Description;
