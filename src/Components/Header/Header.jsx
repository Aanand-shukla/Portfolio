import CTA from "./CTA";
import "./header.css";
import { Image } from "../../Index";
import HeaderIcon from "./HeaderIcon";
const Header = () => {
  return (
    <div className="header" id="#">
      {/* <div className="line2"></div>
      <div className="line"></div> */}
      <div className="nameDetails">
        <h4>Hello I'm</h4>
        <h1>Aanand Shukla</h1>
        <h5>Frontend Developer</h5>
      </div>
      <CTA />
      <div className="allMid">
        <HeaderIcon />
        <img src={Image} alt="image not found" />
        <a className="scroll" href="#footer">
          Scrollbar
        </a>
      </div>
    </div>
  );
};

export default Header;
