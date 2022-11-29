import jwtDecode from "jwt-decode";
import axios from "axios";
import config from "../config";

axios.defaults.headers.post["Content-Type"] = "application/json";

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    let message;

    if (error && error.response && error.response.status === 404) {
      message = "The requested resource could not be found.";
    } else {
      switch (error.response.status) {
        case 401:
          message = "Invalid Credentials";
          break;
        case 403:
          message = "Access Denied";
          break;
        case 404:
          message = "The requested resource could not be found.";
          break;
        case 500:
          message = "Internal Server Error";
          break;
        default:
          message =
            error.response && error.response.data
              ? error.response["message"]
              : error.message || error;
      }
    }
    return Promise.reject(message);
  }
);

const setSpotifyToken = (token: string) => {
  console.log(token);
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Basic ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

class ApiCore {
  get = (url: string) => {
    let response;
    try {
      response = axios.get(url);
    } catch (error) {
      console.log(error);
    }
    return response;
  };

  post = (url: string, data: any) => {
    return axios.post(url, data);
  };
}

export { ApiCore, setSpotifyToken };
