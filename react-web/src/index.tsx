import App from "./App";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import MyCourses from "./pages/MyCourses";
import { Navigate } from 'react-router-dom';

const Routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Navigate to="/home-page" replace />,
      },
      {
        path: 'home-page',
        element: <HomePage />,
      },
      {
        path: "mes-cours",
        element : <MyCourses />
      }
   
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
];


export default Routes;
