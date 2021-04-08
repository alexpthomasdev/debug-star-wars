import React from "react";
import { Link } from "react-router-dom";

// import logo from "../../Star_Wars_logo.png";
import logo from "../../logo.svg";
import "./styles.scss";

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <div className="links">
        <Link to="/movies">Star Wars Movies </Link>
        <Link to="/lightsabers"> Lightsabers</Link>
      </div>
    </div>
  );
};

export default Home;
