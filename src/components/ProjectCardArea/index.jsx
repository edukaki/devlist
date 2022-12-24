import React from 'react'

const ProjectCardArea = ({ children }) => {
    return (
        <div className='max-w-full grid gap-8 md:grid-cols-2 xl:grid-cols-4'>
            {children}
        </div>
    )
}

export default ProjectCardArea
