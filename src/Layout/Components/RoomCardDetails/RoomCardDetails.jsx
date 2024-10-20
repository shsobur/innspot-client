import "./RoomCardDetails.css";
import { CgPin } from "react-icons/cg";
import { Link, useLoaderData } from "react-router-dom";
// React rating__
import "@smastrom/react-rating/style.css";
import { Rating } from "@smastrom/react-rating";
// React icons__
import { TiTick } from "react-icons/ti";
import { MdLocalOffer } from "react-icons/md";

import logoImg from "../../../assets/logo/transparency_logo.png";

// Swiper__
import { Swiper, SwiperSlide } from "swiper/react";
// Swiper required modules__
import { Pagination } from "swiper/modules";
// Swiper styles__
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

const RoomCardDetails = () => {
  const roomInfo = useLoaderData();

  // console.log(roomInfo);

  return (
    <>
    {/* function to scroll to top */}
    <ScrollToTop></ScrollToTop>

      <div className="main_container">
        <div className="main_card_details_outer_container">
          <div className="main_card_details_inner_container">

            <div className="main_details_container">

              {/* Header of the page__ST */}
              <div className="details_top_header_container">
                <div className="details_top_logo_and_title_container">
                  <img src={logoImg} alt="logo" />

                  <div className="details_top_location_outer_container">
                    <h2>Grand Canyon, Arzions, USA</h2>
                    <div className="details_top_location_inner_container">
                      <h3><CgPin /></h3>
                      <p>Cocnmino country, Grand canyon cillage, Arizona, USA</p>
                    </div>
                  </div>

                </div>

                <div className="details_top_reating_container">
                  <h3>
                    <Rating
                      style={{ maxWidth: 150 }}
                      value={roomInfo.rating}
                      readOnly
                    />
                  </h3>
                  <h2>{roomInfo.rating}</h2>
                </div>
              </div>
              {/* Header of the page__END */}

              <div className="details_image_and_info_section_container">

                {/* Left side image and offer section of the page__ST */}
                <div className="details_left_side_image_container">
                  <Swiper
                    pagination={{
                      type: "fraction",
                    }}
                    modules={[Pagination]}
                    className="mySwiper details_swiper"
                  >
                    {roomInfo.images.map((img) => (
                      <SwiperSlide key={img}>
                        <img id="room_image" src={img} alt="room image" />
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  <div className="offer_container">
                    <h2>Offer For Today</h2>
                    <div className="offer_inner_container">
                      <h3><MdLocalOffer /></h3>
                      <p>
                        {roomInfo.offers ? (
                          <p> {roomInfo.offers} </p>
                        ) : (
                          <p> Not Available Now! </p>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
                {/* Left side image and offer section of the page__END */}

                {/* Right side room info section of the page__ST */}
                <div className="details_right_side_info_container">
                  <div className="details_right_side_inner_left_container">

                    <div className="details_inner_left_outer_container">

                      <div className="details_inner_left_container">
                        <h2>{roomInfo.name}</h2>
                        <p>
                          <span>Room Size:</span> {roomInfo.roomSize}
                        </p>
                        <p>
                          <span>Max Gest:</span> {roomInfo.maxGuests}
                        </p>
                        <p>
                          <span>Room Number:</span> {roomInfo.roomNumber}
                        </p>
                        <p>
                          <span>Ctegory:</span> {roomInfo.category}
                        </p>
                      </div>

                      <div className="details_facilities_container">
                        <ul>
                          <h3><TiTick /></h3>
                          <h2>Amenities</h2>
                        </ul>
                        <div>
                          {roomInfo.amenities.map((amenitie) => (
                            <p key={amenitie}>{amenitie}</p>
                          ))}
                          {/* <p>Wi-Fi</p>
                          <p>Private butler</p>
                          <p>Jacuzzi</p>
                          <p>In-room spa service</p>
                          <p>Private terrace</p> */}
                        </div>
                      </div>

                    </div>

                    <div className="booking_container">
                      <h2>Start Booking</h2>
                      <h1>
                        ${roomInfo.pricePerNight} <span>par Night</span>
                      </h1>
                      <div>
                        <Link state={{roomInfo}} to="/booking">
                          <button>
                            Book Now!
                          </button>
                        </Link>
                      </div>
                    </div>

                  </div>

                  <div className="details_right_side_inner_right_container">
                    <div className="about_room_container">
                      <h2>About The Room</h2>
                      <article>{roomInfo.description}</article>
                    </div>
                  </div>
                </div>
                {/* Right side room info section of the page__END */}

              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default RoomCardDetails;
