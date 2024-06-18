import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import Modal from "./Modal";
import "./Section.scss";
import { Icon } from "@iconify/react";

const ProjectSample = ({
  image,
  title,
  alt,
  skills,
  description,
  link,
  github,
  children,
}) => {
  const [click, update] = useState(false);
  const ref = useRef(null);

  const scrollToElement = () =>
    ref.current?.scrollIntoView({ behavior: "auto" });

  return (
    <div className="section-wrapper">
      <div className="section-image-box">
        <img className="section-logo" src={image} loading="lazy" alt="" />
      </div>
      <div className="section-text-box">
        <h2 ref={ref}>
          <Icon icon="ant-design:project-filled" />
          &nbsp;{title}
        </h2>
        <div className="section-skills">
          <p>
            <b>
              <Icon
                icon="material-symbols:keyboard-previous-language"
                width="1.4rem"
              />
              &nbsp;Tech Stack:&nbsp;
            </b>
            {skills}
          </p>
        </div>
        <div className="section-image-box__mobile">
          <img className="section-logo" src={image} loading="lazy" alt="" />
          <br />
        </div>
        <button
          className="my-button"
          type="button"
          onClick={() => {
            setTimeout(() => {
              update(true);
            }, 250);
          }}
        >
          <p>View Description</p>
        </button>
        <div className="section-description">
          {click ? (
            <Modal
              update={update}
              scrollToElement={scrollToElement}
              title={title}
              alt={alt}
              image={image}
              skills={skills}
              description={description}
              link={link}
              github={github}
              children={children}
            />
          ) : (
            <>{scrollToElement()}</>
          )}
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

ProjectSample.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  skills: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string,
  github: PropTypes.string,
};

export default ProjectSample;
