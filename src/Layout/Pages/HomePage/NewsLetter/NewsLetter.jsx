import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <>
      <div className="main_container">
        <div className="main_newsletter_outer_container">
          <div className="main_newsletter_inner_container">
            <div className="newsletter_section_main_container">
              <div
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1000"
                className="newsletter_section_left_side_container"
              >
                <span>NEWSLETTER SIGNUP FOR FREE</span>
                <h2>
                  <span>---</span> JOIN FOR NEW UPDATE <span>---</span>
                </h2>
              </div>

              <div className="newsletter_section_right_side_container">
                <div className="newsletter_input_container">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                  />
                  <button type="submit">SUBCRIBE NOW</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
