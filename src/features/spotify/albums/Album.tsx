import React from "react";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { setAlbum } from "./albumSlice";

export function Album() {
  const dispatch = useAppDispatch();
  const albumType = useAppSelector((state) => state);
  const totalTracks = useAppSelector((state) => state.album.totalTracks);
  const available_markets = useAppSelector(
    (state) => state.album.available_markets
  );
  const external_urls = useAppSelector((state) => state.album.external_urls);
  const href = useAppSelector((state) => state.album.href);
  const id = useAppSelector((state) => state.album.id);
  const images = useAppSelector((state) => state.album.images);
  const name = useAppSelector((state) => state.album.name);
  const release_date = useAppSelector((state) => state.album.release_date);
  const release_date_precision = useAppSelector(
    (state) => state.album.release_date_precision
  );
  const type = useAppSelector((state) => state.album.type);
  const uri = useAppSelector((state) => state.album.uri);
  const artists = useAppSelector((state) => state.album.artists);
  const tracks = useAppSelector((state) => state.album.tracks);

  console.log("albumType: " + albumType);
  console.log("totalTracks: " + totalTracks);
  console.log("available_markets: " + available_markets);
  console.log("external_urls: " + external_urls);
  console.log("href: " + href);
  console.log("id: " + id);
  console.log("images: " + images);
  console.log("name: " + name);
  console.log("release_date: " + release_date);
  console.log("release_date_precision: " + release_date_precision);
  console.log("type: " + type);
  console.log("uri: " + uri);
  console.log("artists: " + artists);
  console.log("tracks: " + tracks);
}
