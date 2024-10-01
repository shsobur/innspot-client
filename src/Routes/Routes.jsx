import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import HomePageLayout from "../Layout/Pages/HomePage/HomePageLayout/HomePageLayout";
import SignIn from "../Layout/Pages/Authentication/SignIn/SignIn";
import SignUp from "../Layout/Pages/Authentication/SignUp/SignUp";
import AboutUsPageLayout from "../Layout/Pages/AboutUsPage/AboutUsPageLayout/AboutUsPageLayout";
import RoomPageLayout from "../Layout/Pages/RoomPage/RoomPageLayout/RoomPageLayout";
import RoomCardDetails from "../Layout/Components/RoomCardDetails/RoomCardDetails";
import BookingPage from "@/Layout/Components/BookingPage/BookingPage";

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
        path: "/room",
        element: <RoomPageLayout></RoomPageLayout>,
      },
      {
        path: "/room/:id",
        element: <RoomCardDetails></RoomCardDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/rooms/${params.id}`),
      },
      {
        path: "/booking",
        element: <BookingPage></BookingPage>,
      },
      {
        path: "/aboutus",
        element: <AboutUsPageLayout></AboutUsPageLayout>,
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
