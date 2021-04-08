import React from "react";
import { Link } from "react-router-dom";

import "./styles.scss";
import logo from "../../Star_Wars_logo.png";
import deathStar from "./death-star.png";

const Error404 = () => {
  return (
    <div className="Error404">
      <img src={logo} className="logo" alt="star wars logo" />
      <div className="imageContainer">
        <label>4</label>
        <img src={deathStar} className="logo" alt="death star" />
        <label>4</label>
      </div>
      <div className="errorMessage">
        THIS PAGE IS NOT FULLY ARMED AND OPERATIONAL
        <span>TRY SOMETHING ELSE?</span>
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
};

export default Error404;
