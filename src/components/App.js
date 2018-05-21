import React, { Component } from 'react';
import Topic from './Topic';

import '../styles/App.css';

const SUBJECTS_KEY = 'subjects'
const IS_COMPLETE_KEY = 'isComplete'

class App extends Component {
  constructor() {
    super();
    this.state = {
      topic0: {
        name: 'Introduction to CS',
        subjectsTotal: 4,
        subjectsCompleted: 0,
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
    const topicCopy = Object.assign({}, this.state[topicID]);
    const isCompleteBool = topicCopy[SUBJECTS_KEY][subjectID][IS_COMPLETE_KEY]
    topicCopy[SUBJECTS_KEY][subjectID][IS_COMPLETE_KEY] = !topicCopy[SUBJECTS_KEY][subjectID][IS_COMPLETE_KEY];
    this.setState({ topicID: topicCopy })
  }

  render() {
    return (
      <div className="App">
        <Topic key="0" topicID = {'topic0'} topic={this.state.topic0} onTickBtn={this.onTickBtn}/>
      </div>
    );
  }
}

export default App;
