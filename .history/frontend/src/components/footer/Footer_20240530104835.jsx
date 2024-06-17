import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <p>
            Ordering food delivery with Foodi is easy and can help get rid of
            your food craving quick. It doesn’t matter if you’re staying in a
            hotel, an Airbnb, or are just don’t want to leave the houses.
            Just choo make an order and get desired food for you.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="facebook logo" />
            <img src={assets.twitter_icon} alt="twitter logo" />
            <img src={assets.linkedin_icon} alt="linkedin logo" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-313-824-4589</li>
            <li>contact@foodi.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 &#169; Foodi.com All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
