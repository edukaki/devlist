import React from 'react'
import ProjectCard from '../../components/ProjectCard'
import ProjectCardArea from '../../components/ProjectCardArea'
import ProjectItem from '../../components/ProjectItem'
import { UserProject } from '../../context/ProjectsContext'
import { v4 as uuid } from 'uuid'
import ProjectListItem from '../../components/ProjectListItem'

const Projects = () => {
    const { setProject } = UserProject()

    const newProject = () => {
        const form = document.querySelector('[data-project-form]')
        const obj = {
            key: uuid(),
            name: form.project.value,
            author: form.author.value,
            indicator: form.indicator.value,
            status: form.status.value
        }
        form.reset()
        return obj
    }

    return (
        <main className='min-h-[100vh]'>
            <ProjectCardArea>
                <ProjectCard title='Ongoing' content='sample' footer='Open projects' fromColor='from-amber-400' toColor='to-amber-200' />
                <ProjectCard title='Closed' content='sample' footer='Closed and achieved projects' fromColor='from-lime-600' toColor='to-amber-200' />
                <ProjectCard title='Total time' content='sample' footer='Invested in all projects' fromColor='from-lime-300' toColor='to-sky-500' />
                <ProjectCard title='Remaining time' content='sample' footer='Until all projects deadlines' fromColor='from-red-500' toColor='to-amber-200' />
            </ProjectCardArea>
            <ProjectItem project='Project' author='Author' status='Status' indicator='Indicator' />
            <form data-project-form>
                <input type="text" name="project" />
                <input type="text" name="author" />
                <input type="text" name="indicator" />
                <input type="text" name="status" />
                <button
                    type='button'
                    onClick={async () => {
                        const project = newProject()
                        setProject(project)
                    }
                    }>click</button>
            </form>
            <ProjectListItem />
        </main>
    )
}

export default Projects