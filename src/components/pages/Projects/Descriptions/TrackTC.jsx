import Project from "../Project";
import { TrackTCImage } from '../../../../assets/ProjectImages';

const TrackTC = () => {
    return (
        <Project
            title="TrackTC - Submission for NewHacks 2022"
            alt="TrackTC"
            skills="React.js • Express.js • Node.js • MongoDB • TTC API"
            image={TrackTCImage}
            link="https://devpost.com/software/tracktc"
            github="https://github.com/skim1601/Enhanced-TrackTC"
        >
       Commuter students may not always be aware of potential delays or cancellations on the TTC due to various reasons. For some individuals, it can be difficult to regularly check media and the internet for updates, which can result in missing important closure information. Our team has personally experienced being late to exams or other important events due to unexpected commute interruptions. <br/><br/>

To help address this issue, we have developed a service that provides real-time and planned TTC delays, accessed through the TTC API. Simply enter your email and select your preferred buses and trains, and we will send you updates on their delay status every 12 hours.<br/><br/>

I primarily focused on the frontend of this project, including creating a Figma prototype and enhancing the website's responsive design. I also worked on implementing GET and POST requests using the Django-React stack and the Django REST Framework. Overall, it was a valuable learning experience and we are pleased to present this service at NewHacks 2022.<br/><br/>
        
Please be advised that in December 2022, we made updates to the backend and database for our software. The previous version, Version 1.0, utilized Django as the backend, while the current version, Version 2.0, now utilizes Express.js. <br/><br/> 
        </Project>
    );
}

export default TrackTC;