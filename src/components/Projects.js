import React from "react";
import Project1 from "./Project1";
import Project2 from "./Project2";
import Project3 from "./Project3";
import MiniProjects from "./MiniProjects";

export default function Projects() {
  return (
    <div className="section-projects" id="projects">
      <div className="projects-container">
        <div className="project-title">
          <h2>Projects..!!</h2>
          <span>
            Below you can see my projects done over the years.
          </span>
        </div>
        <Project1 />
        <Project2 />
        <Project3 />
        <div className="project-title mini">
          <h3>Where have I studied..??</h3>
          <span>
            Currently, I am studying in the top university within the country,<i><span className="red"> FAST-NUCES</span></i>   ;
            <br />            with a degree in <span className="red"><i> Computer Science</i></span>.
            <br /> I will be graduating within a month.
          </span>
        </div>
        <div className="project-title mini">
          <h3>Leadership Roles..??</h3>
          <ul>
          <li>Event Management Co-Head <span className="red">PROCOM</span>  in 2023. </li>
          <li>Event Management Co-Head <span className="red">devDay</span> in 2022.</li>
          </ul>
        </div>

        {/* <MiniProjects /> */}
      </div>
    </div>
  );
}
