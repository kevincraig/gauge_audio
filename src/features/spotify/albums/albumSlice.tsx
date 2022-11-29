import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "app/store";
import * as types from "./types";

interface AlbumState {
  albumType: string;
  totalTracks: number;
  available_markets: string[];
  external_urls: string;
  href: string;
  id: string;
  images: string[];
  name: string;
  release_date: string;
  release_date_precision: string;
  type: string;
  uri: string;
  artists: types.Artist[];
  tracks: types.Track[];
}

const initialState: AlbumState = {
  albumType: "",
  totalTracks: 0,
  available_markets: [],
  external_urls: "",
  href: "",
  id: "",
  images: [],
  name: "",
  release_date: "",
  release_date_precision: "",
  type: "",
  uri: "",
  artists: [],
  tracks: [],
};

export const albumSlice = createSlice({
  name: "album",
  initialState,
  reducers: {
    setAlbum: (state) => {
      state.albumType = "album";
      state.totalTracks = 10;
      state.available_markets = ["US", "UK"];
      state.external_urls =
        "https://open.spotify.com/album/1zHlj4dQ8ZAtrayhuDDmkY";
      state.href = "https://api.spotify.com/v1/albums/1zHlj4dQ8ZAtrayhuDDmkY";
      state.id = "1zHlj4dQ8ZAtrayhuDDmkY";
      state.images = [
        "https://i.scdn.co/image/ab67616d0000b273f8d6d8f4f2f9f4f8f8f8f8f8",
      ];
      state.name = "The Dark Side of the Moon";
      state.release_date = "1973-03-01";
      state.release_date_precision = "day";
      state.type = "album";
      state.uri = "spotify:album:1zHlj4dQ8ZAtrayhuDDmkY";
      state.artists = [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2",
          },
          href: "https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2",
          id: "3WrFJ7ztbogyGnTHbHJFl2",
          name: "Pink Floyd",
          type: "artist",
          uri: "spotify:artist:3WrFJ7ztbogyGnTHbHJFl2",
          followers: {
            href: "https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2/followers",
            total: 0,
          },
          genres: [],
          images: [
            {
              height: 640,
              url: "https://i.scdn.co/image/ab6761610000e5ebf8d6d8f4f2f9f4f8f8f8f8f8",
              width: 640,
            },
          ],
          popularity: 0,
        },
      ];
      state.tracks = [
        {
          id: "1",
          name: "Speak to Me",
          duration_ms: 90,
          explicit: false,
          preview_url:
            "https://p.scdn.co/mp3-preview/1c7b6b3b5f8b3b3b3b3b3b3b3b3b3b3b3b3b3b3b?cid=774b29d4f13844c495f206cafdad9c86",
        },
      ];
    },
  },
});

export const { setAlbum } = albumSlice.actions;

export const selectAlbum = (state: RootState) => state.album;

export default albumSlice.reducer;
