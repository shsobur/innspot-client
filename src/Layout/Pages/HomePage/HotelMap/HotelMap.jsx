import "./HotelMap.css";
import { Map, ZoomControl } from "pigeon-maps";
import { Marker } from "pigeon-maps";

const HotelMap = () => {
  return (
    <>
      <div className="main_container">
        <div className="map_section_outer_container">
          <div className="map_section_inner_container">

            <div className="map_setcion_title">
              <h2>Map & Directions</h2>
              <p>
                Discover the Exact Location of Our Hotel and Plan Your Journey
                Effortlessly
              </p>
            </div>

            <div className="map_section_main_container">
              <div 
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="500" 
                  className="map_left_side_container">
                <div>
                  <Map
                    height="50vh"
                    defaultZoom={8}
                    metaWheelZoom={true}
                    defaultCenter={[22.687733477443565, 90.63040441917828]}
                  >
                    <ZoomControl />
                    <Marker width={50} anchor={[22.687733477443565, 90.63040441917828]} />
                  </Map>
                </div>
              </div>

              <div className="map_right_side_container">
                <h3>Explore Our Location_</h3>
                <p><b>Easily</b> find our hotel on the map below. Whether you’re planning your journey or curious about nearby attractions, use the interactive map to locate us and explore the surrounding area.<br/>You can place this description right above or beside your map. Let me know if you need help integrating it!<br/><br/><b>Discover</b> the convenience of our prime location with our interactive map below. Whether youre arriving by car, public transport, or on foot, our hotel is easily accessible. Explore nearby attractions, dining options, and entertainment venues to enhance your stay. Use the map to navigate the area, find parking, and plan your itinerary. Our friendly staff is always ready to assist you with recommendations and directions to make your visit unforgettable.
                Feel free to modify it to better fit your style or add any specific details relevant to your hotel!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HotelMap;
