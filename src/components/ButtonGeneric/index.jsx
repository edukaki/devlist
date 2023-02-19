import React from 'react';
import PropTypes from 'prop-types';

const ButtonGeneric = (props) => {
  return (
    <button
      className={`${
        props.bgColor === 'blue'
          ? 'bg-blue hover:bg-sky-400 text-white focus:ring-blue'
          : props.bgColor
      } hover:-translate-y-0.5 transform focus:outline-none 
            focus:ring focus:ring-offset-2 focus:ring-opacity-50 rounded-lg place-self-center 
            py-2 px-3 ${props.textColor} ${props.width}`}
      type="button"
    >
      {props.buttonName}
    </button>
  );
};

export default ButtonGeneric;

ButtonGeneric.propTypes = {
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  width: PropTypes.string,
  buttonName: PropTypes.string,
};
