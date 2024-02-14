import { UofTLogo } from "../../../assets/GeneralLogos";
import DegreeTable from "./DegreeTable";
import Divider from "../../../assets/Divider/Divider";
import "./Education.scss";
import { Icon } from '@iconify/react';

const Title = () => {
  return ( 
    <h1>
      &#x1F393;&nbsp;&nbsp;EDUCATION
    </h1>
  )
}

const Description = () => {
  return (
    <>
      <img src={UofTLogo} loading='lazy' alt=''/><br/>
      <p>
        University of Toronto<br/>
        Bachelor of Applied Science in Computer Engineering
      </p>
      <h2>
        2021 - Present (PEY CO-OP)
      </h2>
      <p>
        <Icon icon="mdi:certificate" width='1.3rem'/>&nbsp;Minor in <b>Artificial Intelligence Engineering</b><br/>
        <b><Icon icon="tabler:award" width='1.3rem'/>&nbsp;NSERC</b> Undergraduate Student Research Award<br/>
        <b><Icon icon="mdi:award" width='1.3rem'/>&nbsp;Dean's List</b> in All Semesters<br/>
        <Icon icon="carbon:skill-level-basic" width='1.3rem'/>&nbsp;Courses focused in <b>ML/AI</b>, <b>Software Engineering</b>, <b>Computer Networks</b>, and <b>Control</b>
      </p>
      <a className="my-button" href="https://discover.engineering.utoronto.ca/programs/engineering-programs/electrical-computer-engineering/" style={
        {padding:"min(1rem, 3vw)", textDecoration:"none", marginTop:"6vh", marginBottom:"8vh"}
      }>
        Learn More
      </a>
      <DegreeTable/>
    </>
  )
}

const Wrapper = ({ children }) => {
  return (
    <div id='education' className='school-information'>
      {children}
    </div>
  );
}

const Education = () => {
  return (
    <>
      <Wrapper>
        <Title/>
        <Description/>
      </Wrapper>
      <Divider/>
    </>
  );
}

export default Education;