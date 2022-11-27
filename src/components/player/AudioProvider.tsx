import React from "react";
import { Row, Col } from "react-bootstrap";
import TidalLogo from "./../../assets/images/tidal-wide-white-rgb.png";
import SpotifyLogo from "./../../assets/images/Spotify_Logo_RGB_White.png";
import WifiUtils from "../common/wifi_utils";

type AudioProviderProps = {
  provider: string;
};

const AudioProvider = ({ provider }: AudioProviderProps) => {
  const logo = provider === "tidal" ? TidalLogo : SpotifyLogo;
  const height = provider === "tidal" ? "20px" : "30px";

  return (
    <Row className={"pb-2 pt-2 text-start"}>
      <Col>
        <img src={logo} alt="logo" height={height} width="available" />
      </Col>
    </Row>
  );
};

export default AudioProvider;
