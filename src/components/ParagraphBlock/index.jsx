import React from 'react';
import PropTypes from 'prop-types';

const ParagraphBlock = (props) => {
  return (
    <p
      className={`${
        props.bgColor === 'exist' ? 'bg-logoGray rounded-lg p-4' : props.bgColor
      } text-lg ${props.fontSize} tracking-wider leading-8`}
    >
      {props.paragraphContent}
    </p>
  );
};

export default ParagraphBlock;

ParagraphBlock.propTypes = {
  paragraphContent: PropTypes.string,
  bgColor: PropTypes.string,
  fontSize: PropTypes.string,
};
