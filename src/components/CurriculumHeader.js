import React from 'react';

const CurriculumHeader = (props) => {
  const { curriculumID } = props;

  return (
      <div>
        Header {curriculumID}
      </div>
  );
};

export default CurriculumHeader;
