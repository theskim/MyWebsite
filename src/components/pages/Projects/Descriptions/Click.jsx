import Project from "../Project";
import { ClickImage } from '../../../../assets/ProjectImages';

const Click = () => {
    return (
        <Project
            title="Click. - Web Game"
            alt="Click."
            skills="HTML5 • CSS3 • JavaScript • PHP • MySQL"
            image={ClickImage}
            github="https://github.com/skim1601/Click"
            project={true}
        >
     Click is an intuitive full-stack web game that simply requires you to click. The goal is to venture as far from the solar system as possible while tracking your progress on the leaderboard. <br/><br/>
        </Project>
    );
}

export default Click;