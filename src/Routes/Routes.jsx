import Main from "../Main/Main";
import PrivetRoute from "./PrivetRoute";
import { createBrowserRouter } from "react-router-dom";
import MyBooking from "@/Layout/Pages/MyBooking/MyBooking";
import SignIn from "../Layout/Pages/Authentication/SignIn/SignIn";
import SignUp from "../Layout/Pages/Authentication/SignUp/SignUp";
import BookingPage from "@/Layout/Components/BookingPage/BookingPage";
import RoomCardDetails from "../Layout/Components/RoomCardDetails/RoomCardDetails";
import HomePageLayout from "../Layout/Pages/HomePage/HomePageLayout/HomePageLayout";
import RoomPageLayout from "../Layout/Pages/RoomPage/RoomPageLayout/RoomPageLayout";
import AboutUsPageLayout from "../Layout/Pages/AboutUsPage/AboutUsPageLayout/AboutUsPageLayout";

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
        element: (
          <PrivetRoute>
            <RoomCardDetails></RoomCardDetails>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/rooms/${params.id}`),
      },
      {
        path: "/booking",
        element: (
          <PrivetRoute>
            <BookingPage></BookingPage>
          </PrivetRoute>
        ),
      },
      {
        path: "/mybooking",
        element: (
          <PrivetRoute>
            <MyBooking></MyBooking>
          </PrivetRoute>
        ),
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
