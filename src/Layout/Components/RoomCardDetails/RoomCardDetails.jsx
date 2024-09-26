import "./RoomCardDetails.css";
import { CgPin } from "react-icons/cg";
import { useLoaderData } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import logoImg from "../../../assets/logo/transparency_logo.png";

const RoomCardDetails = () => {
  const roomInfo = useLoaderData();
  console.log(roomInfo);

  return (
    <>
      <div className="main_container">
        <div className="main_card_details_outer_container">
          <div className="main_card_details_inner_container">

            <div className="main_details_container">

              <div className="details_top_header_container">

                <div className="details_top_logo_and_title_container">
                  <img src={logoImg} alt="logo" />

                  <div className="details_top_location_outer_container">
                    <h2>Grand Canyon, Arzions, USA</h2>
                    <div className="details_top_location_inner_container">
                      <h3>
                        <CgPin />
                      </h3>
                      <p>
                        Cocnmino country, Grand canyon cillage, Arizona, USA
                      </p>
                    </div>
                  </div>
                </div>

                <div className="details_top_reating_container">
                  <h3>
                    <Rating style={{ maxWidth: 150 }} value={roomInfo.rating} readOnly />
                  </h3>
                  <h2>{roomInfo.rating}</h2>
                </div>

              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default RoomCardDetails;
