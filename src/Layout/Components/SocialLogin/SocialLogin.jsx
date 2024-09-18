import { FcGoogle } from "react-icons/fc";
import "./SocialLogin.css";
import { FaGithub } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSigninUser } = useContext(AuthContext);
  const naviget = useNavigate();

  const handleGoogleSingIn = () => {
    googleSigninUser()
      .then((result) => {
        console.log(result.user);

        // Sweet Alert__
        const Toast = Swal.mixin({
          toast: true,
          position: "top",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        Toast.fire({
          icon: "success",
          title: "Signed in successfully",
        });

        naviget("/");
      })
      .catch((error) => {
        console.log("Google sing in error: ", error.message);
      });
  };

  return (
    <>
      <div className="main_social_outer_container">
        <button onClick={handleGoogleSingIn} className="social_login_btn">
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
