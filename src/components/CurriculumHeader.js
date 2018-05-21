import React from 'react';
// https://github.com/react-component/progress <--- circular progress bar
import { Circle } from 'rc-progress';

import '../styles/curriculumHeader.css';

import iconExternalLink from '../icons/ExternalLinkIcon.png';
import iconExpectedGrad from '../icons/ExpectedGraduationIcon.png';
import iconAddTopic from '../icons/AddTopicIcon.png';

const CurriculumHeader = (props) => {
  const { curriculumID, headerInfo } = props;

  const {
    name, link, totalSubjects, completed, expectedGraduation,
  } = headerInfo;

  const curriculumProgressBar = (
    <Circle
      className="curriculumProgress"
      percent="10"
      strokeWidth="16"
      trailWidth="16"
      strokeColor="#DD4C4F"
    />
  );

  return (
    <div className="curriculumHeader">
      <div className="curriculumHeaderLHS">
        <div className="curriculumTitle">{name}</div>
        <a href={link}>
          <img className="curriculumLink" src={iconExternalLink} alt="External link icon" />
        </a>
      </div>
      <div className="curriculumHeaderRHS">
        <div className="expectedGradDiv">
          <div className="expectedGradYear">2018</div>
          <div className="expectedGradMonth">Jun</div>
          <div className="expectedGradDay">28</div>
          <img className="iconExpectedGrad" src={iconExpectedGrad} alt="Expected graduation icon" />
          <div className="expectedGradLbl"> Projected Graduation</div>
        </div>
        <div className="curriculumProgressDiv">
          {curriculumProgressBar}
          <div className="curriculumProgressLbl"> 2/29 </div>
        </div>
        <div className="headerDivider" />
        <div className="addTopicDiv">
          <img className="addTopicIcon" src={iconAddTopic} alt="Add topic icon" />
          <button className="addTopicBtn"/>
          <div className="addTopicLbl">Add Topic</div>
        </div>
      </div>
    </div>
  );
};

export default CurriculumHeader;
