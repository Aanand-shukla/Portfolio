import "./footer.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { FaDribbble } from "react-icons/fa";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer_links">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#academics">Academics</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contacts"></a>
          </li>
        </ul>
      </div>

      <div className="footer_socials">
        <a href="https://www.linkedin.com/in/aanand-shukla/">
          <LinkedInIcon />
        </a>
        <a href="https://github.com/Aanand-shukla">
          <GitHubIcon />
        </a>
        <a href="https://twitter.com/Shuklagii">
          <TwitterIcon />
        </a>
        <a href="https://iteducation245.blogspot.com/">
          <FaDribbble />
        </a>
      </div>
      <div className="declaration">
        <small>&copy; Portfolio : Aanand Shukla all rights reserved</small>
      </div>
    </div>
  );
};

export default Footer;
