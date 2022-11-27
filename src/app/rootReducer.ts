import { combineReducers } from "@reduxjs/toolkit";

import playerReducer from "../features/player/playerSlice";

const rootReducer = combineReducers({
  playerReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
