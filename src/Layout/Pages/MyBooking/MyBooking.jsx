import "./MyBooking.css";
import { IoBagCheck } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegCalendarCheck } from "react-icons/fa";
import { LiaEditSolid } from "react-icons/lia";

const MyBooking = () => {
  return (
    <>
      <div className="main_container">
        <div className="main_booking_list_outer_container">

          <section className="container px-4 mx-auto">

            <div className="flex items-center gap-x-3">
              <h2 className="text-lg font-medium text-gray-800 dark:text-white">
                My Booking:
              </h2>
              <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">
                100
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
                              <h3><FaRegCalendarCheck /></h3>
                            </button>
                          </th>

                          <th
                            scope="col"
                            className="px-4 py-3.5 text-sm font-normal text-center rtl:text-right dark:text-gray-400"
                          >
                            <button className="flex items-center gap-x-2">
                              <span>Check Out</span>
                              <h3><IoBagCheck /></h3>
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

                      <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                        <tr>

                          <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                            <div className="inline-flex items-center gap-x-3">
                              <div className="flex items-center gap-x-2">
                                <img
                                  className="object-cover w-20 h-14 rounded-lg"
                                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                                  alt=""
                                />
                                <div>
                                  <h2 className="font-medium text-gray-800 dark:text-white">
                                    Mountain View Deluxe
                                  </h2>
                                  <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
                                    VIP
                                  </p>
                                </div>
                              </div>
                            </div>
                          </td>

                          <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                            <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                              <h2 className="text-sm font-normal text-emerald-500">
                                24/10/04
                              </h2>
                            </div>
                          </td>

                          <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                            <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-[#fdf1f8] dark:bg-gray-800">
                              <h2 className="text-sm font-normal text-[#ec4899]">
                                24/10/09
                              </h2>
                            </div>
                          </td>

                          <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                            shsoburhossen951@gmail.com
                          </td>

                          <td className="px-4 py-4 text-sm whitespace-nowrap">
                            <div className="flex items-center gap-x-2">
                              <p className="px-3 py-1 text-sm text-indigo-500 rounded-full dark:bg-gray-800 bg-indigo-100/60">
                                12 Days
                              </p>
                              <p className="px-3 py-1 text-sm text-blue-500 rounded-full dark:bg-gray-800 bg-blue-100/60">
                                $ 1200
                              </p>
                            </div>
                          </td>

                          <td className="px-4 py-4 text-xl whitespace-nowrap">
                            <div className="flex items-center gap-x-6">

                              <button className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none">
                                <h3><RiDeleteBin6Line/></h3>
                              </button>

                              <button className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none">
                                <h3><LiaEditSolid /></h3>
                              </button>

                            </div>
                          </td>

                        </tr>
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

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 rtl:-scale-x-100"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                  />
                </svg>

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

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 rtl:-scale-x-100"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>

              </a>
            </div>

          </section>

        </div>
      </div>
    </>
  );
};

export default MyBooking;
