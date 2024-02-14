import React from 'react';
import Divider from '../../../assets/Divider/Divider';
import './Experiences.scss';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Icon } from '@iconify/react';

const Title = () => {
  return (
      <div id='experiences' className='experiences__title-box'>
          <h1>&#128188;&nbsp;&nbsp;EXPERIENCES</h1>
      </div>
  );
};

const Experiences = () => {
  return (
    <>
      <Title />
      <VerticalTimeline lineColor="#000">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: '#fff',
            color: '#000',
            border: '1px solid #000',
            fontFamily: 'Poppins',
            boxShadow: '0 0 10px 4px rgba(0, 0, 3, 0.2)',
          }}
          contentArrowStyle={{ borderRight: '9px solid #000' }}
          date="May 2023 - Sep 2023"
          iconStyle={{
            background: 'linear-gradient(90deg, rgb(85, 159, 255), rgb(91, 58, 255))',
            color: '#000',
            border: '1px solid #000',
            boxShadow: 'none',
          }}
        >
          <h3 className="vertical-timeline-element-title">
            <Icon icon="material-symbols:work" width="1.5rem" /> iQua Research Group - University of Toronto • 
            Distributed Network Research Intern
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Toronto, ON</h4>
          <p>
            - Extended the functionality of over 10 distinct Rust test functions to scrutinize TCP connection behavior and metric transmission via network packets.<br/>
            - Developed a Max-min fairness routing algorithm for bandwidth optimization and analytics dashboard for tracking bandwidth allocation.<br/>
            - Implemented a WebSocket server with Node.js, integrated with a Rust-based dataplane.<br/>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: '#fff',
            color: '#000',
            border: '1px solid #000',
            fontFamily: 'Poppins',
            boxShadow: '0 0 10px 4px rgba(0, 0, 3, 0.2)',
          }}
          contentArrowStyle={{ borderRight: '9px solid #000' }}
          date="Sep 2022 - Present"
          iconStyle={{
            background: 'linear-gradient(90deg, rgb(85, 159, 255), rgb(91, 58, 255))',
            color: '#000',
            border: '1px solid #000',
            boxShadow: 'none',
          }}
        >
          <h3 className="vertical-timeline-element-title">
            <Icon icon="material-symbols:work" width="1.5rem" /> UofTHacks • Web Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Toronto, ON (Remote)</h4>
          <p>
            - Developed the Main Website and Dashboard for UofTHacks X, benefiting over 600+ hackathon participants with seamless access.<br/>
            - Current working on the Dashboard for UofTHacks 11.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
      <br /><br />
      <Divider />
    </>
  );
};

export default Experiences;