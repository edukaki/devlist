import React from 'react'

const ProjectCard = (props) => {
    return (
        <div className={`grid grid-rows-4 p-6 max-w-full min-h-[200px] bg-gradient-to-tr ${props.fromColor} ${props.toColor} border-gray-400 rounded-lg shadow-lg`}>
            <h2 className='row-span-2 text-2xl text-black font-bold tracking-wider'>{props.title}</h2>
            <span className='row-span-1 text-3xl text-black font-bold tracking-wider'>{props.content}</span>
            <h4 className='row-span-1 text-l text-black tracking-wider'>{props.footer}</h4>
        </div>
    )
}

export default ProjectCard
