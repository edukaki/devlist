import React, { useState } from 'react';
import Heading from '../Heading';
import PropTypes from 'prop-types';

const DropdownQuestion = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button className="text-left" onClick={() => setOpen(!open)}>
        <Heading type="headingTwo" headingTwoContent={props.text}></Heading>
        {open === false ? (
          <i className="fa-solid fa-caret-down pl-3"></i>
        ) : (
          <i className="fa-solid fa-caret-up pl-3"></i>
        )}
      </button>
      <p
        className={`${open === false ? 'hidden' : ''} ${
          props.bgColor === 'exist'
            ? 'bg-logoGray rounded-lg p-4'
            : props.bgColor
        } text-lg tracking-wider leading-8`}
      >
        {props.paragraphContent}
      </p>
    </div>
  );
};

export default DropdownQuestion;

DropdownQuestion.propTypes = {
  text: PropTypes.string,
  paragraphContent: PropTypes.string,
  bgColor: PropTypes.string,
};
