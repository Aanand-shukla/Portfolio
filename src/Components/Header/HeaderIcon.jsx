import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { FaDribbble } from "react-icons/fa";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
const HeaderIcon = () => {
  return (
    <div className="headerIcons">
      <a href="https://www.linkedin.com/in/aanand-shukla/">
        <LinkedInIcon />
      </a>
      <a href="https://twitter.com/Shuklagii">
        <TwitterIcon />
      </a>
      <a href="https://github.com/Aanand-shukla">
        <GitHubIcon />
      </a>
      <a href="https://iteducation245.blogspot.com/">
        <FaDribbble />
      </a>
    </div>
  );
};

export default HeaderIcon;
