import Header from "./components/Header";
import Navigation from "./components/Navigation";
import RestaurantCard from "./components/RestaurantCard";
// import restaurants from "./components/RestaurantData";
import "./css/RestaurantCard.css";
import "./App.css";
import React, { useState, useEffect } from "react";
import { getCities, searchRestaurants } from "./api";
import { parseCitySuggestions, parseSearchRestaurants } from "./utils";
import CitySuggestions from "./city-suggestions";
import Restaurants from "./restaurants";

import "./css/Header.css";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import DirectionsIcon from "@material-ui/icons/Directions";
import { YoutubeSearchedFor } from "@material-ui/icons";

function App() {
  const [input, setInput] = useState("");
  const [cityQuery, setCityQuery] = useState("Jakarta");
  const [citySuggestions, setCitySuggestions] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [error, setError] = useState();

  function handleClick(event) {
    setCityQuery(input);
    event.preventDefault();
  }

  function handleChange(event) {
    console.log(input);
    setInput(event.target.value);
  }

  useEffect(() => {
    const searchRestaurantsFromCity = async () => {
      try {
        const cities = parseCitySuggestions(await getCities(cityQuery));
        setCitySuggestions(cities);

        if (cities.length > 0) {
          const restaurants = parseSearchRestaurants(
            await searchRestaurants(cities[0].id)
          );
          setRestaurants(restaurants);
        }
      } catch (error) {
        setError(error.message);
      }
    };

    searchRestaurantsFromCity();
  }, [cityQuery]);

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

  const classes = useStyles();

  return (
    <div>
      {error && <div>Error: {error}</div>}
      {/* <Header /> */}
      {/* INPUT FIELD */}
      <div>
        <div class="background__image">
          <h1 className="header__title">GoZomato</h1>
          {/* <Navigation /> */}
          <div className="nav">
            <Paper
              component="form"
              className={classes.root}
              onSubmit={handleClick}
            >
              <InputBase
                value={input}
                className={classes.input}
                placeholder="Search for City"
                inputProps={{ "aria-label": "Search for City" }}
                onChange={handleChange}
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
        </div>
      </div>

      <div>
        <div className="items">Restaurants in {cityQuery}:</div>
      </div>
      {citySuggestions.length > 0 && (
        <div className="container">
          <div className="items">
            {restaurants.map((e) => (
              <RestaurantCard key={e.id} data={e} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
