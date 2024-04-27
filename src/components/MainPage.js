import React, { useState } from "react";
import Navbar from "./Navbar";
import hiIco from "../ImagesAndStyles/img/hi.png";
// import localizationIco from "../ImagesAndStyles/img/place.png";
import lndIco from "../ImagesAndStyles/img/linkedinIco.png";
import gitIco from "../ImagesAndStyles/img/githubIco.png";
import htmlIco from "../ImagesAndStyles/img/html.png";
import cssIco from "../ImagesAndStyles/img/css.png";
import jsIco from "../ImagesAndStyles/img/js.png";
import bootIco from "../ImagesAndStyles/img/bootstrap.png";
import reactIco from "../ImagesAndStyles/img/react.png";
import nextico from "../ImagesAndStyles/img/nextjs.svg";
import angularIco from "../ImagesAndStyles/img/angular.png";
import usama from "../ImagesAndStyles/img/usama.jpeg";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function MainPage() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [boot, setBoot] = useState("");
  const [react, setReact] = useState("");
  const [next, setNext] = useState("");
  const [angular, setAngular] = useState("");

  const handleMouseEnter = (e) => {
    if (e.target.id == "HTML") {
      setHtml(true);
    } else if (e.target.id == "Next") {
      setNext(true);
    } else if (e.target.id == "CSS") {
      setCss(true);
    } else if (e.target.id == "JavaScript") {
      setJs(true);
    } else if (e.target.id == "Bootstrap") {
      setBoot(true);
    } else if (e.target.id == "React") {
      setReact(true);
    } else if (e.target.id == "Angular") {
      setAngular(true);
    }
  };
  const handleMouseLeave = () => {
    setHtml();
    setCss();
    setJs();
    setBoot();
    setReact();
    setAngular();
    setNext();
  };
  return (
    <div className="section-main" id="home">
      <Navbar />
      <div className="main-page-container">
        <div className="left-container">
          <span className="title">NEXT JS / React JS Developer</span>
          <img src={hiIco} className="hello-ico" alt="hello icon" />
          <div className="description">
            Hi, I'm Usama Saif. A passionate Front-end NEXT/React Developer..
          </div>
          <a
            href="https://www.linkedin.com/in/usama-saif-967842198/"
            target="_blank"
          >
            <img src={lndIco} className="social-ico" alt="linkedin icon" />
          </a>
          <a href="https://github.com/usama-saif-2000" target="_blank">
            <img src={gitIco} className="social-ico" alt="github icon" />
          </a>
          {/* <a href="https://drive.google.com/file/d/1WKD70XU7jUoA9_va7oAgdVu5U9G_8n2S/view?usp=sharing" target="_blank"> */}

          <a
            href="https://drive.google.com/file/d/1LV2Mw6YSWD_mx_P8UIi2IUGEoememEEg/view?usp=drive_link"
            target="_blank"
          >
            <button className="button_resume">Resume</button>
          </a>
          <div className="description">
            Tech Stack:
            <span className="hover-text">(Hover on items to know more)</span>
          </div>
          <div className="tech-stack-box">
            <div
              className="tech-stack-single-box"
              id="Next"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img src={nextico} className="tech-ico2" alt="next icon" />
              <span>{next ? "Next JS" : ""}</span>
            </div>
            <div
              className="tech-stack-single-box"
              id="React"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img src={reactIco} className="tech-ico2" alt="react icon" />
              <span>{react ? "React.js" : ""}</span>
            </div>
            <div
              className="tech-stack-single-box"
              id="HTML"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img src={htmlIco} className="tech-ico1" alt="html icon" />
              <span>{html ? "HTML" : ""}</span>
            </div>
            <div
              className="tech-stack-single-box"
              id="CSS"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img src={cssIco} className="tech-ico1" alt="css icon" />
              <span>{css ? "CSS" : ""}</span>
            </div>
            <div
              className="tech-stack-single-box"
              id="JavaScript"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img src={jsIco} className="tech-ico1" alt="js icon" />
              <span>{js ? "JavaScript" : ""}</span>
            </div>
            <div
              className="tech-stack-single-box"
              id="Bootstrap"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img src={bootIco} className="tech-ico2" alt="bootstrap icon" />
              <span>{boot ? "Bootstrap" : ""}</span>
            </div>
            <div
              className="tech-stack-single-box"
              id="Angular"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img src={angularIco} className="tech-ico1" alt="angular icon" />
              <span>{angular ? "Angular" : ""}</span>
            </div>
          </div>
        </div>
        <div className="right-container">
          <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={(3, 2, 1)} />
            <Sphere args={[1, 100, 200]} scale={2.2}>
              <MeshDistortMaterial
                color="red"
                attach="material"
                distort={0.5}
                speed={2}
              />
            </Sphere>
          </Canvas>
          <img src={usama} className="avatar" alt="avatar" />
        </div>
      </div>
    </div>
  );
}
