import React from 'react'
import ProjectCard from '../../components/ProjectCard'
import ProjectListItem from '../../components/ProjectListItem'
import AddProjectForm from '../../components/AddProjectForm'
import Heading from '../../components/Heading'
import ParagraphBlock from '../../components/ParagraphBlock'
import lightbulb from '../../img/icons/lightbulb.png'
import { ReactComponent as Line } from '../../img/icons/line.svg'
import { useState } from 'react'
import { regular } from "@fortawesome/fontawesome-svg-core/import.macro"
import { useCardCalc } from "../../common/utils/Hooks/useCardCalc"
import arrowCircle from '../../img/icons/arrow-circle.png'
import { UserProject } from '../../context/ProjectsContext'

const Projects = () => {

    const [btnAdd, setBtnAdd] = useState(false)
    const cardData = useCardCalc()
    const { projectArr } = UserProject()
    return (
        <main className='grid grid-flow-row container-bigger'>
            {projectArr? 
            <>
            <section className='container-small pt-6 md:pt-0'>

                <Heading type='headingOne' line="left" headingOneContent="My dashboard" />
                <div className='grid grid-flow-row gap-5 py-6'>
                    <div className='flex flex-row justify-between items-center md:max-w-[400px]'>
                        <Heading type='headingTwo' headingTwoContent="Add a new project" />
                        <button className='w-10 h-10' onClick={() => setBtnAdd(!btnAdd)}>
                            <Line className='w-10' />
                            <Line className={`w-10 transition-all duration-500 ease-in-out ${!btnAdd ? 'rotate-90' : 'opacity-0'}`} />
                        </button>
                    </div>
                    <div className='flex flex-row gap-4 items-center bg-grayish rounded-md md:max-w-[450px]'>
                        <img src={lightbulb} alt="lightbulb icon" className='max-w-12 max-h-12' />
                        <ParagraphBlock paragraphContent="DevNote count the invested time based on your project work status. Remember to change the status of your project." />
                    </div>

                </div>
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${!btnAdd ? 'max-h-0' : 'max-h-full'}`}><AddProjectForm /></div>
            </section>
            <section className='flex flex-col container-small'>
                <div className='max-w-full grid grid-flow-row gap-8 py-3 xl:max-h-72 md:py-6 md:grid-cols-2 xl:grid-cols-4'>
                    <ProjectCard title='Ongoing' icon={arrowCircle} alt='arrow circle icon' content={`${cardData.active} projects`} footer='Open projects' fromColor='from-amber-400' toColor='to-amber-200' />
                    <ProjectCard title='Closed' icon={regular('circle-check')} content={`${cardData.closed} projects`} footer='Closed and achieved projects' fromColor='from-lime-600' toColor='to-amber-200' />
                    <ProjectCard title='Total time' icon={regular('clock')} content={`${cardData.daysTotal} days`} footer='Invested in all projects' fromColor='from-lime-300' toColor='to-sky-500' />
                    <ProjectCard title='Next deadline' icon={regular('hourglass')} content={`${cardData.nextDeadline} `} footer='The next project deadline' fromColor='from-red-500' toColor='to-amber-200' />
                </div>
                <ProjectListItem btnFunction={{ btnAdd, setBtnAdd }} />
            </section>
            </> : 
            <section className='m-auto'>
                <h1 className='animate-pulse text-4xl'>Loading...</h1>
            </section>
            }
        </main>
    )


}

export default Projects