export interface Player {
  now_playing: string;
  previous_track: string;
  next_track: string;
  is_playing: boolean;
  album: Album;
  artist: Artist;
  track: Track;
}

export interface Album {
  album_type: string;
  total_tracks: number;
  available_markets: string[];
  external_urls: { spotify: string };
  href: string;
  id: string;
  images: { url: string; height: number; width: number }[];
  name: string;
  release_date: string;
  release_date_precision: string;
  restrictions: { reason: string };
  type: string;
  uri: string;
  artists: Artist[];
  tracks: Track[];
}

export interface Artist {
  external_urls: { spotify: string };
  followers: { href: string; total: number };
  genres: string[];
  href: string;
  id: string;
  images: { url: string; height: number; width: number }[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
}

export interface Track {
  href: string;
  items: {}[];
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
}
