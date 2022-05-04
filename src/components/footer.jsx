import React from "react";
import { Column, FooterLink, Heading } from "./FooterStyles";
import LogoWhite from "../resources/Coverking logo white.png";
import "../styles/footer.css";
import facebookIcon from "../resources/facebook icon.png";
import instagramIcon from "../resources/instagram.png";
import twitterIcon from "../resources/twitter.png";
import youtubeIcon from "../resources/youtube.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="footer-container">
      <Column>
        <Heading>
          <img src={LogoWhite} />
        </Heading>
      </Column>
      <Column>
        <Heading>NEED HELP?</Heading>
        <FooterLink href="#">Installation Videos</FooterLink>
        <FooterLink href="#">Help Center</FooterLink>
        <FooterLink href="#">Contact Support</FooterLink>
        <FooterLink href="#">FAQs</FooterLink>
      </Column>
      <Column>
        <Heading>ORDERS</Heading>
        <FooterLink href="#">Track My Order</FooterLink>
        <FooterLink href="#">Current Lead Times</FooterLink>
        <FooterLink href="#">Warranty & Returns</FooterLink>
      </Column>
      <Column>
        <Heading>RESOURCES & MORE</Heading>
        <FooterLink href="#">Customer Reviews</FooterLink>
        <FooterLink href="#">Free Material Swatches</FooterLink>
        <FooterLink href="#">Dealer Portal</FooterLink>
        <FooterLink href="#">View Print Catalog</FooterLink>
        <FooterLink href="#">Real Customer Photos</FooterLink>
        <FooterLink href="#">About Us</FooterLink>
        <FooterLink href="#">Become A Dealer </FooterLink>
      </Column>
      <Column>
        <Heading>SUBSCRIBE TO OUR NEWSLETTER</Heading>
        <FooterLink href="#">
          Subscribe for the latest news and exclusive offers!
        </FooterLink>
        <div id="emailInputWrapper">
          <input
            className="emailBar"
            type="text"
            placeholder="Enter your email"
          />
          <div>
            <FontAwesomeIcon
              icon={faArrowRight}
              style={{ marginRight: "10px" }}
            />
          </div>
        </div>

        <div className="social-icons-container">
          <FooterLink href="#">
            <p>
              <img className="socialIcons" src={facebookIcon} />
            </p>
          </FooterLink>
          <FooterLink href="#">
            <p>
              <img className="socialIcons" src={instagramIcon} />
            </p>
          </FooterLink>
          <FooterLink href="#">
            <p>
              <img className="socialIcons" src={twitterIcon} />
            </p>
          </FooterLink>
          <FooterLink href="#">
            <p>
              <img className="socialIcons" src={youtubeIcon} />
            </p>
          </FooterLink>
        </div>
      </Column>
    </div>
  );
};
export default Footer;
