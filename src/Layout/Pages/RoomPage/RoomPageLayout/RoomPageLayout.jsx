import ScrollToTop from "@/Layout/Components/ScrollToTop/ScrollToTop";
import RoomBaner from "../RoomBaner/RoomBaner";
import RoomCards from "../RoomCards/RoomCards";
import RoomFilter from "../RoomFilter/RoomFilter";

import { useEffect, useState } from "react";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic/useAxiosPublic";


const RoomPageLayout = () => {
  const axiosPublic = useAxiosPublic();
  const [rooms, setRooms] = useState([]);
  const [sortValue, setSortValue] = useState("asc");

  useEffect(() => {
    axiosPublic.get(`/rooms?sort=${sortValue}`)
    .then(res => {
      setRooms(res.data)
    })
  }, [axiosPublic, sortValue])

  return (
    <>
      <ScrollToTop></ScrollToTop>

      <div>
        <RoomBaner></RoomBaner>
        <RoomFilter setSortValue={setSortValue} sortValue={sortValue}></RoomFilter>
        <RoomCards rooms={rooms}></RoomCards>
      </div>
    </>
  );
};

export default RoomPageLayout;