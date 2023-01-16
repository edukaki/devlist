import React from 'react'
import heroImgDesktop from '../../img/home/hero-img-desktop.png'
import heroImgMobile from '../../img/home/hero-img-mobile.png'
import ongoingIcon from '../../img/icons/ongoing-icon.png'
import doneIcon from '../../img/icons/done-icon.png'
import totalTimeIcon from '../../img/icons/clock-icon.png'
import remainingTimeIcon from '../../img/icons/remaining-icon.png'
import InfoCard from '../../components/InfoCard'
import ButtonGeneric from '../../components/ButtonGeneric'
import InputGeneric from '../../components/InputGeneric'

const Home = () => {
    return (
        <main>

            {/* Hero Information */}
            <section className='flex flex-col justify-around text-darkGray md:relative'>

                {/* Hero Images (Art Direction) */}
                <picture className="md:relative">
                    <source media="(max-width: 767px)" srcSet={heroImgMobile}/>
                    <source media="(min-width: 768px)" srcSet={heroImgDesktop}/>
                    <img className='w-full' src={heroImgMobile} alt="Decorative hero"/>
                </picture>

                {/* Hero Text */}
                <div className="flex flex-col tracking-wider m-auto font-roboto space-y-6 py-5  md:absolute md:top-10 md:left-10 lg:top-30 lg:left-20 xl:top-50 xl:left-30 2xl:top-50 2xl:left-40 2xl:pl-50 2xl:pt-25 min-[1800px]:top-52 min-[1800px]:left-52 min-[3000px]:top-60 min-[3000px]:left-72">
                    
                    <div className="max-w-[400px] xl:max-w-[600px] min-[3000px]:max-w-[800px]">
                        <h1 className="font-courier font-bold text-4xl text-center pt-3 md:text-left lg:text-5xl xl:text-8xl">DevNote</h1>
                        <p className="text-xl text-center m-auto pt-6 sm:w-2/3 md:text-left md:m-0 lg:text-3xl xl:text-4xl">The ultimate <span className="font-courier uppercase font-bold text-orange">free</span> <span className="font-courier font-bold text-orange">developer</span> tool to keep track of your projects</p>
                    </div>

                    <div class="max-w-[240px] space-y-6 mx-auto md:ml-0">
                        {/* Hero Email Input */}
                        <InputGeneric width="w-full" type="input" placeholder="email"></InputGeneric>

                        {/* Hero Register Button */}
                        <ButtonGeneric bgColor="blue" buttonName="Register" width="w-full"></ButtonGeneric>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section>

                {/* Benefits Title */}
                <div className="my-20 leading-9 font-roboto text-darkGray font-medium text-xl tracking-wider lg:text-2xl">
                    <h2 className="text-center">Track your <span className="font-courier font-semibold text-orange">projects</span>. Manage your <span className="font-courier font-semibold text-orange">time</span>. Get things <span className="font-courier font-semibold text-orange">done!</span></h2>
                    <p className="text-center mt-4 m-auto md:w-5/12">DevNote helps you keep things simple, efficient and organized.</p>
                </div>

                {/* Benefits Cards */}
                <div className="flex flex-col font-roboto text-darkGray lg:flex-row lg:justify-around">
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

            {/* Call to Action */}
            <section className="my-24 flex flex-col w-6/12 space-y-6 items-center m-auto font-roboto md:text-left">
                <h2 className="mb-8 text-2xl tracking-wider text-center">Try it out! It's <span className="font-courier text-orange font-semibold uppercase">free!</span></h2>
                
                <div class="max-w-[240px] space-y-6">
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