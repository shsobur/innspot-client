import "./Footer.css";
import logoImg from "../../../assets/logo/transparency_logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="main_container">
        <div className="main_footer_outer_container">
          <div className="main_footer_inner_container">
            <div className="main_footer_contant_container">

              <div className="footer_main_title_container">
                <div className="footer_logo_title_container">
                  <img src={logoImg} alt="logo" />
                  <h2>NNSOPT</h2>
                </div>
                <p>
                  The service at the Hotel Monteleone was exceptional. There was
                  absolutely no issue that was not addressed timely and with
                  satisfactory results. We were particulary impressed with how
                  the hotel staff anticipated our needs (periodically coming by
                  the Board Room to check with us)
                </p>
              </div>

              <div className="footer_info_container">
                <div className="footer_info_inner_content_container">
                  <h3>Quick links</h3>
                  <p>Room booking</p>
                  <p>My booking</p>
                  <p>About Us</p>
                  <p>Contact Us</p>
                </div>

                <div className="footer_info_inner_content_container">
                  <h3>Company</h3>
                  <p>Privacy policy</p>
                  <p>Refund policy</p>
                  <p>F.A.Q</p>
                  <p>About</p>
                </div>

                <div className="footer_info_inner_content_container">
                  <h3>Social media</h3>
                  <p>Facebook</p>
                  <p>Twitter</p>
                  <p>Instagram</p>
                  <p>Linkedin</p>
                </div>
              </div>

              <div className="footer_newslist_container">
                <div className="footer_info_inner_content_container">
                  <h3>Newsletter</h3>
                  <p>
                    Kindly subscribe to our newsletter to get latest deals on
                    our rooms and vacation discount.
                  </p>
                  <div className="footer_sub_input_container">
                    <input type="text" placeholder="Enter your email" />
                    <button>Subscribe</button>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="footer_copy_right_container">
            <div>© Copyright Medih {currentYear} All Right Reserved.</div>
            <div>
              Terms Of Use <span className="pl-4 pr-4">|</span> Privacy Policy
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Footer;
