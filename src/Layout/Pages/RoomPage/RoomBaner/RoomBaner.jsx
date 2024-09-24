import "./RoomBaner.css";

const RoomBaner = () => {
  return (
    <>
      <div className="main_container">
        <div className="room_baner_outer_container">
          <div className="room_baner_inner_container">

            <div className="room_baner_bg_overlay"></div>

            <div data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="1000" className="room_baner_title_container">
              <h2>Find Your Room</h2>
              <p>The elegant luxury bedrooms in this gallery showcase custom interior designs & decorating ideas. View pictures and find your perfect luxury bedroom design.</p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default RoomBaner;