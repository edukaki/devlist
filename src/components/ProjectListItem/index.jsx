import React from 'react'
import { UserProject } from '../../context/ProjectsContext'
import ProjectItem from '../ProjectItem'


const ProjectListItem = (props) => {
    const { projectArr } = UserProject()
    return (
            <div className='w-full px-3 mt-10 pb-20 md:mt-0 md:px-6 m-auto bg-slate-200'>
                <div className='font-bold'><ProjectItem project='Project' client='Client' start='Start date' deadline='Deadline' indicator='Status' /></div>
                {projectArr.map((project) => (
                    <ProjectItem
                        key={project.key}
                        check={true}
                        project={project.project}
                        client={project.client}
                        status={project.status}
                        start={project.start}
                        deadline={project.deadline}
                    >
                    </ProjectItem>)
                )
                }
            </div>
    )
}

export default ProjectListItem