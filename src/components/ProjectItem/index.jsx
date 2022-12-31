import React from 'react'

const ProjectItem = (props) => {
    return (
        <div className='grid grid-cols-5'>
            {props.check === true ?
                <input type='checkbox' /> : ''
                }
            <span>{props.name}</span>
            <span>{props.author}</span>
            <span>{props.indicator}</span>
            <span>{props.status}</span>
        </div>
    )
}

export default ProjectItem