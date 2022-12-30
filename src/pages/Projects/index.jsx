import React from 'react'
import ProjectCard from '../../components/ProjectCard'
import ProjectCardArea from '../../components/ProjectCardArea'

const Projects = () => {
    return (
        <main className='min-h-[100vh]'>
            <ProjectCardArea>
                <ProjectCard title='Opened Projects' content='82' footer='oijoi' fromColor='from-pink-500' toColor='to-purple-500' />
                <ProjectCard title='test' content='81' footer='test2' fromColor='from-orange-500' toColor='to-red-500' />
                <ProjectCard title='test' content='82' footer='test2' fromColor='from-emerald-400' toColor='to-teal-600' />
                <ProjectCard title='test' content='83' footer='test2' fromColor='from-cyan-500' toColor='to-blue-500' />
            </ProjectCardArea>
        </main>
    )
}

export default Projects