import React from 'react'

const ProjectItem = (props) => {
    return (
        <div className='grid grid-cols-5 text-center py-7 border border-b-orange'>

            {props.check === true ?
                <div className='flex flex-row gap-5 text-left'>
                    <input type='checkbox' className='w-[2rem]' />
                    <span>{props.project}</span>
                </div> :
                <span>{props.project}</span>
            }
            <span>{props.client ? props.client : 'Personal'}</span>
            <span>{props.start}</span>
            <span>{props.deadline}</span>

            <span className='flex justify-center'>
                {
                    props.status === 'Active' ? <div className='w-6 h-6 bg-lime-500 rounded-full' /> :
                        props.status === 'Paused' ? <div className='w-6 h-6 bg-red-500 rounded-full' /> :
                            props.status === 'Closed' ? <div className='w-6 h-6 bg-gray-400 rounded-full' /> : props.indicator
                }
            </span>
        </div>
    )
}

export default ProjectItem