import React from 'react';
import PropTypes from 'prop-types';

import SubjectModel from '../model/SubjectModel.json';
import '../styles/subject.css';

const subjectData = SubjectModel;


const Subject = (props) => {
  const { subjectID } = props;
  const subject = subjectData[subjectID];

  return (
    <div className="subject">
      <button className="tickBtn" />
      <div className="subjectName">{ subject.name }</div>
      <div className="subjectTagsDiv">Testing tags</div>
    </div>
  );
};

Subject.propTypes = {
  subjectID: PropTypes.string,
};
Subject.defaultProps = {
  subjectID: '',
};

export default Subject;
