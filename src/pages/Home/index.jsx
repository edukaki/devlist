import React from 'react'
import ongoingIcon from '../../img/icons/ongoing-icon.png'
import doneIcon from '../../img/icons/done-icon.png'
import totalTimeIcon from '../../img/icons/clock-icon.png'
import remainingTimeIcon from '../../img/icons/remaining-icon.png'
import InfoCard from '../../components/InfoCard'
import ButtonGeneric from '../../components/ButtonGeneric'
import InputGeneric from '../../components/InputGeneric'
import ParagraphBlock from '../../components/ParagraphBlock'
import Heading from '../../components/Heading'
import communityImg from '../../img/home/community.png'
import developersImg from '../../img/home/developers.png'

const Home = () => {
    return (
        <main>

            {/* Hero Information */}
            <section className="grid grid-flow-row h-full text-darkGray md:grid-cols-2 md:bg-cover md:h-[56vw] md:bg-heroImg-desktop 2xl:bg-heroImg-bigger 2xl:h-[36vw]">

                <div className='w-screen h-[100vw] bg-heroImg-mobile bg-cover md:hidden'/>
                {/* Hero Text */}
                <div className="flex flex-col min-h-max tracking-wider m-auto space-y-6 p-5">
                    
                    <div className="xl:max-w-[600px] min-[2500px]:max-w-[1400px]">
                        <h1 className="font-courier font-bold text-4xl text-center pt-3 md:text-left lg:text-5xl xl:text-6xl min-[2500px]:text-8xl">DevNote</h1>
                        <p className="text-xl text-center m-auto pt-6 sm:w-2/3 md:text-left md:m-0 lg:text-3xl xl:text-4xl min-[2500px]:text-6xl">The ultimate <span className="font-courier uppercase font-bold text-orange">free</span> <span className="font-courier font-bold text-orange">developer</span> tool to keep track of your projects</p>
                    </div>

                    <div className="max-w-[300px] space-y-6 mx-auto md:ml-0">
                        {/* Hero Email Input */}
                        <InputGeneric width="w-full" type="input" placeholder="email"></InputGeneric>

                        {/* Hero Register Button */}
                        <ButtonGeneric bgColor="blue" buttonName="Register" width="w-full"></ButtonGeneric>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className='container-bigger'>

                {/* Benefits Title */}
                <div className="my-20 leading-9 font-roboto text-darkGray font-medium text-xl tracking-wider lg:text-2xl">
                    <h2 className="text-center">Track your <span className="font-courier font-semibold text-orange">projects</span>. Manage your <span className="font-courier font-semibold text-orange">time</span>. Get things <span className="font-courier font-semibold text-orange">done!</span></h2>
                    <p className="text-center mt-4 m-auto md:w-5/12">DevNote helps you keep things simple, efficient and organized.</p>
                </div>

                {/* Benefits Cards */}
                <div className="flex flex-col font-roboto text-darkGray lg:flex-row lg:justify-center lg:gap-16 xl:gap-28">
                    <InfoCard
                        src={ongoingIcon}
                        alt="ongoing projects"
                        title="Track ongoing projects"
                        description="Help you keep your focus on the current project.">
                    </InfoCard>

                    <InfoCard
                        src={doneIcon}
                        alt="done projects"
                        title="Organize your projects"
                        description="Easily access and visualize your done projects.">
                    </InfoCard>

                    <InfoCard
                        src={totalTimeIcon}
                        alt="done projects"
                        title="Optmize the time invested"
                        description="Keep track of invested time and use it smarter.">
                    </InfoCard>

                    <InfoCard
                        src={remainingTimeIcon}
                        alt="remaining time"
                        title="Deliver within the deadline"
                        description="Check the remaining time and work on getting things done.">
                    </InfoCard>
                </div>
            </section>

            <section className="grid grid-rows-2">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="reveal reveal-right">
                        <img src={developersImg} alt="developers-img"></img>
                    </div>
                   
                    <div className="px-8 md:w-10/12 lg:max-w-[600px] xl:max-w-full xl:text-center space-y-4 leading-8">
                        <Heading type="headingTwo" headingTwoContent="Created by Developers for Developers"/>
                        <ParagraphBlock paragraphContent="We know how difficult is to keep managing time when creating a project. We can help you do that! DevNote gives the overview of time invested in each project so you will be able to learn which tasks took you longer and create a strategy for future projects."/>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row md:flex-row-reverse items-center xl:justify-between">
                    <div className="reveal reveal-left">
                        <img  src={communityImg} alt="developers-img"></img>
                    </div>

                    <div className="px-8 md:w-10/12 lg:max-w-[600px] xl:max-w-full xl:text-center space-y-4 leading-8">
                        <Heading type="headingTwo" headingTwoContent="Open-Source for the Dev Community"/>
                        <ParagraphBlock paragraphContent="DevNote is open to receiving inputs from the development community. Have a great idea on how to improve this project? Make your contribution! The more developers are invested, the better the results."/>
                    </div>  
                </div>
            </section>

            {/* Call to Action */}
            <section className="container-bigger my-24 flex flex-col w-6/12 space-y-6 items-center m-auto font-roboto md:text-left">
                <h2 className="mb-8 text-2xl tracking-wider text-center">Try it out! It's <span className="font-courier text-orange font-semibold uppercase">free!</span></h2>
                
                <div className="max-w-[240px] space-y-6">
                    {/* Call to Action Email Input */}
                    <InputGeneric margin="m-auto" width="w-full" type="input" placeholder="email"></InputGeneric>

                    {/* Call to Action Register Button */}
                    <ButtonGeneric bgColor="blue" buttonName="Register" width="w-full">
                    </ButtonGeneric>
                </div>
            </section>
        </main>
    )
}

export default Home