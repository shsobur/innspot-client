import { FaDumbbell, FaWifi } from "react-icons/fa";
import "./Facilities.css";
import { BiSolidParking } from "react-icons/bi";
import { MdOutlineLocalLaundryService } from "react-icons/md";
import { GoLightBulb } from "react-icons/go";
import { IoFastFood, IoGameController } from "react-icons/io5";
import { FaPersonSwimming } from "react-icons/fa6";

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
                
                <div id="section_item_container_1" className="facilities_section_item_container">
                  <div className="facilities_section_item_title">
                    <h2>Regular</h2>
                  </div>

                  <div id="facilities_name_container_1" className="main_facilities_name_container">
                    <div className="facilities_name_container">
                      <h2>
                        <FaWifi />
                      </h2>
                      <p>Wi-Fi</p>
                    </div>

                    <div className="facilities_name_container">
                      <h2>
                        <BiSolidParking />
                      </h2>
                      <p>Parking space</p>
                    </div>

                    <div className="facilities_name_container">
                      <h2>
                        <MdOutlineLocalLaundryService />
                      </h2>
                      <p>Laundry</p>
                    </div>

                    <div className="facilities_name_container">
                      <h2>
                        <GoLightBulb />
                      </h2>
                      <p>24/7 Light</p>
                    </div>

                    <div className="facilities_name_container">
                      <h2>
                        <IoFastFood />
                      </h2>
                      <p>Breakfast</p>
                    </div>
                  </div>
                </div>

                <div id="section_item_container_2" className="facilities_section_item_container">
                  <div className="facilities_section_item_title">
                    <h2>Suite</h2>
                  </div>

                  <div
                    id="facilities_name_container_2"
                    className="main_facilities_name_container"
                  >
                    <div className="facilities_name_container">
                      <h2>
                        <FaDumbbell />
                      </h2>
                      <p>*Gym</p>
                    </div>

                    <div className="facilities_name_container">
                      <h2>
                        <FaPersonSwimming />
                      </h2>
                      <p>*Swimming Pool</p>
                    </div>

                    <div className="facilities_name_container">
                      <h2>
                        <FaWifi />
                      </h2>
                      <p>Wi-Fi</p>
                    </div>

                    <div className="facilities_name_container">
                      <h2>
                        <BiSolidParking />
                      </h2>
                      <p>Parking space</p>
                    </div>

                    <div className="facilities_name_container">
                      <h2>
                        <MdOutlineLocalLaundryService />
                      </h2>
                      <p>Laundry</p>
                    </div>

                    <div className="facilities_name_container">
                      <h2>
                        <GoLightBulb />
                      </h2>
                      <p>24/7 Light</p>
                    </div>

                    <div className="facilities_name_container">
                      <h2>
                        <IoFastFood />
                      </h2>
                      <p>Breakfast</p>
                    </div>
                  </div>
                </div>

                <div id="section_item_container_3" className="facilities_section_item_container">
                  <div className="facilities_section_item_title">
                    <h2>VIP</h2>
                  </div>

                  <div id="facilities_name_container_3" className="main_facilities_name_container">
                    <div className="facilities_name_container">
                      <h2>
                        <IoGameController />
                      </h2>
                      <p>**Game center</p>
                    </div>

                    <div className="facilities_name_container">
                      <h2>
                        <FaDumbbell />
                      </h2>
                      <p>*Gym</p>
                    </div>

                    <div className="facilities_name_container">
                      <h2>
                        <FaPersonSwimming />
                      </h2>
                      <p>*Swimming Pool</p>
                    </div>

                    <div className="facilities_name_container">
                      <h2>
                        <FaWifi />
                      </h2>
                      <p>Wi-Fi</p>
                    </div>

                    <div className="facilities_name_container">
                      <h2>
                        <BiSolidParking />
                      </h2>
                      <p>Parking space</p>
                    </div>

                    <div className="facilities_name_container">
                      <h2>
                        <MdOutlineLocalLaundryService />
                      </h2>
                      <p>Laundry</p>
                    </div>

                    <div className="facilities_name_container">
                      <h2>
                        <GoLightBulb />
                      </h2>
                      <p>24/7 Light</p>
                    </div>

                    <div className="facilities_name_container">
                      <h2>
                        <IoFastFood />
                      </h2>
                      <p>Breakfast</p>
                    </div>
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