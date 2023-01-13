import React from 'react' 

const HeadingTwo = (props) => {
    return (
        <h2 className={`font-courier text-xl font-semibold text-darkGray ${props.position === 'relative' ? 'relative before:absolute before:h-4 before:w-20 before:bg-orange before:top-14 md:before:top-8 hover:before:bg-gradient-to-r from-orange to-green mb-10' : props.position}`}>{props.headingTwoContent}</h2>
    )
}

export default HeadingTwo