import React, { Component } from 'react';
import Topic from './Topic';

import '../styles/App.css';

import SubjectModel from '../model/SubjectModel.json';

class App extends Component {
  constructor() {
    super();
    // this.state = {
    //   subjectIDs: ['0', '1', '2'],
    //   subjectModel: SubjectModel,
    // };
    this.state = {
      subjectIDs: ['0', '1', '2'],
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
            isComplete: 'false',
          },
          '1': {
            name: 'Introduction to Computer Science and Programming',
            type: 'Online Course',
            duration: '135',
            author: 'MIT',
            link: 'https://www.edx.org/course/introduction-computer-science-mitx-6-00-1x-11',
            isComplete: 'false',
          },
          '2': {
            name: 'Test me for broken elements',
            type: 'Online Course',
            duration: '',
            author: 'MIT',
            link: '',
            isComplete: 'false',
          },
          subjectID: {
            name: '',
            type: '',
            duration: '',
            author: '',
            link: '',
            isComplete: 'false',
          },
        },
      },
    };
  }

  render() {
    return (
      <div className="App">
        <Topic key="0" subjectIDs={ this.state.subjectIDs } topic={this.state.topic0} />
      </div>
    );
  }
}

export default App;
