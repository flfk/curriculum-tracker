import React, { Component } from 'react';
import Topic from './Topic';

import '../styles/App.css';

const SUBJECTS_KEY = 'subjects'
const IS_COMPLETE_KEY = 'isComplete'
const SUBJECTS_COMPLETED_KEY = 'subjectsCompleted'

class App extends Component {
  constructor() {
    super();
    this.state = {
      topic0: {
        name: 'Introduction to CS',
        subjectsTotal: 2,
        subjectsCompleted: 1,
        subjects: {
          '0': {
            name: 'HarvardCS50',
            type: 'Online Course',
            duration: '180',
            author: 'Harvard',
            link: 'https://www.edx.org/course/cs50s-introduction-computer-science-harvardx-cs50x#!',
            isComplete: false,
          },
          '1': {
            name: 'Introduction to Computer Science and Programming',
            type: 'Online Course',
            duration: '135',
            author: 'MIT',
            link: 'https://www.edx.org/course/introduction-computer-science-mitx-6-00-1x-11',
            isComplete: true,
          },
        },
      },
      topic1: {
        name: 'Second Topic',
        subjectsTotal: 2,
        subjectsCompleted: 0,
        subjects: {
          '2': {
            name: 'Test me for broken elements',
            type: 'Online Course',
            duration: '',
            author: 'MIT',
            link: '',
            isComplete: false,
          },
          subjectID: {
            name: '',
            type: '',
            duration: '',
            author: '',
            link: '',
            isComplete: false,
          },
        },
      },
    };
  }

  onTickBtn = (topicID, subjectID) => {
    // update isCompleted bool in subject
    const topicCopy = Object.assign({}, this.state[topicID]);
    topicCopy[SUBJECTS_KEY][subjectID][IS_COMPLETE_KEY] = !topicCopy[SUBJECTS_KEY][subjectID][IS_COMPLETE_KEY];

    // update subjectsCompleted integer in Topic
    const isComplete = topicCopy[SUBJECTS_KEY][subjectID][IS_COMPLETE_KEY];
    if (isComplete) {
      topicCopy[SUBJECTS_COMPLETED_KEY] += 1;
    }
    else {
      topicCopy[SUBJECTS_COMPLETED_KEY] -= 1;
    }

    this.setState({ [topicID]: topicCopy });
  }

  render() {

    const topics = Object.keys(this.state)
      .map(topicID => <Topic key={topicID} topicID = {topicID} topic={this.state[topicID]} onTickBtn={this.onTickBtn}/>);

    return (
      <div className="App">

        {topics}
      </div>
    );
  }
}

export default App;
