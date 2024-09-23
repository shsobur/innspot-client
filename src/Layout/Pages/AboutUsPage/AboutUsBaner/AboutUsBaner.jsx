import "./AboutUsBaner.css";

const AboutUsBaner = () => {
  return (
    <>
      <div className="main_container">
        <div className="aboutus_baner_outer_container">
          <div className="aboutus_baner_inner_container">

            <div className="aboutus_bg_overlay"></div>

            <div className="main_aboutus_baner_title_container">
              <div data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="1000">
                <h2>About Us</h2>
                <p>
                  The elegant luxury bedrooms in this gallery showcase custom interior 
                  designs & decorating ideas. View pictures and find your
                  perfect luxury bedroom design.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsBaner;