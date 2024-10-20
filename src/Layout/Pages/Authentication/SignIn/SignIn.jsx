import { Link, useNavigate } from "react-router-dom";
import "../AuthenticationStyle/AuthenticationStyle.css";
import logoImg from "../../../../assets/logo/transparency_logo.png";
import SocialLogin from "../../../Components/SocialLogin/SocialLogin";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Components/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";
import ScrollToTop from "@/Layout/Components/ScrollToTop/ScrollToTop";

const SignIn = () => {
  const { signInUser, loading } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();

  const handleShowPassword = () => {
    setShowPass(!showPass);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;

    // console.log(email, password);

    signInUser(email, password)
      .then(() => {
        // console.log(result.user);

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

        navigate("/");
      })
      .catch((error) => {
        setError("Invalid! user or password. Try again");
        console.log("Sing in error: ", error);
      });
  };

  return (
    <>
    <ScrollToTop></ScrollToTop>

      <div className="main_container">
        <div className="main_authentication_container">
          <div
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="1000"
            className="main_authentication_form_outer_container"
          >
            <div className="authentaction_form_logo_container">
              <img src={logoImg} alt="logo" />
              <h3>Sing In</h3>
            </div>

            <div>
              <SocialLogin></SocialLogin>
            </div>

            <div className="main_form_container">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form_single_input_container">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                    {...register("email", { required: true })}
                  />
                  <div>
                    {errors.email && (
                      <span className="text-sm text-red-500">
                        Email field is required
                      </span>
                    )}
                  </div>
                </div>

                <div className="form_single_input_container">
                  <div id="password_show_icon_outer_container">
                    <input
                      type={showPass ? "text" : "password"}
                      name="password"
                      placeholder="Enter Your Password"
                      {...register("password", { required: true })}
                    />

                    <div
                      onClick={handleShowPassword}
                      id="password_show_icon_inner_container"
                    >
                      {showPass ? (
                        <p>
                          <IoEyeOutline />
                        </p>
                      ) : (
                        <p>
                          <FaRegEyeSlash />
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    {errors.password && (
                      <span className="text-sm text-red-500">
                        Password field is required
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  {loading ? (
                    <div className="bg-[#7c6a46] py-2 mt-6 text-white font-semibold rounded-lg text-center">
                      loading...
                      <button className="w-5 h-5 ml-3 border-4 border-dashed rounded-full animate-spin border-[#ffffff]"></button>
                    </div>
                  ) : (
                    <div className="form_sub_button">
                      <input type="submit" value="Sign Up" />
                    </div>
                  )}
                </div>

                <div className="text-red-600 pb-5">
                  <span>{error}</span>
                </div>

                <div className="page_link_container">
                  <p>
                    Alrady have an account? go{" "}
                    <Link to="/signup">
                      <span>sign up</span>
                    </Link>{" "}
                    now
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
