import React from 'react'

const InputGeneric = (props) => {
    return (
        <input 
            className={`drop-shadow rounded py-2 px-3 ${props.margin} ${props.width}`} 
            type={props.type} placeholder={props.placeholder}></input>
    )
}

export default InputGeneric