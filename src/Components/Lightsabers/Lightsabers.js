import React from "react";
import { Link } from "react-router-dom";

import "./styles.scss";

const Lightsabers = () => {
  return (
    <div className="container">
      <section className="lightsaberContainer">
        <div className="example-item">
          <div className="lightsaber">
            <label htmlFor="yoda-example"></label>
            <input type="checkbox" id="yoda-example" defaultChecked />
            <div className="switch"></div>
            <div className="plasma yoda"></div>
          </div>
          <h3>Yoda</h3>
        </div>
        <div className="example-item">
          <div className="lightsaber">
            <label htmlFor="darth-vader-example"></label>
            <input type="checkbox" id="darth-vader-example" defaultChecked />
            <div className="switch"></div>
            <div className="plasma yoda"></div>
          </div>
          <h3>Vader</h3>
        </div>
        <div className="example-item">
          <div className="lightsaber">
            <label htmlFor="windu-example"></label>
            <input type="checkbox" id="windu-example" />
            <div className="switch"></div>
            <div className="plasma yoda"></div>
          </div>
          <h3>Windu</h3>
        </div>
        <div className="example-item clearfix">
          <div className="lightsaber">
            <label htmlFor="obi-wan-example"></label>
            <input type="checkbox" id="obi-wan-example" />
            <div className="switch"></div>
            <div className="plasma yoda"></div>
          </div>
          <h3>Obi-Wan Kenobi</h3>
        </div>
      </section>
      <Link to={"/"}>Back to Home</Link>
      <a
        href="https://codepen.io/ncerminara/pen/KzurJ"
        target="_blank"
        rel="noreferrer"
      >
        Credits to Nicholas Cerminara
      </a>
    </div>
  );
};

export default Lightsabers;
