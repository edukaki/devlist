import React from 'react'

const ProjectItem = (props) => {
    return (
        <div className='grid grid-cols-4 text-center py-7 border border-b-orange'>
            {props.check === true ?
                <div className='flex flex-row gap-5 text-left'>
                    <input type='checkbox' className='w-[2rem]'/>
                    <span>{props.project}</span>
                </div> :
                <span>{props.project}</span>
            }
            <span>{props.client? props.client : 'Personal'}</span>
            <span>{props.status}</span>
            <span>{props.indicator}</span>
        </div>
    )
}

export default ProjectItem