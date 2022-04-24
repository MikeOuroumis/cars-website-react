import React from "react";
import { Column, FooterLink, Heading } from "./FooterStyles";
import LogoWhite from "../resources/Coverking logo white.png";
import "../styles/footer.css";
import facebookIcon from "../resources/facebook icon.png";
import instagramIcon from "../resources/instagram.png";
import twitterIcon from "../resources/twitter.png";
import youtubeIcon from "../resources/youtube.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <Column>
        <Heading>
          <img src={LogoWhite} />
        </Heading>
      </Column>
      <Column>
        <Heading>About Us</Heading>
        <FooterLink href="#">Aim</FooterLink>
        <FooterLink href="#">Vision</FooterLink>
        <FooterLink href="#">Testimonials</FooterLink>
      </Column>
      <Column>
        <Heading>Services</Heading>
        <FooterLink href="#">Writing</FooterLink>
        <FooterLink href="#">Internships</FooterLink>
        <FooterLink href="#">Coding</FooterLink>
        <FooterLink href="#">Teaching</FooterLink>
      </Column>
      <Column>
        <Heading>Contact Us</Heading>
        <FooterLink href="#">Uttar Pradesh</FooterLink>
        <FooterLink href="#">Ahemdabad</FooterLink>
        <FooterLink href="#">Indore</FooterLink>
        <FooterLink href="#">Mumbai</FooterLink>
      </Column>
      <Column>
        <Heading>SUBSCRIBE TO OUR NEWSLETTER</Heading>
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
