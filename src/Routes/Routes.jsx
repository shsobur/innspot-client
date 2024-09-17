import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import HomePageLayout from "../Layout/Pages/HomePage/HomePageLayout/HomePageLayout";
import SignIn from "../Layout/Pages/Authentication/SignIn/SignIn";
import SignUp from "../Layout/Pages/Authentication/SignUp/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <HomePageLayout></HomePageLayout>,
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);

export default router;
