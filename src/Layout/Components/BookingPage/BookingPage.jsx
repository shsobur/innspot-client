import "./BookingPage.css";

const BookingPage = () => {
  return (
    <>
      <div className="main_container">
        <div className="main_booking_outer_container">
          <div className="main_booking_form_outer_container">
            <div className="booking_title_container">
              <h2>Make Your Booking</h2>
            </div>

            <div className="from_container">

              <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
                  Booking Form :
                </h2>

                <form>
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
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      />
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
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      />
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
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end mt-6">
                    <input className="px-8 cursor-pointer py-2.5 leading-5 text-white transition-colors duration-300 transform bg-[#7c6a46] rounded-md hover:bg-[#615236] focus:outline-none focus:bg-gray-600" type="submit" value="Conform Booking" >
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
