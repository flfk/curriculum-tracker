import React from 'react';
import PropTypes from 'prop-types';

import SubjectModel from '../model/SubjectModel.json';
import '../styles/subject.css';

const subjectData = SubjectModel;

const SubjectTag = (props) => {
  const { subjectTag } = props;

  // add logic to retrieve icons from ../public and add to return

  return (
    <div className="subjectTag">
      {subjectTag}
    </div>
  );
};

const Subject = (props) => {
  const { subjectID } = props;
  const subject = subjectData[subjectID];

  const { type, duration, author } = subject;
  const subjectTags = [type, duration, author]
    .filter(elem => elem !== '')
    .map(elem => <SubjectTag key={elem} subjectTag={elem} />);

  return (
    <div className="subject">
      <button className="tickBtn" />
      <div className="subjectName">{ subject.name }</div>
      <div className="subjectTagsDiv">{ subjectTags }</div>
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
