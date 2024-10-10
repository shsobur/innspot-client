import { IoSearch } from "react-icons/io5";
import "./RoomFilter.css";
import { FaRegCalendarAlt, FaUserFriends } from "react-icons/fa";
import { useState } from "react";

const RoomFilter = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="main_container">
        <div className="filter_section_outer_container">
          <div className="filter_section_inner_container">
            <div className="filter_main_outer_container">
              <div className="filter_search_container">
                <h3>
                  <IoSearch />
                </h3>
                <input type="text" name="search" placeholder="Search" />
              </div>

              <div className="filter_check_in-out_container">
                <div className="check_in_container">
                  <h3>
                    <FaRegCalendarAlt />
                  </h3>
                  <input type="text" name="checkin" placeholder="Check in" />
                </div>

                <div className="check_out_container">
                  <input type="text" name="checkout" placeholder="Checkout" />
                </div>
              </div>

              <div className="filter_optinn_container">
                <div className="guest-selector">

                  <button className="guest-button" onClick={toggleDropdown}>
                    <span className="guest-icon"><FaUserFriends /></span>{" "}
                    Stor By
                    <span className="arrow">▼</span>
                  </button>

                  {isOpen && (
                    <div className="guest-dropdown">
                      <label>Choose</label>
                      <select>
                        <option value="1">Default</option>
                        <option value="2">High to low</option>
                        <option value="3">Low to high</option>
                      </select>
                    </div>
                  )}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoomFilter;
