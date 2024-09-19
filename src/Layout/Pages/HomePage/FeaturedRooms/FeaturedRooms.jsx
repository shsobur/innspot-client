import "./FeaturedRooms.css";

const FeaturedRooms = () => {
  return (
    <>
      <div className="main_container">
        <div className="main_featured_outer_container">
          <div className="main_featured_inner_container">

            <div className="featured_title_container">
              <h2>Featured Rooms</h2>
              <p>
                Find your fearured room with your match. We provide 99.9%
                quality.
              </p>
            </div>

            <div className="featured_main_content_container">
              <div
                data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="1000"
                id="fectured_image_section_1"
                className="featured_image_container"
              >
                <h2>All</h2>
              </div>

              <div
                data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="1000"
                id="fectured_image_section_2"
                className="featured_image_container"
              >
                <h2>Regular</h2>
              </div>

              <div
                data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="1000"
                id="fectured_image_section_3"
                className="featured_image_container"
              >
                <h2>Suit</h2>
              </div>

              <div
                data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="1000"
                id="fectured_image_section_4"
                className="featured_image_container"
              >
                <h2>VIP</h2>
              </div>
            </div>

            <div className="featured_btn_container">
              <button>Book Now</button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedRooms;
