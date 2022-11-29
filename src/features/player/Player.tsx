import React, {useState} from "react";
import {useAppSelector, useAppDispatch} from "../../app/hooks";
import {
  setTrackName,
  setAlbumName,
  setArtistName,
  setAlbumArtUrl,
  setIsPlaying,
  setPositionMs,
  setDurationMs,
  setProvider,
} from "./playerSlice";

export function Player() {
  const dispatch = useAppDispatch();
  const trackName = useAppSelector((state) => state.player.trackName);
  const albumName = useAppSelector((state) => state.player.albumName);
  const artistName = useAppSelector((state) => state.player.artistName);
  const albumArtUrl = useAppSelector((state) => state.player.albumArtUrl);
  const isPlaying = useAppSelector((state) => state.player.isPlaying);
  const positionMs = useAppSelector((state) => state.player.positionMs);
  const durationMs = useAppSelector((state) => state.player.durationMs);
  const provider = useAppSelector((state) => state.player.provider);

  console.log("trackName: " + trackName);
  console.log("albumName: " + albumName);
  console.log("artistName: " + artistName);
  console.log("albumArtUrl: " + albumArtUrl);
  console.log("isPlaying: " + isPlaying);
  console.log("positionMs: " + positionMs);
  console.log("durationMs: " + durationMs);
  console.log("provider: " + provider);


}
