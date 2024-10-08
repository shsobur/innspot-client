import { useForm } from "react-hook-form";
import "./BookingPage.css";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useAxiosSecure from "@/Hooks/useAxiosSecure/useAxiosSecure";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

const BookingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const roomInfo = location?.state.roomInfo;
  const {user} = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [totalDays, setTotalDays] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const priceParNight = roomInfo.pricePerNight;

  // Calculating booking total days__

  const handleTotalDays = () => {
    const startDate = new Date(checkIn);
    const endDate = new Date(checkOut);

    if(endDate <= startDate) {
      const Toast = Swal.mixin({
        toast: true,
        position: "top",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "error",
        title: "Wrong check out date, use valid"
      });
    }

    const totalTime = endDate - startDate;
    const totalDays = totalTime / (1000 * 60 * 60* 24);

    return totalDays;
  };

  useEffect(() => {

    if(checkIn && checkOut) {
      const days = handleTotalDays();

      if(days > 0) {
        setTotalDays(days);
        setTotalPrice(days * priceParNight);
      }
      else {
        setTotalDays(0);
        setTotalPrice(0);
      }
    }
    return;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkIn, checkOut]);

  console.log(checkIn, checkOut);

  const onSubmit = (data) => {
    const userName = data.name;
    const userEmail = user?.email;
    const contactUserEmail = data.email;
    const checkInDate = checkIn;
    const checkOutDate = checkOut;
    const roomName = roomInfo.name;
    const roomImage = roomInfo.images[0];
    const roomNumber = roomInfo.roomNumber;
    const roomCategory = roomInfo.category;

    const booking = {
      userName,
      userEmail,
      contactUserEmail,
      checkInDate,
      checkOutDate,
      totalDays,
      totalPrice,
      priceParNight,
      roomCategory,
      roomName,
      roomNumber,
      roomImage,
    }

    if(totalPrice === 0) {
      Swal.fire({
        title: "Wrong submition",
        text: "You are not fill the form correctly!. Try again",
        icon: "warning"
      });
      return;
    }

    axiosSecure.post("/bookings", booking)
    .then(res => {
      console.log(res.data)

      if(res.data.acknowledged) {
        const Toast = Swal.mixin({
          toast: true,
          position: "top",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          }
        });
        Toast.fire({
          icon: "success",
          title: "Room booked successfully"
        });

        navigate("/mybooking");
      }
    })

  }

  return (
    <>
    {/* function to scroll to top */}
    <ScrollToTop></ScrollToTop>

      <div className="main_container">
        <div className="main_booking_outer_container">

          <div 
            data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-duration="1000"
            className="main_booking_form_outer_container">

            <div className="booking_title_container">
              <h2>Make Your Booking</h2>
              <div className="total_count_container">
                <p><span>Total Day:</span> {totalDays}</p>
                <p><span>Total Price:</span> $ {totalPrice}</p>
              </div>
            </div>

            <div className="from_container">

              <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
                  Booking Form :
                </h2>

                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                    <div>
                      <label
                        className="text-gray-700 dark:text-gray-200"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        {...register("name", { required: true })}
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      />
                      <div>
                        {errors.name && <span className="text-sm text-red-500">Fill this field!</span>}
                      </div>
                    </div>

                    <div>
                      <label
                        className="text-gray-700 dark:text-gray-200"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        {...register("email", { required: true })}
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      />
                      <div>
                        {errors.email && <span className="text-sm text-red-500">Fill this field!</span>}
                      </div>
                    </div>

                    <div>
                      <label
                        className="text-gray-700 dark:text-gray-200"
                      >
                        Check In
                      </label>
                      <input
                        type="date"
                        name="checkin"
                        value={checkIn}
                        onChange={(event) => setCheckIn(event.target.value)}
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      />
                    </div>

                    <div>
                      <label
                        className="text-gray-700 dark:text-gray-200"
                      >
                        Check Out
                      </label>
                      <input
                        type="date"
                        name="checkout"
                        value={checkOut}
                        onChange={(event) => setCheckOut(event.target.value)}
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end mt-6">
                    <input className="px-8 cursor-pointer py-2.5 leading-5 text-white transition-colors duration-300 transform bg-[#7c6a46] rounded-md hover:bg-[#615236] focus:outline-none focus:bg-gray-600" type="submit" value="Conform" >
                    </input>
                  </div>

                </form>
              </section>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default BookingPage;
