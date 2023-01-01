import React from 'react'

const ProjectItem = (props) => {
    return (
        <div className='grid grid-cols-4 text-center py-7'>
            <div>
                {props.check === true ?
                    <input type='checkbox' /> : ''
                }
                <span>{props.project}</span>
            </div>
            <span>{props.author}</span>
            <span>{props.status}</span>
            <span>{props.indicator}</span>
        </div>
    )
}

export default ProjectItem