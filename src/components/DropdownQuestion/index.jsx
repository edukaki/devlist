import React, { useState } from 'react';
import HeadingTwo from '../HeadingTwo';

const DropdownQuestion = (props) => {
    const[open,setOpen] = useState(false)
    return (
        <div>
            <button className="text-left" onClick={() => setOpen(!open)}>
                <HeadingTwo headingTwoContent={props.text}></HeadingTwo>
                {open===false ?
                    <i className="fa-solid fa-caret-down"></i> :
                    <i className="fa-solid fa-caret-up"></i>
                }
            </button>
            <p className={`${open===false? 'hidden' : ''} ${props.bgColor === 'exist' ? 'bg-logoGray rounded-lg p-4' : props.bgColor} text-lg tracking-wider leading-8`}>{props.paragraphContent}</p>
        </div>
    )
}

export default DropdownQuestion