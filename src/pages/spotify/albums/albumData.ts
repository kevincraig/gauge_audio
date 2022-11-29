import { Album, Artist } from "../../../features/player/types";

const albums: Album[] = [
  {
    id: "1",
    name: "The Dark Side of the Moon",
    artists: [
      {
        name: "Pink Floyd",
        id: "1",
        uri: "spotify:artist:3WrFJ7ztbogyGnTHbHJFl2",
        href: "https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2",
        external_urls: {
          spotify: "https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2",
        },
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5ebd2b4f0b0f9b9b9b9b9b9b9b9",
            width: 640,
          },
        ],
        type: "artist",
        followers: { href: "", total: 0 },
        genres: [],
        popularity: 300,
      },
    ],
    images: [
      {
        height: 640,
        width: 640,
        url: "https://picsum.photos/250",
      },
    ],
    href: "https://api.spotify.com/v1/albums/1",
    uri: "spotify:album:1",
    release_date_precision: "day",
    restrictions: { reason: "market" },
    album_type: "album",
    available_markets: [],
    external_urls: {
      spotify: "https://open.spotify.com/album/3WrFJ7ztbogyGnTHbHJFl2",
    },
    release_date: "1973-03-01",
    total_tracks: 10,
    tracks: [
      {
        id: "1",
        name: "Speak to Me",
        duration_ms: 90,
        explicit: false,
        preview_url:
          "https://p.scdn.co/mp3-preview/6d8b3b5e3b5e3b5e3b5e3b5e3b5e3b5e3b5e3b5e?cid=774b29d4f13844c495f206cafdad9c86",
      },
      {
        id: "2",
        name: "Breathe (In the Air)",
        duration_ms: 163,
        explicit: false,
        preview_url:
          "https://p.scdn.co/mp3-preview/6d8b3b5e3b5e3b5e3b5e3b5e3b5e3b5e3b5e3b5e?cid=774b29d4f13844c495f206cafdad9c86",
      },
      {
        id: "3",
        name: "On the Run",
        duration_ms: 216,
        explicit: false,
        preview_url:
          "https://p.scdn.co/mp3-preview/6d8b3b5e3b5e3b5e3b5e3b5e3b5e3b5e3b5e3b5e?cid=774b29d4f13844c495f206cafdad9c86",
      },
      {
        id: "4",
        name: "Time",
        duration_ms: 421,
        explicit: false,
        preview_url:
          "https://p.scdn.co/mp3-preview/6d8b3b5e3b5e3b5e3b5e3b5e3b5e3b5e3b5e3b5e?cid=774b29d4f13844c495f206cafdad9c86",
      },
    ],
    type: "album",
  },
];

export { albums };
