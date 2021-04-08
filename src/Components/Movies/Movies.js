import React, { useEffect, useState } from "react";

import Movie from "../Movie";

import "./styles.scss";

const Movies = () => {
  const requestURL = "https://www.swapi.tech/api/films";
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`${requestURL}`)
      .then((response) => response.json())
      .then((value) => setData(value))
      .catch((e) => console.error(`OH NO!! There was an error: ${e}`));
  }, []);

  return (
    <div className="moviesContainer">
      {!data && <span>Loading...</span>}
      {data &&
        data.result.map((movie) => {
          return (
            <Movie
              key={movie.uid}
              title={movie.properties.title}
              id={movie.properties.episode_id}
              release_date={movie.properties.release_date}
            />
          );
        })}
    </div>
  );
};

export default Movies;
