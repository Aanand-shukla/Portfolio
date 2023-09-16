import myImage from "../../assets/Mei2.png";
import { FaAward } from "react-icons/fa";
import { VscFolder } from "react-icons/vsc";
import { RiContactsFill } from "react-icons/ri";
import "./about.css";
const About = () => {
  return (
    <div className="about" id="about">
      <div className="aboutHeadings">
        <h6>Get to know</h6>
        <h2>About Me</h2>
      </div>
      <div className="aboutContainer">
        <div className="myImage">
          <div className="styleImg">
            <img src={myImage} alt="image not found" />
          </div>
        </div>
        <div className="descriptionAboutMe">
          <div className="allAboutBox">
            <div className="aboutBox">
              <a href="#academics">
                <div className="aboutBox_desc">
                  <h5>
                    <FaAward />
                  </h5>
                  <h5>Academics</h5>
                  <h5>Post Graduation</h5>
                </div>
              </a>
              <a href="#projects">
                <div className="aboutBox_desc">
                  <h5>
                    <VscFolder />
                  </h5>
                  <h5>Projects</h5>
                  <h5>5 +</h5>
                </div>
              </a>
              <a href="#contact">
                <div className="aboutBox_desc">
                  <h5>
                    <RiContactsFill />
                  </h5>
                  <h5>Contact</h5>
                  <h5>chat with us</h5>
                </div>
              </a>
            </div>
            <div className="writeAboutMe">
              <h6>
                I am Aanand Shukla, a passionate and dedicated Frontend
                Developer with a deep-rooted expertise in HTML, CSS, JavaScript,
                and React. My journey in the world of web development has been
                an exciting exploration of transforming abstract design concepts
                into tangible, user-centric web applications. I specialize
                creating engaging user interfaces. I have experience developing
                modular React components, implementing interactive features. I
                enjoy collaborating with cross-functional teams and solving
                challenges to deliver high-quality projects
              </h6>
            </div>
            <div className="aboutButton">
              <a href="#contact" className="btn">
                Let's Talk
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
