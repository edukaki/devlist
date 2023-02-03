import React from 'react'
import { UserProject } from '../../context/ProjectsContext'

const ProjectItem = (props) => {
    const { checkedItems, setCheckedItems } = UserProject()
    const today = new Date()

    const handleChange = (event) => {
        var updatedList = [...checkedItems]
        if (event.target.checked) {
            updatedList = [...checkedItems, props.dataKey]
        } else {
            updatedList.splice(checkedItems.indexOf(props.dataKey), 1)
        }
        setCheckedItems(updatedList)
    }

    return (
        <div className='grid grid-cols-4 md:grid-cols-5 text-center py-7 border border-b-orange'>
            {props.check === true ?
                <div className='flex flex-row gap-5 col-span-2 md:col-span-1 text-left'>
                    <input type='checkbox' className='w-[2rem]'
                        onChange={handleChange} />
                    <span>{props.project}</span>
                </div> :
                <span className='col-span-2 md:col-span-1'>{props.project}</span>
            }
            <span className='hidden md:block'>{props.client ? props.client : 'Personal'}</span>
            <span className='hidden md:block'>{props.start}</span>
            <span className={`${new Date(props.deadline).setHours(0,0,0,0) < today.setHours(0,0,0,0) && props.status !== 'Closed' ? 'text-red-500 font-bold' : ''}`}>{props.deadline}</span>

            <span className='flex justify-center'>
                {
                    props.status === 'Active' ? <div className='w-6 h-6 bg-lime-500 rounded-full' /> :
                        props.status === 'Paused' ? <div className='w-6 h-6 bg-red-500 rounded-full' /> :
                            props.status === 'Closed' ? <div className='w-6 h-6 bg-gray-400 rounded-full' /> : props.indicator
                }
            </span>
        </div>
    )
}

export default ProjectItem