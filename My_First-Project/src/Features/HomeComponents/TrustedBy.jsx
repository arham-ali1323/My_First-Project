import React from "react";
import reddit from "../../images/reddit.png";
import quora from "../../images/quora.png";
import wikiHow from "../../images/wikihow.png";
import medium from "../../images/medium.png";
import askFm from "../../images/ask.fm.png";
import ghost from "../../images/ghost.png";
import stackExchange from "../../images/stackexchange.png";
import stackOverflow from "../../images/stackoverflow.png";
import writeAs from "../../images/writeas.png";
import answers from "../../images/answers.png";
import myAnimeList from "../../images/myanimelist.png";
import ask from "../../images/ask.png";
import Myplanet from "../../images/Myplanet.png";

const TrustedBy = () => {
  return (
    <section className="trusted-section">
      <h2 className="trusted-title">Company's Trust as Most</h2>

      {/* First Row: 7 Logos */}
      <div className="trusted-logos-row">
        <img src={reddit} alt="Reddit" />
        <img src={writeAs} alt="Write.as" />
        <img src={quora} alt="Quora" />
        <img src={ghost} alt="Ghost" />
        <img src={askFm} alt="Ask.fm" />
        <img src={Myplanet} alt="Myplanet" />
        <img src={wikiHow} alt="WikiHow" />
      </div>

      {/* Second Row: 6 Logos */}
      <div className="trusted-logos-row row-2">
        <img src={stackExchange} alt="Stack Exchange" />
        <img src={answers} alt="Answers" />
        <img src={myAnimeList} alt="MyAnimeList" />
        <img src={stackOverflow} alt="Stack Overflow" />
        <img src={medium} alt="Medium" />
        <img src={ask} alt="Ask" />
      </div>

      <p className="trusted-subtext">And many more</p>
    </section>
  );
};

export default TrustedBy;
