import "./RoomCard.css";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { GoPlus } from "react-icons/go";
import { CiWifiOn } from "react-icons/ci";
import { IoTvOutline } from "react-icons/io5";
import { LuShowerHead } from "react-icons/lu";

const RoomCard = ({ room }) => {
  const {
    _id,
    name,
    pricePerNight,
    status,
    category,
    images,
  } = room;

  return (
    <>
      <Link to={`/room/${_id}`}>

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
                <p><span>{status}</span></p>
              </div>

            </div>

            <div className="room_card_bottom_title_outer_container">
              <div className="card_bottom_icon_contaienr">
                <h4><CiWifiOn /></h4>
                <h4><IoTvOutline /></h4>
                <h4><LuShowerHead /></h4>
                <h4><GoPlus /></h4>
              </div>
              <button><Link to={`/room/${_id}`}>Book now</Link></button>
            </div>
          </div>

        </div>

      </Link>
    </>
  );
};

RoomCard.propTypes = {
  room: PropTypes.object,
}

export default RoomCard;
