import Project from "../Project";
import { TextConferencingImage } from "../../../../assets/ProjectImages";
import React from "react";

const TextConferencing = () => {
  return (
    <Project
      title="TCP Text Conferencing Server & Client"
      alt="Text Conferencing"
      skills="C • Unix • TCP/IP • Socket Programming"
      image={TextConferencingImage}
      link="https://youtu.be/5Aqu36Bgceo"
    >
      A text conferencing server and client that allows multiple users to
      connect to a server and send messages to each other. The server is
      multi-threaded, allowing multiple clients to connect to it at the same
      time. The server also has a command line interface that allows the user to
      see the status of the server and the clients connected to it. The client
      has a command line interface that allows the user to connect to a server,
      send messages to other clients, and disconnect from the server. <br />
      <br />
    </Project>
  );
};

export default TextConferencing;
