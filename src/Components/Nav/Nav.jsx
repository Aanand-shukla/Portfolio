import { FaHome } from "react-icons/fa";
import { AiOutlineProject } from "react-icons/ai";
import { SiAboutdotme } from "react-icons/si";
import { IoIosContact } from "react-icons/io";
import { HiOutlineBookOpen } from "react-icons/hi";
import "./nav.css";
import { useState } from "react";
const Nav = () => {
  const [activeNav, setActiveNav] = useState("");
  return (
    <div className="nav">
      <div className="navbar">
        <a
          onClick={() => {
            setActiveNav("#");
          }}
          className={activeNav === "#" ? "active" : ""}
          href="#"
        >
          <FaHome />
        </a>
        <a
          onClick={() => {
            setActiveNav("#about");
          }}
          className={activeNav === "#about" ? "active" : ""}
          href="#about"
        >
          <SiAboutdotme />
        </a>
        <a
          href="#experience"
          onClick={() => {
            setActiveNav("#experience");
          }}
          className={activeNav === "#experience" ? "active" : ""}
        >
          <HiOutlineBookOpen />
        </a>
        <a
          href="#contact"
          onClick={() => {
            setActiveNav("#contact");
          }}
          className={activeNav === "#contact" ? "active" : ""}
        >
          <IoIosContact />
        </a>

        <a
          href="#projects"
          onClick={() => {
            setActiveNav("#Projects");
          }}
          className={activeNav === "#Projects" ? "active" : ""}
        >
          <AiOutlineProject />
        </a>
      </div>
    </div>
  );
};

export default Nav;
