
import App from "./App";
import HomePage from "./pages/StudentPages/HomePage";
import Login from "./pages/Login";
import MyCourses from "./pages/MyCourses";
import SignUp from "./pages/SignUp";
import ClassRoom from "./pages/ClassRoom";
import Profile from "./pages/Profile";
import TeacherRoute from "./Routes/TeacherRoute";
import StudentRoute from "./Routes/StudentRoute";
import TeacherCourses from "./pages/TeacherPages/TeacherCourses";
import TeacherHomePage from "./pages/TeacherPages/TeacherHomePage";
import RoleRedirect from "./Services/RoleRedirect";

const Routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <RoleRedirect />,
      },
      {
        path: "/etudiant/home-page",
        element: <HomePage />,
      },
      {
        path: "mon-profile",
        element: <Profile />,
      },
      {
        path: "/etudiant/mes-cours",
        element: (
          <StudentRoute>
            <MyCourses />
          </StudentRoute>
        ),
      },
      {
        path: "/etudiant/ma-classe",
        element: (
          <StudentRoute>
            <ClassRoom />
          </StudentRoute>
        ),
      },
      {
        path: "/professeur/home-page",
        element: (
          <TeacherRoute>
            <TeacherHomePage />
          </TeacherRoute>
        )

      },
    
      {
        path: "/professeur/mes-cours",
        element: (
          <TeacherRoute>
            <TeacherCourses />
          </TeacherRoute>
        ),
      },
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