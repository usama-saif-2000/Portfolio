import React from "react";
// import bee from "../public/img/bee.png";
import image from "../ImagesAndStyles/img/coding.png";

export default function AboutMe() {
  return (
    <div className="section-about" id="aboutme">
      <div className="aboutme-container">
        <img src={image} className="graphic" alt="3D graphic" />
        <div className="description">
          <h2>About <span className="red_excl">me..!!</span></h2>
          <div className="text">
            I am a front-end developer and I am skilled in REACT framework as well as HTML, CSS and JavaScript. I am looking to gain valuable experience in an IT environment and expand my competence. I am ready for challenges and eager to learn and acquire new skills.
            <br />
            <br /> I will be graduating from the FAST-NUCES
             with a degree in Computer Science within a month.
            <br />
            
          </div>
        </div>
      </div>
    </div>
  );
}
