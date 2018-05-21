import React, { Component } from 'react';
import CurriculumHeader from './CurriculumHeader';
import Topic from './Topic';
import {
  // At Curriculum Level
  CURRICULUM_ID_KEY, HEADER_KEY,
  // At Topic Level
  TOPICS_KEY, SUBJECTS_COMPLETED_KEY,
  // At Subjects Level
  SUBJECTS_KEY, IS_COMPLETE_KEY
} from '../constants/dataModelKeys';

import CurriculumModel from '../model/CurriculumModel.json';

import '../styles/curriculum.css';

class Curriculum extends Component {
  constructor() {
    super();
    this.state = {
      'curriculumID': '',
      'header': {
        'name': '',
        'link': '',
        'subjectsTotal': 0,
        'subjectsCompleted': 0,
        'expectedGraduation': '',
      },
      'topics': [
        {
          topicID: '',
          name: '',
          subjectsTotal: 0,
          subjectsCompleted: 0,
          subjects: [
            {
              subjectID: '0',
              name: '',
              type: '',
              duration: '',
              author: '',
              link: '',
              isComplete: false,
            },
          ],
        },
      ],
    };
  }

  // Load curriculum model test data
  componentDidMount() {
    this.setState(CurriculumModel)
  }

  onTickBtn = (topicIndex, subjectIndex) => {
    const updatedTopic = this.state[TOPICS_KEY][topicIndex];
    const updatedSubject = updatedTopic[SUBJECTS_KEY][subjectIndex];
    const updatedIsComplete = !updatedSubject[IS_COMPLETE_KEY];

    // Update subject bool
    updatedSubject[IS_COMPLETE_KEY] = updatedIsComplete;
    updatedTopic[SUBJECTS_KEY][subjectIndex] = updatedSubject;

    // Update subjectsCompleted integer in Topic
    if (updatedIsComplete) {
      updatedTopic[SUBJECTS_COMPLETED_KEY] += 1;
    }
    else {
      updatedTopic[SUBJECTS_COMPLETED_KEY] -= 1;
    }

    // Update state
    const updatedCurriculum = this.state;
    updatedCurriculum[TOPICS_KEY][topicIndex] = updatedTopic;
    this.setState(updatedCurriculum);
  }

  render() {
    const curriculumHeader = (
      <CurriculumHeader
      key={this.state[CURRICULUM_ID_KEY]}
      curriculumID={this.state[CURRICULUM_ID_KEY]}
      headerInfo={this.state[HEADER_KEY]}
      />
      );


    const topics = this.state[TOPICS_KEY]
      .map((topic, index) => (
        <Topic
        key={topic.topicID}
        topicID = {topic.topicID}
        topicIndex = {index}
        topic={topic}
        onTickBtn={this.onTickBtn}/>
        )
      );

    return (
      <div className="curriculum">
        {curriculumHeader}
        {topics}
      </div>
    );
  }
}

export default Curriculum;
