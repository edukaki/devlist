import React from 'react'

const ButtonGeneric = (props) => {
    return (
        <button className={`${props.bgColor} rounded-lg w-auto place-self-center py-2 px-3 ${props.textColor} md:place-self-start lg:w-1/2`}
            type="button">{props.buttonName}</button>
    )
}
export default ButtonGeneric