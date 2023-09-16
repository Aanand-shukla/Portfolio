import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
const Experience = () => {
  return (
    <div id="experience" className="experience">
      <div className="experienceDetails">
        <h5> What Skill I have</h5>
        <h2>My Experience </h2>
      </div>
      <div className="frntBack">
        <div className="frontendHeading">
          <h1>Frontend Development</h1>
          <div className="frontend">
            <article>
              <BsPatchCheckFill className="ri" />
              <h6>HTML</h6>
              <small className="text-light"> Experienced</small>
            </article>
            <article>
              <BsPatchCheckFill className="ri" />
              <h6>CSS</h6>
              <small className="text-light"> Experienced</small>
            </article>
            <article>
              <BsPatchCheckFill className="ri" />
              <h6>JavaScript</h6>
              <small className="text-light"> Experienced</small>
            </article>
            <article>
              <BsPatchCheckFill className="ri" />
              <h6>Bootstrap</h6>
              <small className="text-light">Intermediate</small>
            </article>
            <article>
              <BsPatchCheckFill className="ri" />
              <h6>Tailwind CSS</h6>
              <small className="text-light">Beginner</small>
            </article>
            <article>
              <BsPatchCheckFill className="ri" />
              <h6>React</h6>
              <small className="text-light">Intermediate</small>
            </article>
          </div>
        </div>

        <div className="backendHeading">
          <h1> Backend Development</h1>
          <div className="backend">
            <article>
              <BsPatchCheckFill className="ri" />
              <h6> C Language</h6>
              <small className="text-light">Intermediate</small>
            </article>
            <article>
              <BsPatchCheckFill className="ri" />
              <h6> C++ Language</h6>
              <small className="text-light">Intermediate</small>
            </article>
            <article>
              <BsPatchCheckFill className="ri" />
              <h6>Java</h6>
              <small className="text-light">Beginner</small>
            </article>
            <article>
              <BsPatchCheckFill className="ri" />
              <h6>Python</h6>
              <small className="text-light">Beginner</small>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
