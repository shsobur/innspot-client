import Facilities from "../Facilities/Facilities";
import FeaturedRooms from "../FeaturedRooms/FeaturedRooms";
import HomeBaner from "../HomeBaner/HomeBaner";

const HomePageLayout = () => {
  return (
    <div>
      <HomeBaner></HomeBaner>
      <Facilities></Facilities>
      <FeaturedRooms></FeaturedRooms>
    </div>
  );
};

export default HomePageLayout;