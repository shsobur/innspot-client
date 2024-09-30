import "./BookingPage.css";
import { useForm } from "react-hook-form";
import PropTypes from 'prop-types';
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";

const BookingPage = ({roomInfo}) => {
  const { images, name, category, roomNumber} = roomInfo;
  const {user} = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const userEmail = user?.email;
  const userName = user?.displayName;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const roomImage = images[0];
    const roomName = name;
    const roomCategory = category;
    roomNumber;
    const UserName = data.name;
    const email = data.email;
    const number = data.number;
    const checkin = data.checkin;
    const checkout = data.checkout;

    const userBooking = {
      roomImage,
      roomName,
      roomCategory,
      roomNumber,
      UserName,
      email,
      number,
      checkin,
      checkout,
    };

    console.log(userBooking);

    axiosSecure.post("/bookings", userBooking)
    .then(res => {
      console.log(res.data);
      if(res.data.acknowledged) {
        console.log("Fuck it ")
      }

    })
  };

  return (
    <>
      <div className="booking_main_content_container">
        <div className="bookign_title_container">
          <h2>Make your booking</h2>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="main_booking_input_container">

            <div id="input_box_1" className="booking_input_container">
              <p>Name</p>
              <input
                type="text"
                name="name"
                defaultValue={userName}
                placeholder="Enter your name"
                {...register("name", { required: true })}
              />
              <div>
                {errors.name && (
                  <span className="text-sm text-red-500">Name is required</span>
                )}
              </div>
            </div>

            <div id="input_box_2" className="booking_input_container">
              <p>Email</p>
              <input
                type="text"
                name="email"
                defaultValue={userEmail}
                placeholder="Enter your email"
                {...register("email", { required: true })}
              />
              <div>
                {errors.email && (
                  <span className="text-sm text-red-500">
                    Email is required
                  </span>
                )}
              </div>
            </div>

            <div id="input_box_3" className="booking_input_container">
              <p>Mobile Number</p>
              <input
                type="text"
                name="number"
                placeholder="Enter your number"
                {...register("number", { required: true })}
              />
              <div>
                {errors.number && (
                  <span className="text-sm text-red-500">
                    Number is required
                  </span>
                )}
              </div>
            </div>

            <div id="input_box_4" className="booking_input_container">
              <p>Total Days</p>
              <input
                type="text"
                name="day"
                placeholder="Total days (Optional)"
                {...register("day")}
              />
            </div>

            <div id="input_box_5" className="booking_input_container">
              <p>Check In</p>
              <input
                type="text"
                name="checkin"
                placeholder="Cheak in date"
                {...register("checkin", { required: true })}
              />
              <div>
                {errors.checkin && (
                  <span className="text-sm text-red-500">
                    Check in is required
                  </span>
                )}
              </div>
            </div>

            <div id="input_box_6" className="booking_input_container">
              <p>Check Out</p>
              <input
                type="text"
                name="checkout"
                placeholder="Cheak out date"
                {...register("checkout", { required: true })}
              />
              <div>
                {errors.checkout && (
                  <span className="text-sm text-red-500">
                    Check out is required
                  </span>
                )}
              </div>
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

BookingPage.propTypes = {
  roomInfo: PropTypes.object
}

export default BookingPage;
