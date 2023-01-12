import React from 'react'
import heroImgDesktop from '../../img/home/hero-img-desktop.png'
import heroImgMobile from '../../img/home/hero-img-mobile.png'
import ongoingIcon from '../../img/icons/ongoing-icon.png'
import doneIcon from '../../img/icons/done-icon.png'
import totalTimeIcon from '../../img/icons/clock-icon.png'
import remainingTimeIcon from '../../img/icons/remaining-icon.png'
import InfoCard from '../../components/InfoCard'
import ButtonGeneric from '../../components/ButtonGeneric'

const Home = () => {
    return (
        <main className='min-h-[100vh] scroll-smooth bg-lightGray'>
            <section className='flex flex-col justify-around text-darkGray md:relative'>
                <picture className="md:relative">
                    <source media="(max-width: 767px)" srcset={heroImgMobile}/>
                    <source media="(min-width: 768px)" srcset={heroImgDesktop}/>
                    <img src={heroImgMobile} alt="Decorative hero"/>
                </picture>

                <div className='flex flex-col tracking-wider font-roboto space-y-6 p-5 ml-12 md:absolute md:top-10 left-10 md:w-6/12 xl:w-5/12 my-auto'>
                    <h1 className="font-courier font-bold text-4xl text-center pt-3 lg:text-5xl md:text-left lg:text-6xl">DevNote</h1>
                    <p className="text-xl text-center m-auto pt-6 sm:w-2/3 md:text-left md:m-0 lg:text-4xl">The ultimate <span className="font-courier uppercase font-bold text-orange">free</span> <span className="font-courier font-bold text-orange">developer</span> tool to keep track of your projects</p>
                    <input className="drop-shadow rounded w-2/5 place-self-center py-2 px-3 md:place-self-start lg:w-3/4" type="email" placeholder="email"></input>

                    <ButtonGeneric bgColor="bg-blue" hoverColor="bg-sky-400" textColor="text-white" placeSelf="md:place-self-start" ringColor="ring-blue" buttonName="Register" width="w-1/2">
                    </ButtonGeneric>
                </div>
            </section>

            <section>
                <div className="my-20 leading-9 font-roboto text-darkGray font-medium text-xl tracking-wider lg:text-2xl">
                    <h2 className="text-center">Track your <span className="font-courier font-semibold text-orange">projects</span>. Manage your <span className="font-courier font-semibold text-orange">time</span>. Get things <span className="font-courier font-semibold text-orange">done!</span></h2>
                    <p className="text-center mt-4 m-auto md:w-5/12">DevNote helps you keep things simple, efficient and organized.</p>
                </div>

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

            <section className="my-24 flex flex-col w-6/12 space-y-6 items-center m-auto font-roboto md:text-left">
                <h2 className="mb-8 text-2xl tracking-wider">Try it out! It's <span className="font-courier text-orange font-semibold">free!</span></h2>
                <input className="drop-shadow rounded w-8/12 place-self-center m-auto py-1 px-2 lg:w-6/12" type="email" placeholder="email"></input>
                <ButtonGeneric bgColor="bg-blue" hoverColor="bg-sky-400" textColor="text-white" placeSelf="place-self-start" ringColor="ring-blue" buttonName="Register" width="w-3/12">
                </ButtonGeneric>
            </section>
        </main>
    )
}

export default Home