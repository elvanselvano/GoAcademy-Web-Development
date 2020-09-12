import React from "react";
import TextInput from "./TextInput";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import "../css/Navigation.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

function Navigation() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className="nav">
        <div className="nav__item">
          <TextInput />
        </div>
        <div className="nav__item">
          <Button variant="contained" color="primary">
            Change City
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
