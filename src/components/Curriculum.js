import React, { Component } from 'react';
import CurriculumHeader from './CurriculumHeader'
import Topic from './Topic';

import CurriculumModel from '../model/CurriculumModel.json'

const CURRICULUM_ID_KEY = 'curriculumID'
const TOPICS_KEY = 'topics'
const SUBJECTS_COMPLETED_KEY = 'subjectsCompleted'
const SUBJECTS_KEY = 'subjects'
const IS_COMPLETE_KEY = 'isComplete'

class Curriculum extends Component {
  constructor() {
    super();
    this.state = {
      'curriculumID': '',
      'name': 'OSSU - Computer Science Curriculum v7 -  Core CS',
      'link': '',
      'subjectsTotal': 4,
      'subjectsCompleted': 2,
      'ExpectedGraduation': '1 Jan 2016',
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
    const curriculumHeader = (
      <CurriculumHeader
      key={this.state[CURRICULUM_ID_KEY]}
      curriculumID={this.state[CURRICULUM_ID_KEY]}
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
      <div>
        {curriculumHeader}
        {topics}
      </div>
    );
  }
}

export default Curriculum;
