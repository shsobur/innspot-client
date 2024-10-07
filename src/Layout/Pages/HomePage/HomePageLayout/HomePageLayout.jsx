import ScrollToTop from "@/Layout/Components/ScrollToTop/ScrollToTop";
import Facilities from "../Facilities/Facilities";
import FeaturedRooms from "../FeaturedRooms/FeaturedRooms";
import HomeBaner from "../HomeBaner/HomeBaner";

const HomePageLayout = () => {
  return (
    <div>
      <ScrollToTop></ScrollToTop>

      <HomeBaner></HomeBaner>
      <Facilities></Facilities>
      <FeaturedRooms></FeaturedRooms>
    </div>
  );
};

export default HomePageLayout;