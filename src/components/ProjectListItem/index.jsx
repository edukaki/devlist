import { faTrashCan } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { UserProject } from '../../context/ProjectsContext'
import ProjectItem from '../ProjectItem'
import filterIcon from '../../img/icons/filter.png'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const ProjectListItem = (props) => {
    const { handleDelete } = UserProject()
    const { btnAdd, setBtnAdd } = props.btnFunction
    const { sortedArr } = props.sortFunction

    return (
        <>
            <div className='flex flex-row justify-between items-center gap-6 w-full px-3 mt-10 md:mt-0 md:px-6 bg-slate-400'>
                <button className='flex flex-row justify-end items-center gap-6 text-slate-100 font-bold' onClick={() => setBtnAdd(!btnAdd)}>
                    <div className='relative'>
                        <div className='w-5 h-1 rounded bg-slate-100' />
                        <div className={`absolute top-0 w-5 h-1 rounded bg-slate-100 transition-all duration-500 ease-in-out ${!btnAdd ? 'rotate-90' : 'opacity-0'}`} />
                    </div>
                    <span>Add Project</span>
                </button>
                <div className='flex flex-row items-center'>
                    <button className='p-3'>
                        <img src={filterIcon} alt='filter icon' className='h-7' />
                    </button>
                    <button className='p-3'>
                        <FontAwesomeIcon icon={faMagnifyingGlass} size='xl' color='#f1f5f9' />
                    </button>
                    <button className='p-3' onClick={handleDelete}>
                        <FontAwesomeIcon icon={faTrashCan} size='xl' color='#f1f5f9' />
                    </button>
                </div>
            </div>
            <div className='w-full px-3 pb-20 mb-20 md:px-6 bg-slate-200'>
                <div className='font-bold'><ProjectItem project='Project' client='Client' start='Start date' deadline='Deadline' indicator='Status' /></div>
                {sortedArr.map((project, index) => (
                    <ProjectItem
                        key={index}
                        dataKey={project.key}
                        check={true}
                        project={project.project}
                        client={project.client}
                        status={project.status}
                        start={project.start}
                        deadline={project.deadline}
                    />)
                )}
            </div>
        </>
    )
}

export default ProjectListItem
