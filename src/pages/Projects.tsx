import { useState } from "react";
import "./Projects.css";

import project1 from "../assets/images/portfolio.png";
import project2 from "../assets/images/bio.png";
import project3 from "../assets/images/calculadoraFlutter.png";

const projectList = [
  { name: "Portfolio Website", image: project1 },
  { name: "Biology Website", image: project2 },
  { name: "Calculator App", image: project3 },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectList.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projectList.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentProject = projectList[currentIndex];

  return (
    <section className="projects" id="projects">
      <h2>PROJECTS</h2>
      <div className="projects-container">
        <button className="arrow left" onClick={handlePrev}>
          ←
        </button>
        <div className="slider">
          <h3 className="project-title">{currentProject.name}</h3>
          <img
            src={currentProject.image}
            alt={currentProject.name}
            className={`project-image-small ${
              currentProject.name === "Calculator App" ? "vertical-image" : ""
            }`}
          />
        </div>
        <button className="arrow right" onClick={handleNext}>
          →
        </button>
      </div>
    </section>
  );
};

export default Projects;
