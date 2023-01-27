import React from 'react'
import { UserProject } from '../../context/ProjectsContext'
import ProjectItem from '../ProjectItem'


const ProjectListItem = (props) => {
    const { projectArr } = UserProject()
    const { btnAdd, setBtnAdd } = props.btnFunction
    return (
        <>
            <div className='flex flex-row justify-end items-center gap-6 w-full px-3 mt-10 py-3 md:mt-0 md:px-6 bg-slate-400'>
                <button className='relative' onClick={() => setBtnAdd(!btnAdd)}>
                    <div className='w-5 h-1 rounded bg-slate-100' />
                    <div className={`absolute top-0 w-5 h-1 rounded bg-slate-100 transition-all duration-500 ease-in-out ${!btnAdd ? 'rotate-90' : 'opacity-0'}`} />
                </button>
            </div>
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
        </>
    )
}

export default ProjectListItem