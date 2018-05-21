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
      'testState' : {},
      'curriculumID': '999',
      'topics': [
        {
          topicID: 'topic0',
          name: 'Introduction to CS',
          subjectsTotal: 2,
          subjectsCompleted: 1,
          subjects: [
            {
              subjectID: '0',
              name: 'HarvardCS50',
              type: 'Online Course',
              duration: '180',
              author: 'Harvard',
              link: 'https://www.edx.org/course/cs50s-introduction-computer-science-harvardx-cs50x#!',
              isComplete: false,
            },
            {
              subjectID: '1',
              name: 'Introduction to Computer Science and Programming',
              type: 'Online Course',
              duration: '135',
              author: 'MIT',
              link: 'https://www.edx.org/course/introduction-computer-science-mitx-6-00-1x-11',
              isComplete: true,
            },
          ],
        },
        {
          topicID: 'topic1',
          name: 'Second Topic',
          subjectsTotal: 2,
          subjectsCompleted: 0,
          subjects: [
            {
              subjectID: '2',
              name: 'Test me for broken elements',
              type: 'Online Course',
              duration: '',
              author: 'MIT',
              link: '',
              isComplete: false,
            },
            {
              subjectID: '3',
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
    this.setState({testState: CurriculumModel})
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

    console.log(this.state.testState)

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
