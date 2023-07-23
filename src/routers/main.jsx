import Signin from "../components/google/Signin";
import Signup from "../components/google/Signup";
import Home from "../components/home/Home";
import MainLayout from "../components/layout/MainLayout";
import GuardRoute from "./GuardRoute";
import GuardRouteAuth from "./GuardRouteAuth";

export default function init(routes) {
  const route = {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: (
          <GuardRoute>
            <Home />
          </GuardRoute>
        ),
      },
      {
        path: "signup",
        element: (
          <GuardRouteAuth>
            <Signup />
          </GuardRouteAuth>
        ),
      },
      {
        path: "login",
        element: (
          <GuardRouteAuth>
            <Signin />
          </GuardRouteAuth>
        ),
      },
    ],
  };
  routes.push(route);
}
