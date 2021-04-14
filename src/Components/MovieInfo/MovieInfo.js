import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Movie from "../Movie";
import Crawler from "../Crawler";

import "./styles.scss";

const MovieInfo = () => {
  const { id } = useParams();

  /**
   * SWAPI FILMS ENDPOINT https://www.swapi.tech/documentation#films
   */

  const requestURL = `https://www.swapi.tech/api/films/${id}`;
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`${requestURL}`)
      .then((response) => response.json())
      .then((value) => {
        debugger;
        setData(value.result.properties);
      })
      .catch((e) => console.error(`OH NO!! There was an error: ${e}`));
  }, [requestURL]);

  return (
    <div className="movieInfoContainer">
      {!data && <span>Loading...</span>}
      {data && (
        <>
          <Movie
            title={data.title}
            id={data.episode_id}
            release_date={data.release_date}
          />
          <div className="more-info">
            <span>{`Title: ${data.title}`}</span>
            <span>{`Directed by: ${data.director}`}</span>
            <span>{`Produced by: ${data.producer}`}</span>
            <span>{`Released: ${data.release_date}`}</span>
          </div>
          <div className="crawlerContainer">
            <Crawler
              episode_id={data.episode_id}
              title={data.title}
              opening_crawl={data.opening_crawl}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default MovieInfo;
