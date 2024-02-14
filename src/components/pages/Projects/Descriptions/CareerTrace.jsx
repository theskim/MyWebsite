import Project from "../Project";
import { CareerTraceImage } from "../../../../assets/ProjectImages";

const CareerTrace = () => {
    return (
        <Project
            title="CareerTrace - Job Application Tracker"
            alt="CareerTrace"
            skills="React.js • Node.js • Express.js • MongoDB • Google OAuth 2.0 • AWS"
            image={CareerTraceImage}
            link="https://careertrace.ca/"
            github="https://github.com/michaelzixizhou/CareerTrace"
        >   
            CareerTrace is a powerful platform designed to streamline and enhance your job application process. With CareerTrace, you can effortlessly track your job applications, monitor application stages, and keep a record of important interview dates. It empowers you to make data-driven decisions by providing valuable insights into your application success rates. <br/><br/>
            CareerTrace offers a range of key features to streamline your job application process. You can effortlessly manage and organize your applications, maintaining a comprehensive record of applied companies, dates, and application statuses. Stay on top of your interview schedule by recording important interview dates and times, ensuring you never miss an opportunity. Additionally, CareerTrace provides valuable performance metrics, such as offer and interview rates, enabling you to measure your progress and make informed decisions to enhance your job application strategy. Through statistical data, the platform helps you identify areas for improvement, guiding you towards a more successful job search.<br/><br/>
            CareerTrace boasts a responsive design, ensuring a seamless user experience on both mobile and desktop devices. To enhance security and convenience, it offers Google Authentication for secure access. Behind the scenes, CareerTrace is powered by the classic MERN stack, which includes MongoDB for data storage, Express.js for backend server development, React and styled-components for a dynamic front-end, Node.js for server-side logic, and Google OAuth 2.0 for added security. CareerTrace is hosted on AWS, ensuring reliability and scalability for users. <br/><br/>
            I primarily focused on connecting React and Express, handling incoming requests effectively. My work predominantly centered around enhancing React components, but I also made modifications to the Express backend to establish a seamless connection.
        </Project>
    );
}

export default CareerTrace;