import "../AuthenticationStyle/AuthenticationStyle.css";
import logoImg from "../../../../assets/logo/transparency_logo.png";
import { Link } from "react-router-dom";
import SocialLogin from "../../../Components/SocialLogin/SocialLogin";

const SignUp = () => {
  return (
    <>
      <div className="main_container">
        <div className="main_authentication_container">

          <div 
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1000"
            className="main_authentication_form_outer_container">

            <div className="authentaction_form_logo_container">
              <img src={logoImg} alt="logo" />
              <h3>Sing Up</h3>
            </div>

            <div>
              <SocialLogin></SocialLogin>
            </div>

            <div className="main_form_container">
              <form>

                <div className="form_single_input_container">
                  <input type="text" name="name" placeholder="Enter Your Name"/>
                </div>

                <div className="form_single_input_container">
                  <input type="email" name="email" placeholder="Enter Your Email"/>
                </div>

                <div className="form_single_input_container">
                  <input type="password" name="password" placeholder="Enter Your Password"/>
                </div>

                <div className="form_sub_button">
                  <input type="submit" value="Sign Up" />
                </div>

                <div className="page_link_container">
                  <p>Alrady have an account? go <Link to="/signin"><span>sign in</span></Link> now</p>
                </div>

              </form>
            </div>

          </div>

        </div>
      </div>
    </>
  );
};

export default SignUp;