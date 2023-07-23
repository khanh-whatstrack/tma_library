import { createBrowserRouter } from "react-router-dom";
import authRoutes from "./main";
const initRoutes = () => {
  const routes = [];
  authRoutes(routes);
  return routes;
};
const appRoutes = initRoutes();
const router = createBrowserRouter(appRoutes);
export default router;
