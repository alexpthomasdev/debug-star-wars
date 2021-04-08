import React from "react";

import "./styles.scss";

const Crawler = ({ episode_id, title, opening_crawl }) => {
  const separateOpeningCrawlForParagraphs = () => {
    let data = [];
    if (opening_crawl) {
      data = opening_crawl
        .split("\n")
        .map((p) => {
          if (p === "\r") return "\n";
          return p;
        })
        .join()
        .split("\n")
        .map((t, index) => <p key={index}>{t}</p>);
    }

    return data;
  };

  return (
    <div className="star-wars-container">
      <div className="fade"></div>

      <section className="star-wars">
        <div
          className="crawl"
          onAnimationEnd={(e) => console.log("animation ended")}
        >
          <div className="title">
            <p>{`Episode ${episode_id}`}</p>
            <h1>{title}</h1>
          </div>

          {opening_crawl && separateOpeningCrawlForParagraphs()}
        </div>
      </section>
    </div>
  );
};

export default Crawler;
