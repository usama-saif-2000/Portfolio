import React from "react";
// import bee from "../public/img/bee.png";
import image from "../ImagesAndStyles/img/coding.png";

export default function AboutMe() {
  return (
    <div className="section-about" id="aboutme">
      <div className="aboutme-container">
        <img src={image} className="graphic" alt="3D graphic" />
        <div className="description block">
          <h2>About <span className="red_excl">me..!!</span></h2>
          <div className="text">
          Skilled Front-End Developer with expertise in React.js and Next.js. I excel at building dynamic and user-focused web applications that load quickly and adapt to different devices. My work with Next.js helps create websites that rank well in search engines and deliver a smooth user experience. I'm passionate about designing intuitive and visually appealing interfaces that keep users engaged.
            <br />

          </div>
        </div>
      </div>
    </div>
  );
}
