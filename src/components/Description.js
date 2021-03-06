import React from "react";
import "../css/Description.css";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";

function truncate(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}

function Description({ title, cuisine, budget, rating }) {
  return (
    <div>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          <div className="row">
            <span>
              <strong>{truncate(title, 18)}</strong>
            </span>
            <span>{truncate(cuisine, 13)}</span>
          </div>
          <div className="row">
            <div className="secondRow">
              {Array(budget)
                .fill()
                .map((_) => (
                  <p className="dollar">$</p>
                ))}
            </div>
            <div className="secondRow">
              <span>{rating} ⭐️</span>
            </div>
          </div>
        </Typography>
      </CardContent>
    </div>
  );
}

export default Description;
