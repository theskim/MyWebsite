import Project from "../Project";
import { MapperImage } from '../../../../assets/ProjectImages';

const Mapper = () => {
    return (
        <Project
            title="OTFMap - GIS Mapper"
            alt="OTFMap"
            skills="C++ (STL) • GTK • Glade • EZGL • OpenStreetMap API"
            link="https://youtu.be/OgRmhjl-Iy8"
            image={MapperImage}
        >
 
Over the course of four months, we broke down this project into four major milestones, each with its own specific objectives. <br/><br/>


The first milestone involved organizing vast amounts of data into structured formats, as well as utilizing and extending the OpenStreetMap API by developing useful functions that would be advantageous for subsequent phases. To achieve this, we created our database, using various STL structures such as maps, sets, vectors, and queues.<br/><br/>

The second milestone centered around the development of the map's frontend, which included streets, points of interest, subway mode, and bike mode, using a graphics library called EZGL, which depends on GTK 3 and Cairo.<br/><br/>

For the third milestone, we implemented pathfinding between two intersection points on the map using Djikstra and A* algorithms. We also exhibited the pathfinding in our GTK Mapper.<br/><br/>

In the final milestone, we tackled the Travelling Courier Problem, utilizing various heuristics such as Greedy, Multi-Start, and Hill-Climbing.  Our team's efforts paid off, as we finished 10th out of 91 teams, securing a spot in the top 10%.<br/><br/>

Our focus on the map was on eco-friendly GIS, with features that promoted public transit. Working on this Agile Software Development project was a remarkable experience that strengthened my skills in C++, Data Structures, and Algorithms.<br/><br/>

While I am unable to share the code due to academic integrity, I can provide it upon request. The demo video is available through link below. <br/><br/>
        </Project>
    );
}

export default Mapper;