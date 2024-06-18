import Tools from "./Tools/ToolSection";
import Divider from "../../../assets/Divider/Divider";
import "./Skills.scss";
import React from "react";

const Title = () => {
  return (
    <div id="skills" className="skills__title">
      <h1>&#128104;&#8205;&#128187;&nbsp;&nbsp;SKILLS</h1>
    </div>
  );
};

const Skills = () => {
  return (
    <>
      <Title />
      <Divider />
      <Tools />
      <Divider />
    </>
  );
};

export default Skills;
