import React from 'react';
import PropTypes from 'prop-types';

import SubjectModel from '../model/SubjectModel.json';

const subjectData = SubjectModel;


const Subject = (props) => {
  const { subjectID } = props;
  const subject = subjectData[subjectID];

  return (
    <div>
      { subject.name }
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
