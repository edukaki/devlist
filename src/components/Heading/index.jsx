import React from 'react';
import PropTypes from 'prop-types';
const Heading = (props) => {
  const type = props.type;
  const line = () => {
    if (props.line === 'bottom') {
      return 'relative before:absolute before:h-4 before:w-20 before:bg-orange before:top-8 md:before:top-8 hover:before:bg-gradient-to-r from-orange to-green mb-10';
    }
  };

  const expression = () =>
    type === 'headingOne' ? (
      <h1
        className={`${line()} bg-gradient font-courier text-3xl font-bold text-darkGray pl-2 bg-lightGray`}
      >
        {props.headingOneContent}
      </h1>
    ) : type === 'headingTwo' ? (
      <h2
        className={`${line()} inline font-courier text-left text-xl font-semibold text-darkGray`}
      >
        {props.headingTwoContent}
      </h2>
    ) : (
      ''
    );

  return props.line === 'left' ? (
    <div className="pl-4 bg-orange hover:bg-gradient-to-b from-orange to-green">
      {expression()}
    </div>
  ) : (
    expression()
  );
};

export default Heading;

Heading.propTypes = {
  type: PropTypes.string,
  headingOneContent: PropTypes.string,
  headingTwoContent: PropTypes.string,
  line: PropTypes.string,
};
