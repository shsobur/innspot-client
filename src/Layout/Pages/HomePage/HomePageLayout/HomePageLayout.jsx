import ScrollToTop from "@/Layout/Components/ScrollToTop/ScrollToTop";
import Facilities from "../Facilities/Facilities";
import FeaturedRooms from "../FeaturedRooms/FeaturedRooms";
import HomeBaner from "../HomeBaner/HomeBaner";
import NewsLetter from "../NewsLetter/NewsLetter";
import HotelMap from "../HotelMap/HotelMap";

const HomePageLayout = () => {
  return (
    <>
      <ScrollToTop></ScrollToTop>

      <div>
        <HomeBaner></HomeBaner>
        <Facilities></Facilities>
        <FeaturedRooms></FeaturedRooms>
        <HotelMap></HotelMap>
        <NewsLetter></NewsLetter>
      </div>

    </>
  );
};

export default HomePageLayout;