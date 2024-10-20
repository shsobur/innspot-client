import "./MyBooking.css";
import Swal from "sweetalert2";
import { IoBagCheck } from "react-icons/io5";
import { LiaEditSolid } from "react-icons/lia";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaBars, FaRegCalendarCheck } from "react-icons/fa";

import { MdApps } from "react-icons/md";
import { useContext, useEffect, useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import ScrollToTop from "@/Layout/Components/ScrollToTop/ScrollToTop";
import { AuthContext } from "@/Layout/Components/AuthProvider/AuthProvider";
import useAxiosSecure from "@/hooks/useAxiosSecure";

const MyBooking = () => {
  const { axiosSecure } = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const [roomBookingInfo, setRoomBookingInfo] = useState([]);

  const [isOpen, setIsOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [totalDays, setTotalDays] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [roomPriceParNight, setRoomPriceParNight] = useState(null);

  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");

  const availability = "Available";

  useEffect(() => {
    axiosSecure.get(`/bookings/${user?.email}`).then((res) => {
      setBookings(res.data);
    });
  }, [axiosSecure, user]);

  // Delete oparation__
  const handleDelete = (id, roomNumber) => {
    const updateRoomState = {
      availability,
    };

    // Sweet Alart befour delete__
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#218838",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/bookings/${id}`)
          .then((res) => {
            if (res.data.deletedCount === 1) {
              // Update room state after cancel booing__
              axiosSecure
                .patch(`/cancelRoom/${roomNumber}`, updateRoomState)
                .then((res) => {
                  if (res.data.modifiedCount > 0) {
                    Swal.fire({
                      title: "Deleted!",
                      text: "Your file has been deleted.",
                      icon: "success",
                    });
                  }
                });

              const remaining = bookings.filter(
                (booking) => booking._id !== id
              );
              setBookings(remaining);
            }
          })
          .catch((error) => {
            console.log("Error to delete booking", error);
          });
      }
    });
  };

  // Calculating new update total days__

  const handleUpdateTotalDays = () => {
    const startDay = new Date(checkInDate);
    const endDay = new Date(checkOutDate);

    if (endDay <= startDay) {
      const Toast = Swal.mixin({
        toast: true,
        position: "top",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: "error",
        title: "Wrong check out date, use valid",
      });
    }

    const totalTime = endDay - startDay;
    const totalDays = totalTime / (1000 * 60 * 60 * 24);

    return totalDays;
  };

  useEffect(() => {
    const days = handleUpdateTotalDays();

    if (days > 0) {
      setTotalDays(days);
      setTotalPrice(days * roomPriceParNight);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkInDate, checkOutDate]);

  // Update booking info__
  const handleUpdate = (e) => {
    e.preventDefault();

    if (!checkInDate || !checkOutDate) {
      // console.log("on input value");
      setErrorMessage("Please fulfill the input");
      return;
    }

    setErrorMessage("");

    const form = e.target;

    const userName = form.name.value;
    const contactUserEmail = form.email.value;
    const id = roomBookingInfo._id;

    const updateBookingValue = {
      userName,
      contactUserEmail,
      checkInDate,
      checkOutDate,
      totalDays,
      totalPrice,
    };

    if (totalPrice === 0) {
      Swal.fire({
        title: "Wrong submition",
        text: "You are not fill the form correctly!. Try again",
        icon: "warning",
      });
      return;
    }

    // console.log(updateBookingValue);

    axiosSecure.patch(`/bookings/${id}`, updateBookingValue).then(() => {
      // console.log(res.data);
      setIsOpen(false);

      // Refetch the updated data from the server__
      axiosSecure
        .get(`/bookings/${user?.email}`)
        .then((res) => {
          setBookings(res.data);
        })
        .catch((error) => {
          console.error("Error to fetching updated data:", error);
        });

      const Toast = Swal.mixin({
        toast: true,
        position: "top",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: "success",
        title: "Updated successfully",
      });
    });

    setCheckInDate("");
    setCheckOutDate("");
  };

  return (
    <>
      {/* Function to scroll to top */}
      <ScrollToTop></ScrollToTop>

      <div className="main_container">
        <div className="main_booking_list_outer_container">
          <div className="booking_list_container"></div>

          <section className="container px-4 mx-auto">
            <div className="flex items-center gap-x-3">
              <h2 className="text-lg font-medium text-gray-800 dark:text-white">
                My Booking:
              </h2>
              <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">
                {bookings?.length}
              </span>
            </div>

            <div className="flex flex-col mt-6">
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                  <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                      <thead className="bg-[#7c6a46] text-white dark:bg-gray-800">
                        <tr>
                          <th
                            scope="col"
                            className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right dark:text-gray-400"
                          >
                            <div className="flex items-center gap-x-3">
                              <span>Name</span>
                            </div>
                          </th>

                          <th
                            scope="col"
                            className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right dark:text-gray-400"
                          >
                            <button className="flex items-center gap-x-2">
                              <span>Check In</span>
                              <h3>
                                <FaRegCalendarCheck />
                              </h3>
                            </button>
                          </th>

                          <th
                            scope="col"
                            className="px-4 py-3.5 text-sm font-normal text-center rtl:text-right dark:text-gray-400"
                          >
                            <button className="flex items-center gap-x-2">
                              <span>Check Out</span>
                              <h3>
                                <IoBagCheck />
                              </h3>
                            </button>
                          </th>

                          <th
                            scope="col"
                            className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right dark:text-gray-400"
                          >
                            Email address
                          </th>

                          <th
                            scope="col"
                            className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right dark:text-gray-400"
                          >
                            Price
                          </th>

                          <th
                            scope="col"
                            className="flex items-center  px-4 py-3.5 text-sm font-normal text-left rtl:text-right dark:text-gray-400"
                          >
                            Edit
                            <div className="flex gap-2 items-center">
                              <p className="pl-10 text-2xl cursor-pointer">
                                <FaBars />
                              </p>
                              <p className="text-3xl cursor-pointer">
                                <MdApps />
                              </p>
                            </div>
                          </th>
                        </tr>
                      </thead>

                      <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                        {bookings.map((booking) => (
                          <tr key={booking._id}>
                            <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                              <div className="inline-flex items-center gap-x-3">
                                <div className="flex items-center gap-x-2">
                                  <img
                                    className="object-cover w-20 h-14 rounded-lg"
                                    src={booking.roomImage}
                                    alt=""
                                  />
                                  <div>
                                    <h2 className="font-medium text-gray-800 dark:text-white">
                                      {booking.userName}
                                    </h2>
                                    <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
                                      Type: {booking.roomCategory}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                              <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                                <h2 className="text-sm font-normal text-emerald-500">
                                  {booking.checkInDate}
                                </h2>
                              </div>
                            </td>

                            <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                              <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-[#fdf1f8] dark:bg-gray-800">
                                <h2 className="text-sm font-normal text-[#ec4899]">
                                  {booking.checkOutDate}
                                </h2>
                              </div>
                            </td>

                            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                              {booking.contactUserEmail}
                            </td>

                            <td className="px-4 py-4 text-sm whitespace-nowrap">
                              <div className="flex items-center gap-x-2">
                                <p className="px-3 py-1 text-sm text-indigo-500 rounded-full dark:bg-gray-800 bg-indigo-100/60">
                                  {booking.totalDays} Days
                                </p>
                                <p className="px-3 py-1 text-sm text-blue-500 rounded-full dark:bg-gray-800 bg-blue-100/60">
                                  $ {booking.totalPrice}
                                </p>
                              </div>
                            </td>

                            <td className="px-4 py-4 text-xl whitespace-nowrap">
                              <div className="flex items-center gap-x-6">
                                <h3 className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none">
                                  <button
                                    onClick={() =>
                                      handleDelete(
                                        booking._id,
                                        booking.roomNumber
                                      )
                                    }
                                  >
                                    <RiDeleteBin6Line />
                                  </button>
                                </h3>

                                <h3 className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none">
                                  <button
                                    onClick={() => {
                                      setIsOpen(true);
                                      setRoomBookingInfo(booking);
                                      setRoomPriceParNight(
                                        booking.priceParNight
                                      );
                                      // console.log(booking.priceParNight);
                                      // console.log(booking);
                                    }}
                                  >
                                    <LiaEditSolid />
                                  </button>
                                </h3>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>

                    {/* Update modal__ST */}

                    <div>
                      <div className="relative flex justify-center">
                        {isOpen && (
                          <>
                            {/* Background overlay */}
                            <div className="fixed inset-0 bg-black bg-opacity-50 z-5"></div>

                            {/* Modal content */}
                            <div
                              className="fixed inset-0 z-22 overflow-y-auto"
                              aria-labelledby="modal-title"
                              role="dialog"
                              aria-modal="true"
                            >
                              <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                                <span
                                  className="hidden sm:inline-block sm:h-screen sm:align-middle"
                                  aria-hidden="true"
                                >
                                  &#8203;
                                </span>

                                <div
                                  data-aos="fade-up"
                                  data-aos-easing="linear"
                                  data-aos-duration="500"
                                  className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl dark:bg-gray-900 sm:my-8 sm:w-full sm:max-w-sm sm:p-6 sm:align-middle"
                                >
                                  <h3
                                    className="text-2xl pb-5 font-bold leading-6 text-center text-gray-800 capitalize dark:text-white"
                                    id="modal-title"
                                  >
                                    Update your booking
                                  </h3>
                                  <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                                    You can update their bookings, but updates
                                    are allowed only within 3 days of the
                                    booking. After 3 days, changes are not
                                    possible.
                                  </p>

                                  <form
                                    onSubmit={handleUpdate}
                                    className="mt-4"
                                  >
                                    <div>
                                      <p className="pl-1 mt-5 font-medium">
                                        Full name
                                      </p>

                                      <input
                                        type="text"
                                        name="name"
                                        defaultValue={roomBookingInfo.userName}
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                      />
                                    </div>

                                    <div>
                                      <p className="pl-1 mt-4 font-medium">
                                        Enter your email
                                      </p>
                                      <input
                                        type="text"
                                        name="email"
                                        defaultValue={
                                          roomBookingInfo.contactUserEmail
                                        }
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                      />
                                    </div>

                                    <div>
                                      <p className="pl-1 mt-4 font-medium">
                                        New check-in date
                                      </p>
                                      <input
                                        type="date"
                                        name="checkin"
                                        value={checkInDate}
                                        onChange={(e) =>
                                          setCheckInDate(e.target.value)
                                        }
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                      />
                                    </div>

                                    <div>
                                      <p className="pl-1 mt-4 font-medium">
                                        New check-up date
                                      </p>
                                      <input
                                        type="date"
                                        name="checkout"
                                        value={checkOutDate}
                                        onChange={(e) =>
                                          setCheckOutDate(e.target.value)
                                        }
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                      />
                                    </div>

                                    <div className="mt-4 sm:flex sm:items-center sm:-mx-2">
                                      <button
                                        type="button"
                                        onClick={() => {
                                          setIsOpen(false);
                                          setCheckInDate("");
                                          setCheckOutDate("");
                                        }}
                                        className="w-full px-4 py-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:w-1/2 sm:mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40"
                                      >
                                        Cancel
                                      </button>

                                      <button
                                        type="submit"
                                        className="w-full px-4 py-2 mt-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:mt-0 sm:w-1/2 sm:mx-2 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                                      >
                                        Update
                                      </button>
                                    </div>

                                    <div>
                                      <span className="w-full text-sm text-red-500 text-center">
                                        {errorMessage}
                                      </span>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Update modal__END */}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between mt-6">
              <a
                href="#"
                className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800"
              >
                <h3>
                  <GoArrowLeft />
                </h3>

                <span>previous</span>
              </a>

              <div className="items-center hidden lg:flex gap-x-3">
                <a
                  href="#"
                  className="px-2 py-1 text-sm text-blue-500 rounded-md dark:bg-gray-800 bg-blue-100/60"
                >
                  1
                </a>

                <a
                  href="#"
                  className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
                >
                  2
                </a>

                <a
                  href="#"
                  className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
                >
                  3
                </a>

                <a
                  href="#"
                  className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
                >
                  ...
                </a>

                <a
                  href="#"
                  className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
                >
                  12
                </a>

                <a
                  href="#"
                  className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
                >
                  13
                </a>

                <a
                  href="#"
                  className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
                >
                  14
                </a>
              </div>

              <a
                href="#"
                className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800"
              >
                <span>Next</span>

                <h3>
                  <GoArrowRight />
                </h3>
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default MyBooking;
