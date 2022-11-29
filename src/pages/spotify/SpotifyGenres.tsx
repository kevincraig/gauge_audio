import React from "react";
import { useRedux } from "../../hooks";

const SpotifyGenres = () => {
  const { appSelector, dispatch } = useRedux();
  const { state } = appSelector((state) => ({
    state: state,
  }));
  return (
    <>
      <div>
        <h1>Spotify Genres</h1>
      </div>
    </>
  );
  console.log("SpotifyGenres");
};

export { SpotifyGenres };
