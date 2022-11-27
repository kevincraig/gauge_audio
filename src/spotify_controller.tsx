import React, { useState, useEffect, Component } from "react";
import axios from "axios";

const SpotifyController = () => {
  const [token, setToken] = useState();
  const [genres, setGenres] = useState({
    selectedGenre: "",
    listOfGenresFromAPI: [],
  });

  const spotify = { ClientId: "", ClientSecret: "" };
  const spotifyBaseUrl = "https://api.spotify.com/v1/";
  let spotifyHeaders: { Authorization: string; "Content-Type": string };
  spotifyHeaders = {
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization:
      "Basic " +
      Buffer.from(spotify.ClientId + ":" + spotify.ClientSecret).toString(
        "base64"
      ),
  };

  const GetClientToken = () => {
    axios
      .post(
        "https://accounts.spotify.com/api/token",
        "grant_type=client_credentials",
        {
          headers: spotifyHeaders,
        }
      )
      .then((response) => {
        setToken(response.data.access_token);
      });
    return token;
  };
};

export default SpotifyController;
