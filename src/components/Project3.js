import React, { useState } from "react";
import page3 from "../ImagesAndStyles/img/page3.png";
import htmlIco from "../ImagesAndStyles/img/html.png";
import cssIco from "../ImagesAndStyles/img/css.png";
import jsIco from "../ImagesAndStyles/img/js.png";
import bootIco from "../ImagesAndStyles/img/bootstrap.png";
import reactIco from "../ImagesAndStyles/img/react.png";
import threeIco from "../ImagesAndStyles/img/three.png";
import gitIco from "../ImagesAndStyles/img/githubIco.png";
import liveIco from "../ImagesAndStyles/img/live.png";
import firebaseIco from "../ImagesAndStyles/img/firebase.png";
import pr1 from "../ImagesAndStyles/img/pr1.jpeg"

export default function Project3() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [boot, setBoot] = useState("");
  const [react, setReact] = useState("");
  const [three, setThree] = useState("");
  const [firebase, setFirebase] = useState("");

  const handleMouseEnter = (e) => {
    if (e.target.id == "HTML") {
      setHtml(true);
    } else if (e.target.id == "CSS") {
      setCss(true);
    } else if (e.target.id == "JavaScript") {
      setJs(true);
    } else if (e.target.id == "Bootstrap") {
      setBoot(true);
    } else if (e.target.id == "React") {
      setReact(true);
    } else if (e.target.id == "Three.js") {
      setThree(true);
    } else if (e.target.id == "Firebase") {
      setFirebase(true);
    }
  };
  const handleMouseLeave = () => {
    setHtml();
    setCss();
    setJs();
    setBoot();
    setReact();
    setThree();
    setFirebase();
  };
  return (
    <div className="project-box">
      <div className="left-container">
        <img src={pr1} className="img-project3 image" />
      </div>
      <div className="right-container">
        <h1>VIBE ZONE</h1>
        <div className="description">
        "VIBE ZONE" lets folks make their own musical playlist by adding videos to the existing or by making a 
        new playlist.<br/> People can share their playlists with all other user on an appliaction.
        People can also rate the playlist of others if they like them.<br/>  An appliaction will show the result 
        of search made by user, in descending order of most rated playlists.
        <br/>An application will also recommend playlist based on their previous search and also
        allow user to continue watch the playlist from where they left previously. 
          <div className="tech-box">
            <div
              className="single-box"
              id="React"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img src={reactIco} className="tech-ico1" alt="html icon" />
              <span>{react ? "React" : ""}</span>
            </div>
            <div
              className="single-box"
              id="CSS"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img src={cssIco} className="tech-ico2" alt="html icon" />
              <span>{css ? "CSS" : ""}</span>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
