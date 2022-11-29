import { MenuCard } from "../../components/home";
import Playing from "../../assets/images/play-solid.svg";
import SpotifyLogo from "../../assets/images/Spotify_Icon_RGB_White.png";
import TidalLogo from "../../assets/images/tidal-icon-white-rgb.png";
import Settings from "../../assets/images/gear-solid.svg";
import React from "react";

const SpotifyIndex = () => {
  return (
    <>
      <div className={"menu-wrap"}>
        <MenuCard imageUrl={Playing} title={"Albums"} route={"albums"} />
        <MenuCard imageUrl={SpotifyLogo} title={"Genres"} route={"genres"} />
        <MenuCard imageUrl={TidalLogo} title={"Playlist"} />
        <MenuCard imageUrl={Settings} title={"Liked"} />
      </div>
    </>
  );
};
export { SpotifyIndex };
