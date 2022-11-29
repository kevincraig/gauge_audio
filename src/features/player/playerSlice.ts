import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "app/store";

interface PlayerState {
  trackName: string;
  albumName: string;
  artistName: string;
  albumArtUrl: string;
  isPlaying: boolean;
  positionMs: number;
  durationMs: number;
  provider: string;
}

const initialState: PlayerState = {
  trackName: "",
  albumName: "",
  artistName: "",
  albumArtUrl: "",
  isPlaying: false,
  positionMs: 0,
  durationMs: 0,
  provider: "spotify",
};

export const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setTrackName: (state) => {
      state.trackName = "trackName";
    },
    setAlbumName: (state) => {
      state.albumName = "albumName";
    },
    setArtistName: (state) => {
      state.artistName = "artistName";
    },
    setAlbumArtUrl: (state) => {
      state.albumArtUrl = "albumArtUrl";
    },
    setIsPlaying: (state) => {
      state.isPlaying = true;
    },
    setPositionMs: (state) => {
      state.positionMs = 0;
    },
    setDurationMs: (state) => {
      state.durationMs = 0;
    },
    setProvider: (state) => {
      state.provider = "provider";
    },
  },
});

export const {
  setTrackName,
  setAlbumName,
  setArtistName,
  setAlbumArtUrl,
  setIsPlaying,
  setPositionMs,
  setDurationMs,
  setProvider,
} = playerSlice.actions;

export const selectTrackName = (state: RootState) => state.player.trackName;
export const selectAlbumName = (state: RootState) => state.player.albumName;
export const selectArtistName = (state: RootState) => state.player.artistName;
export const selectAlbumArtUrl = (state: RootState) => state.player.albumArtUrl;
export const selectIsPlaying = (state: RootState) => state.player.isPlaying;
export const selectPositionMs = (state: RootState) => state.player.positionMs;
export const selectDurationMs = (state: RootState) => state.player.durationMs;
export const selectProvider = (state: RootState) => state.player.provider;

export default playerSlice.reducer;
