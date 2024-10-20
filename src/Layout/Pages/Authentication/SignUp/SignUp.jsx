import "../AuthenticationStyle/AuthenticationStyle.css";
import logoImg from "../../../../assets/logo/transparency_logo.png";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../../../Components/SocialLogin/SocialLogin";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Components/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import ScrollToTop from "@/Layout/Components/ScrollToTop/ScrollToTop";

const SignUp = () => {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const { signUpUser, updateUserProfile, loading } = useContext(AuthContext);

  const handleShowPassword = () => {
    setShowPass(!showPass);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const name = data.name;
    const photo = data.photo;
    const email = data.email;
    const password = data.password;

    // console.log(name, photo, email, password);

    signUpUser(email, password)
      .then(() => {
        // console.log(result.user);

        // Updateing user profile__
        updateUserProfile(name, photo)
          .then(() => {
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
              title: "Signed up successfully",
            });

            navigate("/");
          })
          .catch((error) => {
            console.log("Error to Update profile", error);
          });
      })
      .catch((error) => {
        console.log("Singed Up error:", error);
      });
  };

  return (
    <>
      <ScrollToTop></ScrollToTop>

      <div className="main_container">
        <div className="main_authentication_container">
          <div
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1000"
            className="main_authentication_form_outer_container"
          >
            <div className="authentaction_form_logo_container">
              <img src={logoImg} alt="logo" />
              <h3>Sing Up</h3>
            </div>

            <div>
              <SocialLogin></SocialLogin>
            </div>

            <div className="main_form_container">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form_single_input_container">
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Your Name"
                    {...register("name", { required: true })}
                  />

                  {/* handleing name field error */}
                  <div>
                    {errors.name && (
                      <span className="text-sm text-red-500">
                        Name field is required
                      </span>
                    )}
                  </div>
                </div>

                <div className="form_single_input_container">
                  <input
                    type="text"
                    name="photo"
                    placeholder="Photo URL (Optional)"
                    {...register("photo", { required: false })}
                  />
                </div>

                <div className="form_single_input_container">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                    {...register("email", { required: true })}
                  />

                  {/* handleing email field error */}
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
                      {...register("password", {
                        required: true,
                        minLength: 8,
                        pattern: /^(?=.*[a-z])(?=.*[A-Z]).*$/,
                      })}
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

                  {/* handleing password field error__ */}
                  <div>
                    {errors.password?.type === "required" && (
                      <span className="text-sm text-red-500">
                        Password is required
                      </span>
                    )}
                  </div>

                  <div>
                    {errors.password?.type === "minLength" && (
                      <span className="text-sm text-red-500">
                        Password should be at least 8 characters
                      </span>
                    )}
                  </div>

                  <div>
                    {errors.password?.type === "pattern" && (
                      <span className="text-sm text-red-500">
                        Use at least one uppercase(A-Z) and lowercase(a-z)
                        character
                      </span>
                    )}
                  </div>
                  {/* handleing password field error__end */}
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

                <div className="page_link_container">
                  <p>
                    Alrady have an account? go{" "}
                    <Link to="/signin">
                      <span>sign in</span>
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

export default SignUp;
