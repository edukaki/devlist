import React from 'react' 

const HeadingTwo = (props) => {
    return (
        <h2 className={`inline font-courier text-left text-xl font-semibold text-darkGray ${props.position === 'relative' ? 'relative before:absolute before:h-4 before:w-20 before:bg-orange before:top-10 md:before:top-8 hover:before:bg-gradient-to-r from-orange to-green mb-10' : props.position}`}>{props.headingTwoContent}</h2>
    )
}

export default HeadingTwo