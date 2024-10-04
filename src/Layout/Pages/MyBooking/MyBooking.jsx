import "./MyBooking.css";
import Swal from "sweetalert2";
import { IoBagCheck } from "react-icons/io5";
import { LiaEditSolid } from "react-icons/lia";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegCalendarCheck } from "react-icons/fa";

import useAxiosSecure from "@/Hooks/useAxiosSecure/useAxiosSecure";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/Layout/Components/AuthProvider/AuthProvider";
import Loading from "@/Layout/Components/Loading/Loading";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { IoIosInformationCircleOutline } from "react-icons/io";

const MyBooking = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const url = `http://localhost:5000/bookings/${user?.email}`;

  useEffect(() => {
    axiosSecure.get(url).then((res) => {
      setBookings(res.data);
    });
  }, [axiosSecure, url]);

  const handleDelete = (id) => {
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
        axiosSecure.delete(`/bookings/${id}`).then((res) => {
          if (res.data.deletedCount === 1) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });

            const remaining = bookings.filter((booking) => booking._id !== id);
            setBookings(remaining);
          }
        });
      }
    });
  };

  return (
    <>
      <div className="main_container">
        <div className="main_booking_list_outer_container">
          <div className="booking_list_container">
            <Loading></Loading>
          </div>

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
                    <table className="table_container min-w-full divide-y divide-gray-200 dark:divide-gray-700">
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
                            className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right dark:text-gray-400"
                          >
                            Edit
                          </th>
                        </tr>
                      </thead>

                      <tbody className="table_body_container bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
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
                                      {booking.roomName}
                                    </h2>
                                    <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
                                      {booking.roomCategory}
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
                                    onClick={() => handleDelete(booking._id)}
                                  >
                                    <RiDeleteBin6Line />
                                  </button>
                                </h3>

                                <h3 className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none">
                                  <button onClick={() => setIsOpen(true)}>
                                    <LiaEditSolid />
                                  </button>
                                </h3>

                                <h3 className="text-gray-500 transition-colors duration-200 dark:hover:text-green-500 dark:text-gray-300 hover:text-green-500 focus:outline-none">
                                  <button>
                                    <IoIosInformationCircleOutline />
                                  </button>

                                  {/* Tool tip_ST */}

                                  {/* <div className="relative inline-block">

                                    <p className="absolute flex items-center justify-center w-48 p-3 text-gray-600 bg-white rounded-lg shadow-lg -left-[13.2rem] -top-4 dark:shadow-none shadow-gray-200 dark:bg-gray-800 dark:text-white">
                                      <span className="truncate">
                                        This is a tooltip
                                      </span>

                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="absolute w-6 h-6 text-white transform rotate-45 -translate-y-1/2 fill-current -right-3 top-1/2 dark:text-gray-800"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                      >
                                        <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z"></path>
                                      </svg>
                                    </p>
                                  </div> */}

                                  {/* Tool tip_END */}
                                </h3>
                              </div>
                            </td>

                            {/* Update modal__ST */}

                            <div>
                              <div className="relative flex justify-center">
                                {isOpen && (
                                  <>
                                    {/* Background overlay */}
                                    <div className="fixed inset-0 bg-black bg-opacity-50 z-10"></div>

                                    {/* Modal content */}
                                    <div
                                      className="fixed inset-0 z-20 overflow-y-auto"
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

                                        <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl dark:bg-gray-900 sm:my-8 sm:w-full sm:max-w-sm sm:p-6 sm:align-middle">
                                          <h3
                                            className="text-2xl pb-5 font-bold leading-6 text-center text-gray-800 capitalize dark:text-white"
                                            id="modal-title"
                                          >
                                            Update your booking
                                          </h3>
                                          <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                                            You can update their bookings, but
                                            updates are allowed only within 3
                                            days of the booking. After 3 days,
                                            changes are not possible.
                                          </p>

                                          <form className="mt-4">

                                            <div>
                                              <p className="pl-1 mt-5 font-medium">Full name</p>
                                              <input
                                                type="text"
                                                name="name"
                                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                              />
                                            </div>

                                            <div>
                                              <p className="pl-1 mt-4 font-medium">Enter your email</p>
                                              <input
                                                type="text"
                                                name="name"
                                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                              />
                                            </div>

                                            <div>
                                              <p className="pl-1 mt-4 font-medium">New check-in date</p>
                                              <input
                                                type="date"
                                                name="checkin"
                                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                              />
                                            </div>

                                            <div>
                                              <p className="pl-1 mt-4 font-medium">New check-up date</p>
                                              <input
                                                type="date"
                                                name="checkup"
                                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                              />
                                            </div>

                                            <div className="mt-4 sm:flex sm:items-center sm:-mx-2">
                                              <button
                                                type="button"
                                                onClick={() => setIsOpen(false)}
                                                className="w-full px-4 py-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:w-1/2 sm:mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40"
                                              >
                                                Cancel
                                              </button>

                                              <button
                                                type="button"
                                                className="w-full px-4 py-2 mt-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:mt-0 sm:w-1/2 sm:mx-2 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                                              >
                                                Update
                                              </button>
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
                          </tr>
                        ))}
                      </tbody>
                    </table>
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
