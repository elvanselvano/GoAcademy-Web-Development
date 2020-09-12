import React from "react";
// import logo from './logo.svg';
// import './App.css';
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import RestaurantCard from "./components/RestaurantCard";
import restaurants from "./components/RestaurantData";
import "./css/RestaurantCard.css";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Navigation />
      {/* <div className="container"> */}
      <div className="items">
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            imageURL={restaurant.imageURL}
            title={restaurant.title}
            cuisine={restaurant.cuisine}
            budget={restaurant.budget}
            rating={restaurant.rating}
          />
        ))}
      </div>
    </div>
    // </div>
  );
}

export default App;
