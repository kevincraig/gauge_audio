import { Navigate } from "react-router-dom";

const Root = () => {
  const getRootUrl = () => {
    let url: string = "ErrorPage";
    return url;
  };
  const url = getRootUrl();
  console.log("Root.tsx url: ", url);
  return <Navigate to={`/${url}`} />;
};

export default Root;
