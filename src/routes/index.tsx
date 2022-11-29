import React, { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import { useRedux } from "../hooks";
import Root from "./Root";
import { DefaultLayout, MainLayout } from "../layouts/";

//Home
const Home = React.lazy(() => import("../components/home/Home"));

//Spotify
const SpotifyAlbums = React.lazy(() => import("../pages/spotify/"));
const SpotifyGenres = React.lazy(() => import("../pages/spotify/"));

const loading = () => <div className=""></div>;

type LoadComponentProps = {
  component: React.LazyExoticComponent<() => JSX.Element>;
};

const LoadComponent = ({ component: Component }: LoadComponentProps) => {
  return (
    <Suspense fallback={loading()}>
      <Component />
    </Suspense>
  );
};

const AllRoutes = () => {
  const { appSelector } = useRedux();
  return useRoutes([
    { path: "/", element: <Root /> },
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "/home", element: <LoadComponent component={Home} /> },
        {
          path: "spotify",
          children: [
            {
              path: "albums",
              element: <LoadComponent component={SpotifyAlbums} />,
            },
            {
              path: "genres",
              element: <LoadComponent component={SpotifyGenres} />,
            },
          ],
        },
      ],
    },
  ]);
};

export { AllRoutes };
