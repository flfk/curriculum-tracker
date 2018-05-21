import React, { Component } from 'react';
import Topic from './Topic';

import CurriculumModel from '../model/CurriculumModel.json'

const TOPICS_KEY = 'topics'
const SUBJECTS_KEY = 'subjects'
const IS_COMPLETE_KEY = 'isComplete'
const SUBJECTS_COMPLETED_KEY = 'subjectsCompleted'

class Curriculum extends Component {
  constructor() {
    super();
    this.state = {
      'curriculumID': '',
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

    const updatedCurriculum = this.state;
    updatedCurriculum[TOPICS_KEY][topicIndex] = updatedTopic;
    this.setState(updatedCurriculum);
  }

  render() {
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
      <div>
        {topics}
      </div>
    );
  }
}

export default Curriculum;
