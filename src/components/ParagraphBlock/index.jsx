import React from 'react'

const ParagraphBlock = (props) => {
    return (
        <p className="text-lg tracking-wider leading-8">{props.paragraphContent}</p>
    )
}

export default ParagraphBlock