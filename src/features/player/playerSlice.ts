import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, AppDispatch } from "../../app/store";
import { Player } from "./types";

const initialState: Player[] = [];

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setPlayer: (state, action: PayloadAction<Player>) => {
      state.push(action.payload);
    },
  },
});

export const { setPlayer } = playerSlice.actions;
export default playerSlice.reducer;
