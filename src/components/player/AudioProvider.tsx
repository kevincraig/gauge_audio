import React from "react";
import {Row} from "react-bootstrap";
import TidalLogo from "./assets/images/tidal.svg";

type AudioProviderProps = {
    provider: string;
};

const AudioProvider = ({provider}: AudioProviderProps) => {
    return (

        <img src={TidalLogo} alt="Tidal" height={15} width={15}/>

    );
};

export default AudioProvider;
