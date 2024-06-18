import React from "react";
import PropTypes from "prop-types";
import Clock from "../../../API/Clock";
import "./Hero.scss";
import { Icon } from "@iconify/react";

const Title = () => {
  return <h1 id="home">&#x1F464;&nbsp;&nbsp;SEAN KIM</h1>;
};

const Description = () => {
  return (
    <div className="about-me-description">
      <h4 style={{ color: "rgb(91, 58, 255)" }}>
        <Icon icon="material-symbols:location-on" color="rgb(91, 58, 255)" />
        &nbsp;University of Toronto, Canada
      </h4>
      <h5>
        <Icon icon="ic:round-access-time-filled" />
        &nbsp;
        <Clock />
      </h5>
      <p>
        {" "}
        I am an undergraduate Computer Engineering Student at the University of
        Toronto, also pursuing minors in Artificial Intelligence and Robotics.{" "}
        <br />
        <br />
        I am currently working as a Software Engineer Intern at Mozilla on
        Firefox Networking (Necko) Team. I have previously worked as a research
        intern at iQua Research Group in Summer 2023. I have lead various
        student teams in academic, hackathon, and professional environments to
        develop a variety of software and applications across different levels.
        I am passionate about software development, distributed systems,
        computer networks, and computer architecture. <br />
        <br />
        This website sort of serves as an archive where I can revisit past
        projects and experiences. I built this with React a few years ago, hope
        you enjoy the design!
      </p>
    </div>
  );
};

const Wrapper = (props) => {
  return <div className="about-me">{props.children}</div>;
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

const Hero = () => {
  return (
    <Wrapper>
      <Title />
      <Description />
      <br />
      <br />
      <br />
      <a
        className="my-button"
        href="https://seankimblog.notion.site/55e4c6fcf4054efd8b953edb9b3789c2?v=efb626db622e4d6a890e80ab3d624e94"
        style={{
          padding: "min(1rem, 3vw)",
          textDecoration: "none",
          marginTop: "6vh",
          marginBottom: "8vh",
        }}
      >
        Personal Blog
      </a>
    </Wrapper>
  );
};

export default Hero;
