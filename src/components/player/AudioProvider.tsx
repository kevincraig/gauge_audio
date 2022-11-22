import React from "react";
import { Row } from "react-bootstrap";
import TidalLogo from "./assets/images/tidal.svg";
import SpotifyLogo from "./../../assets/images/Spotify_Logo_RGB_White.png";

type AudioProviderProps = {
  provider: string;
};

const AudioProvider = ({ provider }: AudioProviderProps) => {
  const logo = provider === "tidal" ? TidalLogo : SpotifyLogo;

  return <img src={logo} alt="Tidal" height={30} width="available" />;
};

export default AudioProvider;
