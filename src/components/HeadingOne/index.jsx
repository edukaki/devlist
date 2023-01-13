import React from 'react'

const HeadingOne = (props) => {
    return (
        <h1 className="bg-gradient font-courier text-3xl font-bold text-darkGray border-l-[16px] pl-6 border-orange">{props.headingOneContent}</h1>
    )
}

export default HeadingOne