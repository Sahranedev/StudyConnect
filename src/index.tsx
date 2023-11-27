import App from "./App";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import MyCourses from "./pages/MyCourses";
import { Navigate } from "react-router-dom";
import SignUp from "./pages/SignUp";
import ClassRoom from "./pages/ClassRoom";
import Profile from "./pages/Profile";

const Routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Navigate to="/home-page" replace />,
      },
      {
        path: "home-page",
        element: <HomePage />,
      },
      {
        path: "mes-cours",
        element: <MyCourses />,
      },
      {
        path: "ma-classe",
        element: <ClassRoom />
      },
      {
        path: "mon-profile",
        element: <Profile />
      }
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
];

export default Routes;
