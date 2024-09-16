import { FaWifi } from "react-icons/fa";
import "./Facilities.css";
import { BiSolidParking } from "react-icons/bi";
import { MdOutlineLocalLaundryService } from "react-icons/md";
import { GoLightBulb } from "react-icons/go";
import { IoFastFood } from "react-icons/io5";

const Facilities = () => {
  return (
    <>
      <div className="main_container">
        <div className="main_facilities_outer_container">
          <div className="main_facilities_inner_container">

            <div className="main_facilities_content_container">

              <div
                // data-aos="zoom-in"
                // data-aos-easing="linear"
                // data-aos-duration="1000"
                className="facilities_title_container"
              >
                <h2>Our Facilities</h2>
                <p>
                  We offer modern (5 star) hotel facilities for your comfort.
                </p>
              </div>

              <div className="facilities_main_section">

                <div className="facilities_section_item_container">
                  <div className="facilities_section_item_title">
                    <h2>Regular</h2>
                  </div>

                  <div className="main_facilities_name_container">

                    <div id="facilities_box_1" className="facilities_name_container">
                      <h2>
                        <FaWifi />
                      </h2>
                      <p>Wi-Fi</p>
                    </div>

                    <div id="facilities_box_2" className="facilities_name_container">
                      <h2>
                        <BiSolidParking />
                      </h2>
                      <p>Parking space</p>
                    </div>

                    <div id="facilities_box_3" className="facilities_name_container">
                      <h2>
                        <MdOutlineLocalLaundryService />
                      </h2>
                      <p>Laundry</p>
                    </div>

                    <div id="facilities_box_4" className="facilities_name_container">
                      <h2>
                        <GoLightBulb />
                      </h2>
                      <p>24/7 Light</p>
                    </div>

                    <div id="facilities_box_5" className="facilities_name_container">
                      <h2>
                        <IoFastFood />
                      </h2>
                      <p>Breakfast</p>
                    </div>

                  </div>

                </div>

                <div className="facilities_section_item_container">
                  <div className="facilities_section_item_title">
                    <h2>Suite</h2>
                  </div>
                </div>

                <div className="facilities_section_item_container">
                  <div className="facilities_section_item_title">
                    <h2>VIP</h2>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Facilities;
