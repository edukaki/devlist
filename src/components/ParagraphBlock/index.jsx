import React from 'react'

const ParagraphBlock = (props) => {
    return (
        <p className={`${props.bgColor === 'exist' ? 'bg-logoGray rounded-lg p-4' : props.bgColor} ${props.hidden === 'true' ? 'hidden' : props.hidden} text-lg tracking-wider leading-8`}>{props.paragraphContent}</p>
    )
}

export default ParagraphBlock