// import React from "react";
// import TextInput from "./TextInput";
// import { makeStyles } from "@material-ui/core/styles";
// import Button from "@material-ui/core/Button";
import "../css/Navigation.css";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& > *": {
//       margin: theme.spacing(1),
//     },
//   },
// }));

// function Navigation() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <div className="nav">
//         <div className="nav__item">
//           <TextInput />
//         </div>
//         <div className="nav__item">
//           <Button variant="contained" color="primary">
//             Change City
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navigation;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import DirectionsIcon from "@material-ui/icons/Directions";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function CustomizedInputBase() {
  const classes = useStyles();

  return (
    <div className="nav">
      <Paper component="form" className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder="Search for City"
          inputProps={{ "aria-label": "Search for City" }}
        />
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </div>
  );
}
