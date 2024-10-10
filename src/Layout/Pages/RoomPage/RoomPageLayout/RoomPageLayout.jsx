import ScrollToTop from "@/Layout/Components/ScrollToTop/ScrollToTop";
import RoomBaner from "../RoomBaner/RoomBaner";
import RoomCards from "../RoomCards/RoomCards";
import RoomFilter from "../RoomFilter/RoomFilter";


const RoomPageLayout = () => {
  return (
    <>
      <ScrollToTop></ScrollToTop>

      <div>
        <RoomBaner></RoomBaner>
        <RoomFilter></RoomFilter>
        <RoomCards></RoomCards>
      </div>
    </>
  );
};

export default RoomPageLayout;