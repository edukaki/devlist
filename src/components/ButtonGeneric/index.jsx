import React from 'react'

const ButtonGeneric = (props) => {
    return (
        <button 
            className={`${props.bgColor} hover:${props.hoverColor} hover:-translate-y-0.5 transform focus:outline-none focus:ring focus:ring-offset-2 focus:${props.ringColor} focus:ring-opacity-50 rounded-lg place-self-center py-2 px-3 ${props.textColor} ${props.placeSelf} lg:${props.width}`}
            type="button">{props.buttonName}</button>
    )
}

export default ButtonGeneric