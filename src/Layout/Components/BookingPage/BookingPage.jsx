import "./BookingPage.css";

const BookingPage = () => {
  return (
    <>
      <div className="booking_main_content_container">
        <div className="bookign_title_container">
          <h2>Make your booking</h2>
        </div>

        <form>
          <div className="main_booking_input_container">

            <div id="input_box_1" className="booking_input_container">
              <p>Name</p>
              <input type="text" name="name" placeholder="Enter your name" />
            </div>

            <div id="input_box_2" className="booking_input_container">
              <p>Email</p>
              <input type="text" name="email" placeholder="Enter your email" />
            </div>

            <div id="input_box_3" className="booking_input_container">
              <p>Mobile Number</p>
              <input type="text" name="number" placeholder="Enter your number" />
            </div>

            <div id="input_box_4" className="booking_input_container">
              <p>Total Days</p>
              <input type="text" name="day" placeholder="Total days" />
            </div>

            <div id="input_box_5" className="booking_input_container">
              <p>Check In</p>
              <input type="text" name="checkin" placeholder="Cheak in date" />
            </div>

            <div id="input_box_6" className="booking_input_container">
              <p>Check Out</p>
              <input type="text" name="checkout" placeholder="Cheak out date" />
            </div>

            <div id="input_box_7" className="booking_sub_input_container">
              <input type="submit" value="Confirm Booking" />
            </div>

          </div>
        </form>
      </div>
    </>
  );
};

export default BookingPage;
