import React from 'react';
// https://github.com/react-component/progress <--- circular progress bar
import { Circle } from 'rc-progress';

import '../styles/curriculumHeader.css';
import styled from 'styled-components';
import {
  MEDIA,
  emphasisLightHigh, emphasisLightMedium,
  H1, H3,
  } from '../styles/Styles';

import iconExternalLink from '../icons/ExternalLinkIcon.png';
import iconExpectedGrad from '../icons/ExpectedGraduationIcon.png';

import iconIsNotBookmarked from '../icons/BookmarkIconUnselected.svg';
import iconIsBookmarked from '../icons/BookmarkIconSelected.svg';

// background: url(${props => props.isBookmarked? iconIsBookmarked : iconIsNotBookmarked});

const CurriculumHeader = (props) => {
  const { curriculumID, isBookmarked, headerInfo, onBookmarkBtn } = props;

  const {
    name, author, link, subjectsCompleted, subjectsTotal, expectedHours, responsesTotal, updateDate,
  } = headerInfo;

  const progress = (subjectsCompleted / subjectsTotal) * 100;

  const curriculumProgressBar = (
    <Circle
      className="curriculumProgress"
      percent={progress}
      strokeWidth="16"
      trailWidth="16"
      strokeColor="#DD4C4F"
    />
  );

  const bookmarkIcon = isBookmarked ?
    <BookmarkIconSelected/>:
    <BookmarkIconNotSelected/>;

  console.log(isBookmarked)

  return (
    <HeaderContainer>
      <ProgressContainer>
        <div>{curriculumProgressBar}</div>
        <H3>{subjectsCompleted} / {subjectsTotal}</H3>
      </ProgressContainer>

      <TitleContainer>
        <H1>{name}</H1>
        <SubHeadingContainer>
          <H3>By acsoijdaoisdja</H3>
          <H3>123123 comments</H3>
          <H3>Description</H3>
        </SubHeadingContainer>
      </TitleContainer>

      <BookmarkBtn onClick={() => onBookmarkBtn()}>
        {bookmarkIcon}
      </BookmarkBtn>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;

  height: 72px;
`;

const TitleContainer = styled.div`
  flex: 1;
  min-width: 0;
  margin: 0 16px;

  display: flex;
  flex-flow: column nowrap;

  H1 {
    margin: 0;
    height: 48px;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

`;

const SubHeadingContainer = styled.div`
  H3 {
    margin: 8px 0 0;
    display: inline-block;
  }

  ${MEDIA.tablet`H3:not(:first-child){display: none;}`}
`;

const ProgressContainer = styled.div`
  flex: 0 0 auto;
  width: 48px;

  div {
    height: 48px;
  }

  H3 {
    margin: 8px 0 0;
    text-align: center;
  }
`;

const BookmarkBtn = styled.button`
  flex: 0 0 auto;
  width: 48px;
  height: 48px;
  padding: 0;
  border: none;
  backgroud-color: transparent;
  cursor: pointer;
`;

const BookmarkIconNotSelected = styled.div`
  width: 48px;
  height: 48px;
  background-image: url(${iconIsNotBookmarked});
  background-size: cover;
`;

const BookmarkIconSelected = styled.div`
  width: 48px;
  height: 48px;
  background-image: url(${iconIsBookmarked});
  background-size: cover;
`;

export default CurriculumHeader;
