import "./Footer.css";
import { FaHandHoldingHeart } from "react-icons/fa";
import { useLocation } from "react-router-dom";

export const Footer=()=>{

     const { pathname } = useLocation();
   if (pathname === "/checkout") return null;

    return (
      <div id="footer-main-wrapper">
        <div id="footer-email-section-wrap">
          <div id="footer-email-section-get-started-title">Get started</div>
          <div id="footer-email-section-main-title">
            Enter your email address to get special discount on your inbox
          </div>
          <div id="footer-email-section-input-wrap">
            <input type="email" placeholder="Your email address" />
            <button>Send</button>
          </div>
        </div>

        <div id="footer-main-content-section-wrap">
          <div>
            <div id="footer-main-content-section-logo-wrap">
              <img
                src="/Navbar-img/partystore.png"
                alt=""
                id="footer-main-content-section-logo"
              />
            </div>
            <div className="footer-main-content-section01-text">
              Who are we ?
            </div>
            <div className="footer-main-content-section01-text">
              Testimonials
            </div>
            <div className="footer-main-content-section01-text">
              Partner Signup
            </div>
          </div>

          <div>
            <div className="footer-main-content-section-titles">Help</div>
            <div>FAQ’s</div>
            <div>Privacy Policy</div>
            <div>Return Policy</div>
            <div>Terms & Conditions</div>
          </div>

          <div>
            <div className="footer-main-content-section-titles">Categories</div>
            <div>Birthday Packages</div>
            <div>House theme parties packages</div>
            <div>Weddings & Reception packages</div>
            <div>Event Rental packages</div>
          </div>

          <div>
            <div className="footer-main-content-section-titles">Contact Us</div>
            <div>
              Address : Plot 22, Lane Number 1, VAHINI NAGAR, Sikh Village,
              Karkhana, Secunderabad, Telangana 500009
            </div>
            <div>Phone : 9963999829 / 9849163513</div>
          </div>
        </div>

        <div id="footer-bottom-section-wrap">
          <div id="footer-bottom-section-content-wrap">
            <div>@2023 Zinggalas</div>
            <div>
              Show us some love{" "}
              <span id="footer-bottom-section-content-heart-icon">
                <FaHandHoldingHeart />
              </span>
              on social media
            </div>
            <div id="footer-bottom-section-social-media-icons-wrap">
              <div className="footer-bottom-section-social-media-icons">
                <img src="/Footer-img/Facebook.png" alt="facebook" />
              </div>
              <div className="footer-bottom-section-social-media-icons">
                <img src="/Footer-img/Twitter.png" alt="twitter" />
              </div>
              <div className="footer-bottom-section-social-media-icons">
                <img src="/Footer-img/Instagram.png" alt="instagram" />
              </div>
              <div className="footer-bottom-section-social-media-icons">
                <img
                  src="/Footer-img/youtube.png"
                  alt="youtube"
                  id="footer-bottom-section-social-media-icons-youtube"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}