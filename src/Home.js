import React from "react";
import { useState } from "./overmind";
import logo from "./react.svg";
import "./Home.css";

const Home = () => {
  const state = useState();

  return (
    <div className="Home">
      <div className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />
        <h2>Leak demo</h2>
      </div>
      <p className="Home-intro">
        Attach debugger and see how symbols grow under state objects Overmind
      </p>
      <p>{state.products.value}</p>
      <p>{state.brands.value}</p>
      <p>{state.brands.brands[0]}</p>
      <p>{state.products.products[0]}</p>
    </div>
  );
};

export default Home;
