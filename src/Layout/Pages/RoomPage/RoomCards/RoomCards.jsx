import { useEffect, useState } from "react";
import "./RoomCards.css";
import RoomCard from "../../../Components/RoomCard/RoomCard";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic/useAxiosPublic";
import Loading from "../../../Components/Loading/Loading";

const RoomCards = () => {
  const [rooms, setRooms] = useState([]);
  const axiosPublic = useAxiosPublic();
  console.log(rooms)

  useEffect(() => {
    axiosPublic.get("/rooms")
    .then(data => {
      setRooms(data.data)
    })
  }, [axiosPublic])

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

export default RoomCards;