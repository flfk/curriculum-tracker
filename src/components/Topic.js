import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Subject from './Subject';

import '../styles/topic.css';

import iconProgressBar from '../icons/RoundProgress.png';

class Topic extends Component {
  constructor() {
    super();
    this.state = {
      subjectIDs: ['0', '1', '2'],
    };
  }

  render() {
    const { topicName } = this.props;
    const { subjectIDs } = this.props;

    const subjects = subjectIDs
      .map(elem => <Subject key={elem} subjectID={elem} />);

    return (
      <div className="topic">
        <div className="topicHeader">
          <div className="topicName">{ topicName }</div>
          <img className="topicProgress" src={iconProgressBar} alt="Progress Bar" />
          <div className="topicDivider" />
          <button className="topicEditBtn">Edit</button>
        </div>
        <div>{ subjects }</div>
      </div>
    );
  }
};

Topic.propTypes = {
  topicName: PropTypes.string,
  subjectIDs: PropTypes.array,
};
Topic.defaultProps = {
  topicName: '',
  subjectIDs: [],
};

export default Topic;
