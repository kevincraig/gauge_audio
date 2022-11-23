import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MenuCard from "./MenuCard";
import SpotifyLogo from "./../../assets/images/Spotify_Icon_RGB_White.png";
import TidalLogo from "./../../assets/images/tidal-icon-white-rgb.png";
import Settings from "./../../assets/images/gear-solid.svg";
import Playing from "./../../assets/images/play-solid.svg";

const Home = () => {
  return (
    <div className={"menu-wrap "}>
      <MenuCard imageUrl={SpotifyLogo} title={"Spotify"} />
      <MenuCard imageUrl={TidalLogo} title={"Tidal"} />
      <MenuCard imageUrl={Settings} title={"Settings"} />
      <MenuCard imageUrl={Playing} title={"Now Playing"} />
    </div>
  );
};

export default Home;
