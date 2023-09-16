import { FaGraduationCap } from "react-icons/fa";
import { MdOutlineCastForEducation } from "react-icons/md";
import { AiOutlineCalendar } from "react-icons/ai";
import "./education.css";
const Education = () => {
  return (
    <div className="academics">
      <div className="academicHeading">
        <h2>Academics</h2>
      </div>
      <div id="academics" className="academicDetails">
        <div className="classes">
          <h4>
            <p>
              <FaGraduationCap />
            </p>
            Master of Computer Application
          </h4>
          <p>
            <AiOutlineCalendar /> 2021-2023
          </p>
          <h6>Computer Application</h6>
          <h5>Rakshapal Bahadur Management Institute Greater Noida</h5>
          <p>72%</p>
          <p>A.P.J Abdul Kalam technical University</p>
        </div>
        <div className="classes">
          <h4>
            <p>
              <FaGraduationCap />
            </p>
            Bachelor of Computer Application
          </h4>
          <p>
            <AiOutlineCalendar /> 2018-2021
          </p>
          <h6>Computer Application</h6>
          <h5>Rakshapal Bahadur Management Institute Greater Noida</h5>
          <p>71.2%</p>
          <p>Chaudhary Charan Singh University</p>
        </div>
        <div className="classes">
          <h4>
            <p>
              <MdOutlineCastForEducation />
            </p>
            Intermediate (12th)
          </h4>
          <p>
            <AiOutlineCalendar /> 2014-2016
          </p>
          <h6>Physics,Chemistry, Mathematics</h6>
          <h5>Bhawani Shankar Inter College Sadar Saray Noida</h5>
          <p>74.2%</p>
          <p>Uttar Pradesh Board</p>
        </div>
        <div className="classes">
          <h4>
            <p>
              <MdOutlineCastForEducation />
            </p>
            High School (10th)
          </h4>
          <p>
            <AiOutlineCalendar /> 2012-2014
          </p>
          <h6>MatheMatics</h6>
          <h5>Shaheed Bagat Singh Inter College Mohiyapur Noida</h5>
          <p>81.5%</p>
          <p>Uttar Pradesh Board</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
