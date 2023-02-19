import React from 'react';
import PropTypes from 'prop-types';

const InputGeneric = (props) => {
  return (
    <input
      className={`drop-shadow rounded py-2 px-3 ${props.margin} ${props.width}`}
      type={props.type}
      placeholder={props.placeholder}
    ></input>
  );
};

export default InputGeneric;

InputGeneric.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  margin: PropTypes.string,
  width: PropTypes.string,
};
