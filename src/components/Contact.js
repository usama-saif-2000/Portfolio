import React, { useRef, useState } from "react";
import Map from "./Map";
import mailIco from "../ImagesAndStyles/img/mailIco.png";
import call from "../ImagesAndStyles/img/call.png"
import githubIcon from "../ImagesAndStyles/img/githubIco.png"
import linkedinIcon from "../ImagesAndStyles/img/linkedinIco.png"

export default function Contact() {
  const form = useRef();
  const [sucess, setSucess] = useState(false);
  const [error, setError] = useState(false);


  return (
    <div className="section-contact" id="contact">
      <div className="contact-container">
        <div className="left-container">
          <h1>Contact me:</h1>

          <div className="contact">
            <span className="inline">
              <img src={mailIco} />
              <a
                href="osamabinsaif2000@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                osamabinsaif2000@gmail.com
              </a>
            </span>
            <br/>
            <span className="inline">
              <img src={call} />
              
                03360259497
            </span>

            <h2>Profile:</h2>
            <span><a href="https://github.com/usama-saif-2000" target="_blank" className="pointer"><img src={githubIcon}></img></a><a href="https://www.linkedin.com/in/usama-saif-967842198/" target="_blank" className="pointer"><img src={linkedinIcon}></img></a></span>
            
          </div>
        </div>

        <div className="right-container">
          {/* <Map /> */}
        </div>
      </div>
    </div>
  );
}
