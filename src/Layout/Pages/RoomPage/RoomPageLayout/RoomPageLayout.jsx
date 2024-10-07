import ScrollToTop from "@/Layout/Components/ScrollToTop/ScrollToTop";
import RoomBaner from "../RoomBaner/RoomBaner";
import RoomCards from "../RoomCards/RoomCards";


const RoomPageLayout = () => {
  return (
    <>
      <ScrollToTop></ScrollToTop>

      <div>
        <RoomBaner></RoomBaner>
        <RoomCards></RoomCards>
      </div>
    </>
  );
};

export default RoomPageLayout;