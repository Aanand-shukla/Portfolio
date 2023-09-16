import "./header.css";
import { Resume } from "../../Index";
// import { NavLink } from "react-router-dom";
const CTA = () => {
  return (
    <div className="cta">
      <button className="btn">
        <a href={Resume} download>
          Download CV
        </a>
      </button>
      <button className="btn2">
        <a href="#contact">Let'S Talk</a>
      </button>
    </div>
  );
};

export default CTA;
