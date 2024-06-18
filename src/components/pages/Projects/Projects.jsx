import React, { useState } from "react";
import { scroller } from "react-scroll";
import Select from "react-select";
import CommuterStudent from "./Descriptions/CommuterStudent";
import UofTHacksSite from "./Descriptions/UofTHacksSite";
import TrackTC from "./Descriptions/TrackTC";
import Aazami from "./Descriptions/Aazami";
import CareerTrace from "./Descriptions/CareerTrace";
import Mapper from "./Descriptions/Mapper";
import Processor from "./Descriptions/Processor";
import TextConferencing from "./Descriptions/TextConferencing";
import Divider from "../../../assets/Divider/Divider";
import Handwriting from "./Descriptions/Handwriting";
import "./Projects.scss";

const ProjectsTitle = () => {
  return (
    <div id="project" className="projects__title">
      <h1>&#128194;&nbsp;&nbsp;PROJECT</h1>
    </div>
  );
};

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: "white",
    border: "3px solid rgb(91, 58, 255)",
    borderRadius: "30px",
    boxShadow: state.isFocused ? "0 0 0 3px rgb(91, 58, 255)" : null,
    "&:hover": {
      border: "3px solid rgb(91, 58, 255)",
    },
    fontFamily: "Poppins",
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: "20px 20px 20px 20px",
    border: "3px solid rgb(91, 58, 255)",
  }),
  menuList: (provided) => ({
    ...provided,
    paddingTop: 0,
    paddingBottom: 0,
    fontFamily: "Poppins",
    borderRadius: "20px 20px 20px 20px",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? "rgb(91, 58, 255)"
      : state.isFocused
        ? "rgba(91, 58, 255, 0.1)"
        : "white",
    color: state.isSelected ? "white" : "rgb(91, 58, 255)",
    "&:hover": {
      backgroundColor: "rgba(91, 58, 255, 0.1)",
    },
    fontFamily: "Poppins",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "rgb(91, 58, 255)",
    fontFamily: "Poppins",
  }),
  valueContainer: (provided) => ({
    ...provided,
    color: "rgb(91, 58, 255)",
    padding: "0.5rem",
    maxWidth: "50%",
  }),
};

const Projects = () => {
  const [selectedSection, setSelectedSection] = useState(null);

  const projects = [
    { name: "CareerTrace", section: "Software", component: <CareerTrace /> },
    {
      name: "Handwriting",
      section: "Machine Learning",
      component: <Handwriting />,
    },
    { name: "Mapper", section: "Software", component: <Mapper /> },
    { name: "Aazami", section: "Machine Learning", component: <Aazami /> },
    { name: "Aazami", section: "Hardware", component: <Aazami /> },
    {
      name: "TextConferencing",
      section: "Networks",
      component: <TextConferencing />,
    },
    { name: "TrackTC", section: "Software", component: <TrackTC /> },
    { name: "Processor", section: "Hardware", component: <Processor /> },
    {
      name: "UofTHacksSite",
      section: "Software",
      component: <UofTHacksSite />,
    },
    {
      name: "CommuterStudent",
      section: "Software",
      component: <CommuterStudent />,
    },
  ];

  const handleSelectChange = (selectedOption) => {
    setSelectedSection(selectedOption.value);
    scroller.scrollTo("project", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  const SectionSelect = () => {
    return (
      <div style={{ margin: "0 auto 5rem auto", width: "min(75%, 40rem)" }}>
        <Select
          options={[
            { value: null, label: "All sections" },
            { value: "Software", label: "Software" },
            { value: "Networks", label: "Networks" },
            { value: "Machine Learning", label: "Machine Learning" },
            { value: "Hardware", label: "Hardware" },
          ]}
          styles={customStyles}
          defaultValue={{
            value: selectedSection,
            label: selectedSection ? selectedSection : "All sections",
          }}
          onChange={handleSelectChange}
        />
      </div>
    );
  };

  const uniqueProjects = projects.reduce((acc, curr) => {
    if (
      selectedSection != null ||
      !acc.some((project) => project.name === curr.name)
    ) {
      acc.push(curr);
    }
    return acc;
  }, []);

  const filteredProjects = uniqueProjects.filter((project) => {
    return selectedSection ? project.section === selectedSection : true;
  });

  return (
    <>
      <ProjectsTitle />
      <SectionSelect />
      {filteredProjects.map((project) => (
        <React.Fragment key={project.name}>
          {project.component}
          <Divider />
        </React.Fragment>
      ))}
    </>
  );
};

export default Projects;
