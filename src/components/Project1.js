import React, { useState } from "react";
import cssIco from "../ImagesAndStyles/img/css.png";
import pr2_full from "../ImagesAndStyles/img/pr2_full.png";
import nextIco from "../ImagesAndStyles/img/nextjs.svg";
export default function Project2() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [next, setNext] = useState("");
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
    } else if (e.target.id == "Next") {
      setNext(true);
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
    setNext();
  };
  return (
    <div className="project-box">
      <div className="right-container">
        <h1>
          TH Book Store{" "}
          
        </h1>
        <p className="hover-image-project">
          ( Hover image to view full image scroll )
          </p>
        <div className="description">
          "TH Book Store" is a comprehensive web application that offers a
          user-friendly interface for individuals to explore the available books
          at the store and reserve them. It features three separate portals for
          different user roles, including admin, manager, and user. As a user,
          you can easily browse through the list of available books and apply
          for a reservation. Meanwhile, managers have additional capabilities
          such as adding new books, removing old ones, and managing
          reservations. With the admin portal, you have the power to grant or
          revoke user access levels. For example, you can promote a user to
          become a manager or an admin or reduce their privileges to a regular
          user.
          <div className="tech-box">
            <div
              className="single-box"
              id="Next"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={nextIco}
                width={150}
                className="tech-ico1"
                alt="next icon"
              />
              <span>{next ? "Next JS" : ""}</span>
            </div>
            <div
              className="single-box"
              id="CSS"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img src={cssIco} className="tech-ico2" alt="css icon" />
              <span>{css ? "CSS" : ""}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="left-container pointer">
        <img src={pr2_full} className="img-project2" />
      </div>
    </div>
  );
}
