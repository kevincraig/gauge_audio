import { combineReducers } from "@reduxjs/toolkit";

import playerReducer from "../features/player/playerSlice";
import albumReducer from "../features/spotify/albums/albumSlice";

export const rootReducer = combineReducers({
  player: playerReducer,
  album: albumReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
