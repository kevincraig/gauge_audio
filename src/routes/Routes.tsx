import { useRedux } from "hooks";
import { BrowserRouter } from "react-router-dom";
import { AllRoutes } from "./index";

const Routes = () => {
  const { dispatch } = useRedux();

  return (
    <BrowserRouter>
      <AllRoutes />
    </BrowserRouter>
  );
};

export default Routes;
