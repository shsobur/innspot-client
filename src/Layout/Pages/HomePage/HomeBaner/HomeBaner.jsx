import "./HomeBaner.css";

const HomeBaner = () => {
  return (
    <>
      <div className="main_container">
        <div className="main_baner_outer_container">
          <div className="main_baner_inner_container">

            <div className="main_baner_content_container">

              {/* __Baner right side content__ */}
              <div className="baner_left_contect_container">
                <h1>Paradise View</h1>
                <h2>Hotel for every moment rich in emotion</h2>
                <p>Every moment feels like the first time in paradise view</p>
                <button>Book Now</button>
              </div>

              {/* __Baner left side content__ */}
              <div className="baner_right_contect_container">
                <img src="https://i.ibb.co.com/6DXQcjj/sasha-kaunas-x-Ea-Aoiz-NFV8-unsplash.jpg" />
              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default HomeBaner;
