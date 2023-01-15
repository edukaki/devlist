import React from 'react'

const HeadingOne = (props) => {
    return (
        <h1 className="bg-gradient font-courier text-3xl font-bold text-darkGray pl-2 bg-lightGray">{props.headingOneContent}</h1>
    )
}

export default HeadingOne