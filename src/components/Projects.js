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
          <span>Below you can see my projects done over the years.</span>
        </div>
        <Project1 />
        <Project2 />
        <Project3 />

        <div className="project-title mini">
          <h3>EXPERIENCE..??</h3>
          <h4 className="orange-text experience-title">
            <span className="underline">OVRLOD Pvt Ltd.</span>{" "}
            <span className="experience-duration">(JUNE 2023 - PRESENT)</span>
          </h4>
          <span>
            At OVRLOD Pvt. Ltd., a pioneering IT powerhouse experiencing rapid
            growth, I play a key role in driving cutting-edge front-end
            development initiatives. Leveraging my expertise in
            <i>
              <span className="red"> React and Next JS</span>
            </i>{" "}
            , I lead the creation of immersive and user-centric experiences that
            propel the company's position as an industry leader. My work has a
            significant impact on shaping OVRLOD's digital presence within the
            ever-evolving landscape.
          </span>
        </div>

        <div className="project-title mini">
          <h3>Where have I studied..??</h3>
          <span>
            I graduated from{" "}
            <i>
              <span className="red"> FAST-NUCES</span>
            </i>{" "}
            with a Bachelor's degree in{" "}
            <span className="red">
              <i> Computer Science</i>
            </span>
            , completing a four-year program. The education I received at
            FAST-NUCES equipped me with comprehensive knowledge and skills in
            various areas of computer science
            {/* <br /> I will be graduating within a month. */}
          </span>
        </div>

        <div className="project-title mini">
          <h3>Leadership Roles..??</h3>
          <ul>
            <li>
              Event Management Co-Head <span className="red">PROCOM</span> in
              2023.{" "}
            </li>
            <li>
              Event Management Co-Head <span className="red">devDay</span> in
              2022.
            </li>
          </ul>
        </div>

        {/* <MiniProjects /> */}
      </div>
    </div>
  );
}
