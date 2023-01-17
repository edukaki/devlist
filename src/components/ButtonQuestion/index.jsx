import React from 'react';
import HeadingTwo from '../HeadingTwo';

const ButtonQuestion = (props) => {
    return (
        <button className="text-left">
            <HeadingTwo headingTwoContent={props.text}></HeadingTwo>
            {props.hidden === 'true' ?
                <i className="fa-solid fa-caret-down"></i> :
                <i className="fa-solid fa-caret-up"></i>
            }
        </button>
    )
}

export default ButtonQuestion