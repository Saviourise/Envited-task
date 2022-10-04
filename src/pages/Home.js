import React from "react";
import "../styles/Home.css";
import HomeImage from "../assets/landingPageImage.svg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="HomePageContainer">
      <Link to="/create" className="linkResponsive">
        🎉 Create my event
      </Link>
      <section className="ImageSection">
        <img src={HomeImage} alt="HomeImage" />
      </section>
      <section className="TextSection">
        <h1 className="big-text">
          <p>Imagine If</p>
          <p>Snapchat</p>
          <p>had events.</p>
        </h1>
        <h3 className="normal-text">
          <p>Easily host and share events with your friends</p>
          <p> across any social media.</p>
        </h3>
        <Link to="/create" className="linkDesktop">
          🎉 Create my event
        </Link>
      </section>
    </div>
  );
};

export default Home;
