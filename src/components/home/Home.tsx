import React from "react";
import MenuCard from "./MenuCard";
import SpotifyLogo from "./../../assets/images/Spotify_Icon_RGB_White.png";
import TidalLogo from "./../../assets/images/tidal-icon-white-rgb.png";
import Settings from "./../../assets/images/gear-solid.svg";
import Playing from "./../../assets/images/play-solid.svg";

const Home = () => {
  return (
    <>
      <div className={"menu-wrap"}>
        <MenuCard imageUrl={Playing} title={"Now Playing"} />
        <MenuCard imageUrl={SpotifyLogo} title={"Spotify"} route={"spotify"} />
        <MenuCard imageUrl={TidalLogo} title={"Tidal"} />
        <MenuCard imageUrl={Settings} title={"Settings"} />
      </div>
    </>
  );
};

export default Home;
