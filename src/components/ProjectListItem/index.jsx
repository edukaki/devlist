import React from 'react'
import { UserProject } from '../../context/ProjectsContext'
import ProjectItem from '../ProjectItem'


const ProjectListItem = () => {
    const { projectArr } = UserProject()
    return (
        <div>
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