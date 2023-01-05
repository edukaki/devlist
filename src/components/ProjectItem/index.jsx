import React from 'react'

const ProjectItem = (props) => {
    return (
        <div className='grid grid-cols-4 text-center py-7'>
            {props.check === true ?
                <div>
                    <input type='checkbox' />
                    <span>{props.project}</span>
                </div> :
                <span>{props.project}</span>
            }
            <span>{props.author}</span>
            <span>{props.status}</span>
            <span>{props.indicator}</span>
        </div>
    )
}

export default ProjectItem