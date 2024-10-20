import "./RoomCard.css";
import { useContext } from "react";
import PropTypes from "prop-types";
import { GoPlus } from "react-icons/go";
import { CiWifiOn } from "react-icons/ci";
import { IoTvOutline } from "react-icons/io5";
import { LuShowerHead } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const RoomCard = ({ room }) => {
  const { user } = useContext(AuthContext);
  const navigite = useNavigate();

  const { _id, name, pricePerNight, status, category, images } = room;

  const handleRoomDetails = () => {
    Swal.fire({
      title: "Opps!",
      text: "You have to login first",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#37c5a8",
      cancelButtonColor: "#7c6a46",
      confirmButtonText: "Login"
    }).then((result) => {
      if (result.isConfirmed) {
        navigite("/signin")
      }
    });
  };

  return (
    <>
      <Link
        to={user ? `/room/${_id}` : ""}
        onClick={() => {
          if (!user) {
            handleRoomDetails();
          }
        }}
      >
        <div className="mian_room_card_container">
          <div className="room_card_image_container">
            <img src={images[0]} alt="img" />
          </div>

          <div className="main_card_title_container">
            <div className="room_card_top_title_outer_container">
              <div className="room_card_top_title_inner_container">
                <h2>{name}</h2>
                <p>Category: {category}</p>
              </div>

              <div className="room_card_top_title_inner_container">
                <h3>Par night : ${pricePerNight}</h3>
                <p>
                  <span>{status}</span>
                </p>
              </div>
            </div>

            <div className="room_card_bottom_title_outer_container">
              <div className="card_bottom_icon_contaienr">
                <h4>
                  <CiWifiOn />
                </h4>
                <h4>
                  <IoTvOutline />
                </h4>
                <h4>
                  <LuShowerHead />
                </h4>
                <h4>
                  <GoPlus />
                </h4>
              </div>
              <button>
                <Link
                  onClick={() => {
                    if (!user) {
                      handleRoomDetails();
                    }
                  }}
                  to={user ? `/room/${_id}` : ""}
                >
                  Book now
                </Link>
              </button>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

RoomCard.propTypes = {
  room: PropTypes.object,
};

export default RoomCard;
