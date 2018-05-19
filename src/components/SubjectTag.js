import React from 'react';
import PropTypes from 'prop-types';

import '../styles/subject.css';

import iconOnlineCourse from '../icons/IconScreen.png';
import iconDuration from '../icons/IconHourGlass.png';
import iconAuthor from '../icons/IconFeather.png';

const SubjectTag = (props) => {
  const { tagName } = props;
  const { tagValue } = props;

  // Test if tag is empty
  if (tagValue === '') {
    return (<div />);
  }

  // Return correct icon
  let tagIcon = '';
  if (tagName === 'type') {
    if (tagValue === 'Online Course') {
      tagIcon = iconOnlineCourse;
    }
  }
  if (tagName === 'duration') {
    tagIcon = iconDuration;
  }
  if (tagName === 'author') {
    tagIcon = iconAuthor;
  }

  return (
    <div>
      <img className="subjectTag" src={tagIcon} alt={`${tagValue} icon`} />
      <div className="subjectTag">{tagValue}</div>
    </div>
  );
};

SubjectTag.propTypes = {
  tagName: PropTypes.string,
  tagValue: PropTypes.string,
};
SubjectTag.defaultProps = {
  tagName: '',
  tagValue: '',
};

export default SubjectTag;
