import React from "react";
import { Icon } from "@iconify/react";

const DegreeTable = () => {
  const firstYear = {
    "Fall 2021": [
      {
        "APS100H1: Orientation to Engineering":
          "https://engineering.calendar.utoronto.ca/course/aps100h1",
      },
      {
        "APS110H1: Engineering Chemistry & Materials Science":
          "https://engineering.calendar.utoronto.ca/course/aps110h1",
      },
      {
        "APS111H1: Engineering Strategies & Practice I":
          "https://engineering.calendar.utoronto.ca/course/aps111h1",
      },
      {
        "CIV100H1: Mechanics":
          "https://engineering.calendar.utoronto.ca/course/civ100h1",
      },
      {
        "MAT186H1: Calculus I":
          "https://engineering.calendar.utoronto.ca/course/mat186h1",
      },
      {
        "MAT188H1: Linear Algebra":
          "https://engineering.calendar.utoronto.ca/course/mat188h1",
      },
    ],
    "Winter 2022": [
      {
        "APS105H1: Computer Fundamentals":
          "https://engineering.calendar.utoronto.ca/course/aps105h1",
      },
      {
        "APS112H1: Engineering Strategies & Practice II":
          "https://engineering.calendar.utoronto.ca/course/aps112h1",
      },
      {
        "ECE110H1: Electrical Fundamentals":
          "https://engineering.calendar.utoronto.ca/course/ece110h1",
      },
      {
        "ECE191H1: Intro to Electrical & Computer Engineering":
          "https://engineering.calendar.utoronto.ca/course/ece191h1",
      },
      {
        "MAT187H1: Calculus II":
          "https://engineering.calendar.utoronto.ca/course/mat187h1",
      },
      {
        "MIE100H1: Dynamics":
          "https://engineering.calendar.utoronto.ca/course/mie100h1",
      },
    ],
  };

  const secondYear = {
    "Fall 2022": [
      {
        "ECE201H1: Electrical and Computer Engineering Seminar":
          "https://engineering.calendar.utoronto.ca/course/ece201h1",
      },
      {
        "ECE212H1: Circuit Analysis":
          "https://engineering.calendar.utoronto.ca/course/ece212h1",
      },
      {
        "ECE241H1: Digital Systems":
          "https://engineering.calendar.utoronto.ca/course/ece241h1",
      },
      {
        "ECE244H1: Programming Fundamentals":
          "https://engineering.calendar.utoronto.ca/course/ece244h1",
      },
      {
        "MAT290H1: Advanced Engineering Mathematics":
          "https://engineering.calendar.utoronto.ca/course/mat290h1",
      },
      {
        "MAT291H1: Calculus III":
          "https://engineering.calendar.utoronto.ca/course/mat291h1",
      },
    ],
    "Winter 2023": [
      {
        "ECE216H1: Signals and Systems":
          "https://engineering.calendar.utoronto.ca/course/ece216h1",
      },
      {
        "ECE221H1: Electric and Magnetic Fields":
          "https://engineering.calendar.utoronto.ca/course/ece221h1",
      },
      {
        "ECE231H1: Introductory Electronics":
          "https://engineering.calendar.utoronto.ca/course/ece231h1",
      },
      {
        "ECE243H1: Computer Organization":
          "https://engineering.calendar.utoronto.ca/course/ece243h1",
      },
      {
        "ECE297H1: Software Design and Communication":
          "https://engineering.calendar.utoronto.ca/course/ece297h1",
      },
    ],
  };

  const thirdYear = {
    "Fall 2023": [
      {
        "ECE302H1: Probability and Applications":
          "https://engineering.calendar.utoronto.ca/course/ece302h1",
      },
      {
        "ECE344H1: Operating Systems":
          "https://engineering.calendar.utoronto.ca/course/ece344h1",
      },
      {
        "ECE345H1: Algorithms and Data Structures":
          "https://engineering.calendar.utoronto.ca/course/ece345h1",
      },
      {
        "ECE361H1: Computer Networks I":
          "https://engineering.calendar.utoronto.ca/course/ece361h1",
      },
      {
        "ECE472H1: Engineering Economic Analysis & Entrepreneurship":
          "https://engineering.calendar.utoronto.ca/course/ece472h1",
      },
    ],
    "Winter/Summer 2024": [
      {
        "APS360H1: Applied Fundamentals of Deep Learning":
          "https://engineering.calendar.utoronto.ca/course/aps360h1",
      },
      {
        "AST121H1: Origin and Evolution of the Universe":
          "https://artsci.calendar.utoronto.ca/course/ast121h1",
      },
      {
        "CSC300H1: Computers and Society":
          "https://artsci.calendar.utoronto.ca/course/csc300h1",
      },
      {
        "CSC343H1: Introduction to Databases":
          "https://artsci.calendar.utoronto.ca/course/csc343h1",
      },
      {
        "ECE311H1: Introduction to Control Systems":
          "https://engineering.calendar.utoronto.ca/course/ece311h1",
      },
      {
        "ENT200H1: Introduction to Entrepreneurship":
          "https://artsci.calendar.utoronto.ca/course/ent200h1",
      },
    ],
  };

  const mapObject = (obj) => {
    const semesters = Object.keys(obj);
    const rows = [];
    const maxLength = Math.max(...Object.values(obj).map((sem) => sem.length));

    for (let i = 0; i < maxLength; i++) {
      rows.push(
        <tr key={i}>
          <td>
            {obj[semesters[0]][i] ? (
              <a href={Object.values(obj[semesters[0]][i])}>
                {Object.keys(obj[semesters[0]][i])}
              </a>
            ) : null}
          </td>
          <td>
            {obj[semesters[1]][i] ? (
              <a href={Object.values(obj[semesters[1]][i])}>
                {Object.keys(obj[semesters[1]][i])}
              </a>
            ) : null}
          </td>
        </tr>,
      );
    }
    return rows;
  };

  return (
    <details>
      <summary className="degree_table__title">
        <Icon icon="fluent-mdl2:publish-course" width="1.5rem" />
        &nbsp;Courses
      </summary>
      <span>
        <p className="degree_table__header">
          <Icon icon="material-symbols:filter-3" width="1.5rem" />
          &nbsp;Third Year
        </p>
        <span className="degree_table__contents">
          <table>
            <thead>
              <tr>
                <th>Fall 2023</th>
                <th>Winter/Summer 2024</th>
              </tr>
            </thead>
            <tbody>{mapObject(thirdYear)}</tbody>
          </table>
        </span>
        <p className="degree_table__header">
          <Icon icon="material-symbols:filter-2" width="1.5rem" />
          &nbsp;Second Year
        </p>
        <span className="degree_table__contents">
          <table>
            <thead>
              <tr>
                <th>Fall 2022</th>
                <th>Winter 2023</th>
              </tr>
            </thead>
            <tbody>{mapObject(secondYear)}</tbody>
          </table>
        </span>
        <p className="degree_table__header">
          <Icon icon="material-symbols:filter-1" width="1.5rem" />
          &nbsp;First Year
        </p>
        <span className="degree_table__contents">
          <table>
            <thead>
              <tr>
                <th>Fall 2021</th>
                <th>Winter 2022</th>
              </tr>
            </thead>
            <tbody>{mapObject(firstYear)}</tbody>
          </table>
        </span>
      </span>
    </details>
  );
};

export default DegreeTable;
