import Project from "../Project";
import { CommuterStudentImage } from "../../../../assets/ProjectImages";
import React from "react";

const CommuterStudent = () => {
  return (
    <Project
      title="Skule Commuter Students 22-23 Website"
      alt="Commuter Students"
      skills="React.js • Redux • CSS3"
      image={CommuterStudentImage}
      link="https://commuter.skule.ca/"
      github="https://github.com/skim1601/CommuterStudent"
      setup={[
        "git clone https://github.com/skim1601/CommuterStudent.git",
        "npm install",
        "npm start",
      ]}
    >
      I had the privilege of contributing to the official website of the Skule
      Commuter Student Directorship within the University of Toronto Engineering
      Society. Collaborating with another webmaster, I improved my skills in Git
      workflows.
      <br />
      <br />
      The Skule Commuter Students website, like this portfolio, is designed
      responsively for a range of devices, from mobile phones to wide monitors.
      We utilized Redux for managing the global state of the side navigation
      bar. Engaging with the Director and fellow team members was invaluable, as
      we incorporated their input to enhance the website. <br />
      <br />
    </Project>
  );
};

export default CommuterStudent;
