import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="main_container">
        <div className="main_footer_outer_container">
          <div className="main_footer_inner_container">

            <div className="main_footer_contant_container">

              <div className="footer_main_title_container">
                <div>
                  <img src="" alt="logo" />
                  <h2>NNSOPT</h2>
                </div>
                <p></p>
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

              <div className="footer_info_inner_content_container">
                <h3>Newsletter</h3>
                <p>Kindly subscribe to our newsletter to get
                  latest deals on our rooms and vacation
                  discount.
                </p>
                <div>
                  <input type="text" placeholder="Enter your email" />
                  <button>Subscribe</button>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;