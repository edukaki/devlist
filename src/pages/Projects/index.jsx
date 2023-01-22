import React from 'react'
import ProjectCard from '../../components/ProjectCard'
import ProjectItem from '../../components/ProjectItem'
import ProjectListItem from '../../components/ProjectListItem'
import AddProjectForm from '../../components/AddProjectForm'
import Heading from '../../components/Heading'
import ParagraphBlock from '../../components/ParagraphBlock'
import lightbulb from '../../img/icons/lightbulb.png'
import { ReactComponent as Line } from '../../img/icons/line.svg'

const Projects = () => {

    return (
        <main className='container-bigger'>
            <section className='container-small pt-6 md:pt-0'>

                <Heading type='headingOne' line="left" headingOneContent="My dashboard" />
            <div className='grid grid-flow-row gap-5 py-6'>
                <div className='flex flex-row justify-between items-center'>
                    <Heading type='headingTwo' headingTwoContent="Add a new project" />
                    <button>
                        <Line className='w-10' />
                        <Line className='w-10 rotate-90' />
                    </button>
                </div>
                <div className='flex flex-row gap-4 items-center'>
                    <img src={lightbulb} alt="lightbulb icon" className='max-w-12 max-h-12' />
                    <ParagraphBlock paragraphContent="DevNote count the invested time based on your project work status. Remember to change the status of your project." />
                </div>

            </div>
            </section>


            <div className='max-w-full grid gap-8 container-small py-3 md:py-6 md:grid-cols-2 xl:grid-cols-4'>
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