import React, { useState } from "react";
import page1 from "../ImagesAndStyles/img/page1.png";
import cssIco from "../ImagesAndStyles/img/css.png";
import reactIco from "../ImagesAndStyles/img/react.png";
import nodeIcon from "../ImagesAndStyles/img/node.png";
import full_pr1 from "../ImagesAndStyles/img/full_pr1.png"
export default function Project1() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [boot, setBoot] = useState("");
  const [react, setReact] = useState("");
  const [node, setNode] = useState("");

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
    } else if (e.target.id == "node") {
      setNode(true);
    }
  };
  const handleMouseLeave = () => {
    setHtml();
    setCss();
    setJs();
    setBoot();
    setReact();
    setNode();
  };
  return (
    <div className="project-box">
      <div className="left-container pointer">
        <img src={full_pr1} className="img-project1" />
      </div>
      <div className="right-container">
        <h1>NPL Draft</h1>
        <div className="description">
          "NPL Draft" is an appliccation where I efficiently managed
          six teams and five distinct categories of players.
           Each category consists of a predetermined number of players.
           <br></br>For example, the first round includes the wicket-keeping category, with only one round since there are only six players to choose from. The draft picks for each round are stored in the application's database.
           <br></br>As the draft progresses, subsequent categories are selected,
            such as batsmen, which includes 18 players and is divided into three rounds. 
           Finally, the application displays the teams that have been created through the drafting process.
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
            <div
              className="single-box"
              id="node"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img src={nodeIcon} className="tech-ico2" alt="node icon" />
              <span>{node ? "Node JS" : ""}</span>
            </div>
          </div>
          </div>
      </div>
    </div>
  );
}
