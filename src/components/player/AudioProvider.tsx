import React from "react";
import { Row } from "react-bootstrap";
import TidalLogo from "./../../assets/images/tidal-wide-white-rgb.png";
import SpotifyLogo from "./../../assets/images/Spotify_Logo_RGB_White.png";

type AudioProviderProps = {
  provider: string;
};

const AudioProvider = ({ provider }: AudioProviderProps) => {
  const logo = provider === "tidal" ? TidalLogo : SpotifyLogo;
  const height = provider === "tidal" ? "20px" : "30px";

  return (
    <img
      src={logo}
      alt="logo"
      height={height}
      width="available"
      className={"p-1"}
    />
  );
};

export default AudioProvider;
