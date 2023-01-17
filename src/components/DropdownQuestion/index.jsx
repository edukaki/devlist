import React from 'react';
import HeadingTwo from '../HeadingTwo';

const DropdownQuestion = (props) => {
    return (
            <button className="text-left">
                <HeadingTwo headingTwoContent={props.text}></HeadingTwo>
                    <i className="fa-solid fa-caret-down"></i> :
                    <i className="fa-solid fa-caret-up"></i>
            </button>
    )
}

export default DropdownQuestion