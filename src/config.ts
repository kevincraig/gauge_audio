var baseUrl = "";
var spotifyApiUrl = "https://api.spotify.com/v1/";
var spotifyAccountUrl = "https://accounts.spotify.com/api/token";

enum ServiceProvider {
  Spotify = "spotify",
  SpotifyAccount = "spotifyAccount",
  Tidal = "tidal",
  TidalAccount = "tidalAccount",
}

const getUrl = (serviceProvider: string) => {
  switch (serviceProvider) {
    case ServiceProvider.Spotify:
      baseUrl = spotifyApiUrl;
      break;
    case ServiceProvider.SpotifyAccount:
      baseUrl = spotifyAccountUrl;
      break;
    case ServiceProvider.Tidal:
      baseUrl = "https://api.tidal.com/v1/";
      break;
    case ServiceProvider.TidalAccount:
      baseUrl = "https://api.tidal.com/v1/";
      break;
    default:
      baseUrl = "https://api.spotify.com/v1/";
      break;
  }
  return baseUrl;
};

const config = {
  SPOTIFY_API_URL: getUrl(ServiceProvider.Spotify),
  SPOTIFY_ACCOUNT_URL: getUrl(ServiceProvider.SpotifyAccount),
  TIDAL_API_URL: getUrl(ServiceProvider.Tidal),
  TIDAL_ACCOUNT_URL: getUrl(ServiceProvider.TidalAccount),
};

export default config;
