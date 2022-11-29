// import Routes from "routes/Routes";
import "./App.scss";
import { MainLayout } from "./layouts";
import Home from "./components/home/Home";
import type { RouteObject } from "react-router-dom";
import { useRoutes, BrowserRouter as Router } from "react-router-dom";
import SpotifyIndex, {
  SpotifyAlbums,
  SpotifyGenres,
  SpotifyDashboard,
} from "./pages/spotify";

function App() {
  let routes: RouteObject[] = [
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "/spotify",
          element: <SpotifyDashboard />,
          children: [
            { index: true, element: <SpotifyIndex /> },
            { path: "albums", element: <SpotifyAlbums /> },
            { path: "genres", element: <SpotifyGenres /> },
          ],
        },
      ],
    },
    { path: "*", element: <div>Not Found</div> },
  ];

  let element = useRoutes(routes);

  return <div className="App">{element}</div>;
}

export default App;
