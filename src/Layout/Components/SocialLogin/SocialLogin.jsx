import { FcGoogle } from "react-icons/fc";
import "./SocialLogin.css";
import { FaGithub } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <>
      <div className="main_social_outer_container">

        <button className="social_login_btn">
          <h3>
            <FcGoogle />
          </h3>
          <h2>Login With Google</h2>
        </button>

        <button className="social_login_btn">
          <h3>
            <FaGithub />
          </h3>
          <h2>Login With Github</h2>
        </button>

      </div>
    </>
  );
};

export default SocialLogin;