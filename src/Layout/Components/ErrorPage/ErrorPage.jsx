import { Link } from "react-router-dom";
import "./ErrorPage.css";

const ErrorPage = () => {
  return (
    <>
      <div className="main_container">
        <div className="main_error_page_outer_container">
          <div className="error_bg_image">
            <div>
              <Link to="/">
                <span>Go Home</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
