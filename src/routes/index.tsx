import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomeScreen from "../pages/Home/home.index";

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HomeScreen name="Pedrito" />}>
      {/* ... etc. */}
    </Route>
  )
);

export default appRouter;