import "./RoomFilter.css";
import PropTypes from 'prop-types';
import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { RiLineHeight } from "react-icons/ri";
import { FaRegCalendarAlt } from "react-icons/fa";

const RoomFilter = ({setSortValue, sortValue}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSortValue = (e) => {
    const { value } = e.target;
    setSortValue(value);
  }

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
                    <span className="guest-icon"><RiLineHeight /></span>{" "}
                    Stor By
                    <span className="arrow">▼</span>
                  </button>

                  {isOpen && (
                    <div className="guest-dropdown">
                      <label>Choose</label>
                      <select value={sortValue} onChange={handleSortValue}>
                        <option value={"des"} >High to low</option>
                        <option value={"asc"} >Low to high</option>
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

RoomFilter.propTypes = {
  sortValue: PropTypes.string,
  setSortValue: PropTypes.string
}

export default RoomFilter;
