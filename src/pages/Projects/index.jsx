import React from 'react'
import ProjectCard from '../../components/ProjectCard'
import ProjectCardArea from '../../components/ProjectCardArea'

const Projects = () => {
    return (
        <main className='min-h-[100vh]'>
            <ProjectCardArea>
                <ProjectCard title='Ongoing' content='sample' footer='Open projects' fromColor='from-amber-400' toColor='to-amber-200' />
                <ProjectCard title='Closed' content='sample' footer='Closed and achieved projects' fromColor='from-lime-600' toColor='to-amber-200' />
                <ProjectCard title='Total time' content='sample' footer='Invested in all projects' fromColor='from-lime-300' toColor='to-sky-500' />
                <ProjectCard title='Remaining time' content='sample' footer='Until all projects deadlines' fromColor='from-red-500' toColor='to-amber-200' />
            </ProjectCardArea>
        </main>
    )
}

export default Projects