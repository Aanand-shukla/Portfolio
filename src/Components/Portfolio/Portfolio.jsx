import Project1 from "../../assets/Project1.png";
import Project2 from "../../assets/Project2.png";
import Project3 from "../../assets/Project3.png";
import Project4 from "../../assets/Project4.png";

const data = [
  {
    img: Project1,
    para: "Chat gpt3 Static",
    btn1: "Github",
    btn2: "Live Demo",
  },
  {
    img: Project3,
    para: "MovieZx",
    btn1: "Github",
    btn2: "Live Demo",
  },
  {
    img: Project4,
    para: "Music Player",
    btn1: "Github",
    btn2: "Live Demo",
  },
  {
    img: Project2,
    para: "Meal finder",
    btn1: "Github",
    btn2: "Live Demo",
  },
];
import "./portfolio.css";
const Portfolio = () => {
  return (
    <div className="portfolio" id="projects">
      <h2> Projects</h2>
      <div className="projects">
        {data.map((e, i) => {
          const { img, para, btn1, btn2 } = e;
          return (
            <div key={i} className="project">
              <img src={img} alt="" />
              <p>{para}</p>
              <div className="buttons">
                <a href="">
                  <button className="btn">{btn1}</button>
                </a>
                <a href="">
                  <button className="btn2">{btn2}</button>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
