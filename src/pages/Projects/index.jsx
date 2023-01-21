import React from 'react'
import ProjectCard from '../../components/ProjectCard'
import ProjectItem from '../../components/ProjectItem'
import ProjectListItem from '../../components/ProjectListItem'
import AddProjectForm from '../../components/AddProjectForm'

const Projects = () => {

    return (
        <main className='container-bigger'>
            <div className='max-w-full grid gap-8 p-6 md:grid-cols-2 xl:grid-cols-4'>
                <ProjectCard title='Ongoing' content='sample' footer='Open projects' fromColor='from-amber-400' toColor='to-amber-200' />
                <ProjectCard title='Closed' content='sample' footer='Closed and achieved projects' fromColor='from-lime-600' toColor='to-amber-200' />
                <ProjectCard title='Total time' content='sample' footer='Invested in all projects' fromColor='from-lime-300' toColor='to-sky-500' />
                <ProjectCard title='Remaining time' content='sample' footer='Until all projects deadlines' fromColor='from-red-500' toColor='to-amber-200' />
            </div>

            <AddProjectForm />
            <section className='w-4/5 m-auto px-8 pb-20 bg-slate-200'>
                <ProjectItem project='Project' client='Client' start='Start date' deadline='Deadline' indicator='Status' />
                <ProjectListItem />
            </section>
        </main>
    )
}

export default Projects