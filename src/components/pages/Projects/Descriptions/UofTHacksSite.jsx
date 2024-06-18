import Project from "../Project";
import { UofTHacksSiteImage } from "../../../../assets/ProjectImages";
import React from "react";

const UofTHacksSite = () => {
  return (
    <Project
      title="UofTHacks X Site & Dashboard"
      alt="UofTHacks X"
      skills="React.js • Next.js • stitches.dev"
      image={UofTHacksSiteImage}
      link="https://uofthacks.com/"
      github="https://github.com/UofTHacks-Official/site-x"
    >
      This is the official website and dashboard for UofTHacks X, the annual
      hackathon hosted by the University of Toronto. Over 500+ students with a
      range of experience levels participated in the event. I was responsible
      for working on the main site and creating the sign-in page for applicants
      and authentication. In order to complete this task, I had to work closely
      with the backend team to ensure that the data from my page was properly
      validated.
      <br />
      <br />
    </Project>
  );
};

export default UofTHacksSite;
