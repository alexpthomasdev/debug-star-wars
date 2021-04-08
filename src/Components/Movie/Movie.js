import React from "react";
import { Link } from "react-router-dom";

// import episodeConverter from "../../utils/episodeConverter";

import "./styles.scss";

const Movie = ({ id, title, release_date }) => {
  const getYear = () => {
    return release_date.split("-")[2];
  };

  // const episodeId = episodeConverter(id);

  return (
    <Link to={`/movie/${id}`}>
      <div className="movieContainer">
        <img src={`../../assets/movie/${id}.jpg`} alt="movie poster" />
        <div className="title">{`${title} (${getYear()})`}</div>
      </div>
    </Link>
  );
};

export default Movie;
