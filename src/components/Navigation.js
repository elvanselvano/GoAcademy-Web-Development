import React from "react";
import TextInput from "./TextInput";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

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
      <TextInput />
      <Button variant="contained" color="primary">
        Change City
      </Button>
    </div>
  );
}

export default Navigation;
