import React from 'react'
import ProjectCard from '../../components/ProjectCard'
import ProjectItem from '../../components/ProjectItem'
import { UserProject } from '../../context/ProjectsContext'
import ProjectListItem from '../../components/ProjectListItem'

const Projects = () => {

    return (
        <main>
            <div className='max-w-full grid gap-8 p-6 md:grid-cols-2 xl:grid-cols-4'>
                <ProjectCard title='Ongoing' content='sample' footer='Open projects' fromColor='from-amber-400' toColor='to-amber-200' />
                <ProjectCard title='Closed' content='sample' footer='Closed and achieved projects' fromColor='from-lime-600' toColor='to-amber-200' />
                <ProjectCard title='Total time' content='sample' footer='Invested in all projects' fromColor='from-lime-300' toColor='to-sky-500' />
                <ProjectCard title='Remaining time' content='sample' footer='Until all projects deadlines' fromColor='from-red-500' toColor='to-amber-200' />
            </div>

            <ProjectItem project='Project' author='Author' status='Status' indicator='Indicator' />
            <ProjectListItem />
        </main>
    )
}

export default Projects