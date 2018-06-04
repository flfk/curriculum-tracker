import React, { Component } from 'react';
import CurriculumHeader from './CurriculumHeader';
import Topic from './Topic';
import {
  // At Curriculum Level
  CURRICULUM_ID_KEY, IS_BOOKMARKED_KEY, HEADER_KEY,
  // At Topic Level
  TOPICS_KEY, SUBJECTS_COMPLETED_KEY,
  // At Subjects Level
  SUBJECTS_KEY, IS_COMPLETE_KEY
} from '../constants/dataModelKeys';

import CurriculumModel from '../model/CurriculumModel.json';

import '../styles/curriculum.css';
import styled from 'styled-components';

class Curriculum extends Component {
  constructor() {
    super();
    this.state = {
      'curriculumID': '',
      'isBookmarked': false,
      'header': {
        'name': '',
        'author': '',
        'link': '',
        'subjectsTotal': 0,
        'subjectsCompleted': 0,
        'expectedHours': '',
        'updateDate': '',
        'responsesTotal': '',
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

  onBookmarkBtn = () => {
    const updatedCurriculum = this.state;
    updatedCurriculum[IS_BOOKMARKED_KEY] = !updatedCurriculum[IS_BOOKMARKED_KEY];
    this.setState(updatedCurriculum);
  };

  onTickBtn = (topicIndex, subjectIndex) => {
    const updatedCurriculum = this.state;
    const updatedTopic = updatedCurriculum[TOPICS_KEY][topicIndex];
    const updatedSubject = updatedTopic[SUBJECTS_KEY][subjectIndex];
    const updatedIsComplete = !updatedSubject[IS_COMPLETE_KEY];

    // Update subject bool
    updatedSubject[IS_COMPLETE_KEY] = updatedIsComplete;
    updatedTopic[SUBJECTS_KEY][subjectIndex] = updatedSubject;

    // Update subjectsCompleted integer in Topic
    if (updatedIsComplete) {
      updatedCurriculum[HEADER_KEY][SUBJECTS_COMPLETED_KEY] += 1;
      updatedTopic[SUBJECTS_COMPLETED_KEY] += 1;
    }
    else {
      updatedCurriculum[HEADER_KEY][SUBJECTS_COMPLETED_KEY] -= 1;
      updatedTopic[SUBJECTS_COMPLETED_KEY] -= 1;
    }

    // Update state

    updatedCurriculum[TOPICS_KEY][topicIndex] = updatedTopic;
    this.setState(updatedCurriculum);
  };

  render() {
    const curriculumHeader = (
      <CurriculumHeader
      key={this.state[CURRICULUM_ID_KEY]}
      curriculumID={this.state[CURRICULUM_ID_KEY]}
      isBookmarked={this.state[IS_BOOKMARKED_KEY]}
      headerInfo={this.state[HEADER_KEY]}
      onBookmarkBtn={this.onBookmarkBtn}
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
        <TopicsContainer>
          {topics}
        </TopicsContainer>
      </div>
    );
  }
}

const TopicsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

export default Curriculum;
