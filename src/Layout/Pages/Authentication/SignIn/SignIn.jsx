import { Link } from "react-router-dom";
import "../AuthenticationStyle/AuthenticationStyle.css";
import logoImg from "../../../../assets/logo/transparency_logo.png";
import SocialLogin from "../../../Components/SocialLogin/SocialLogin";
import { useForm } from "react-hook-form";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;

    console.log(email, password);
  }

  return (
    <>
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
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter Your Password"
                    {...register("password", { required: true })}
                  />
                  <div>
                    {errors.password && (
                      <span className="text-sm text-red-500">
                        Password field is required
                      </span>
                    )}
                  </div>
                </div>

                <div className="form_sub_button">
                  <input type="submit" value="Sign In" />
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
