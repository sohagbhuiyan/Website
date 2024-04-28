import React from "react";
import "./skills.css";
import html from "../../assets/html.jpg";
import css from "../../assets/css.webp";
import JS from "../../assets/js.png";
import re from "../../assets/re.png";
const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">
        {" "}
        I am a skilled and passionate web developer with experience in creating
        visually appealing and user-friendly websites. I have a strong
        understanding of design and a keen eye for detail. I am proficient in
        HTML, CSS, Tailwind, JavaScript and React, as well as design software
        such as Adobe Photoshop and Illustrator and Figma.
      </span>
      <div className="skillsbars">
        <div className="skillbar">
          <img src={re} alt="" className="skillbarImg" />
          <div className="skillbarText">
            <h2>React JS</h2>
            <p>This is demo text, you can write or edit here</p>
          </div>
        </div>
        <div className="skillbar">
          <img src={JS} alt="" className="skillbarImg" />
          <div className="skillbarText">
            <h2>JavaScript</h2>
            <p>This is demo text, you can write or edit here</p>
          </div>
        </div>
        <div className="skillbar">
          <img src={css} alt="" className="skillbarImg" />
          <div className="skillbarText">
            <h2>CSS/ Tailwind</h2>
            <p>This is demo text, you can write or edit here</p>
          </div>
        </div>
        <div className="skillbar">
          <img src={html} alt="html" className="skillbarImg" />
          <div className="skillbarText">
            <h2>HTML</h2>
            <p>This is demo text, you can write or edit here</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
