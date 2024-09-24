import "./HomeBaner.css";

// Baner image__

import banerImg1 from "../../../../assets/banerimg/baner-1.png";
import banerImg2 from "../../../../assets/banerimg/baner-2.png";
import banerImg3 from "../../../../assets/banerimg/baner-3.png";
import banerImg4 from "../../../../assets/banerimg/baner-4.png";
import banerImg5 from "../../../../assets/banerimg/baner-5.png";
// Swper js__
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const HomeBaner = () => {
  return (
    <>
      <div className="main_container">
        <div className="main_baner_outer_container">
          <div className="main_baner_inner_container">

            <div className="baner_bg_image_main_container">
              <Swiper
                loop={true}
                slidesPerView={1}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper swiper_container"
              >
                <SwiperSlide>
                  <img src={banerImg1} alt="img" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={banerImg2} alt="img" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={banerImg3} alt="img" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={banerImg4} alt="img" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={banerImg5} alt="img" />
                </SwiperSlide>
              </Swiper>
            </div>

            <div className="baner_bg_overlay"></div>

            <div className="main_baner_content_container">
              {/* __Baner right side content__ */}
              <div
                data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="1000"
                className="baner_left_contect_container"
              >
                <h1>Paradise View</h1>
                <h2>Hotel for every moment rich in emotion</h2>
                <p>Every moment feels like the first time in paradise view</p>
                <button>Book Now</button>
              </div>

              {/* __Baner left side content__ */}
              <div
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="1000"
                className="baner_right_contect_container"
              >
                <Swiper
                  loop={true}
                  slidesPerView={1}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  modules={[Autoplay]}
                  className="mySwiper swiper_mini_container"
                >
                  <SwiperSlide>
                    <img src={banerImg1} alt="img" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={banerImg2} alt="img" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={banerImg3} alt="img" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={banerImg4} alt="img" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={banerImg5} alt="img" />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default HomeBaner;
