import { useEffect, useState } from "react";
import "./RoomCards.css";
import RoomCard from "../../../Components/RoomCard/RoomCard";

const RoomCards = () => {
  const [rooms, setRooms] = useState([]);
  console.log(rooms)

  useEffect(() => {
    fetch("http://localhost:5000/rooms")
    .then(res => res.json())
    .then(data => {
      setRooms(data)
    })
  }, [])

  return (
    <>
      <div className="main_container">
        <div className="main_room_cards_outer_container">

        {
          rooms.map(room => <RoomCard key={room._id} room={room}></RoomCard>)
        }

        </div>
      </div>
    </>
  );
};

export default RoomCards;