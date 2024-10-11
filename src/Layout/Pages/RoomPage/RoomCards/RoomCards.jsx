import "./RoomCards.css";
import PropTypes from 'prop-types';
import Loading from "../../../Components/Loading/Loading";
import RoomCard from "../../../Components/RoomCard/RoomCard";


const RoomCards = ({rooms}) => {

  return (
    <>
      <div className="main_container">
        <div>
          <Loading></Loading>
        </div>
        <div className="main_room_cards_outer_container">
          {
            rooms.map(room => <RoomCard key={room._id} room={room}></RoomCard>)
          }
        </div>
      </div>
    </>
  );
};

RoomCards.propTypes = {
  rooms: PropTypes.object
}

export default RoomCards;