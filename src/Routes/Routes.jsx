import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import HomePageLayout from "../Layout/Pages/HomePage/HomePageLayout/HomePageLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <HomePageLayout></HomePageLayout>,
      }
    ]
  },
]);

export default router;