const AppConfig = () => {
  interface Spotify {
    clientId: string;
    clientSecret: string;
    redirectUri: string;
    responseType: string;
  }

  interface Tidal {
    clientId: string;
    clientSecret: string;
  }
};

export default AppConfig;
