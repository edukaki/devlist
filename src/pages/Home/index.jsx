import React from 'react'
import heroImageHome from '../../img/home/hero-img.png'
import ongoingIcon from '../../img/icons/ongoing-icon.png'
import doneIcon from '../../img/icons/done-icon.png'
import totalTimeIcon from '../../img/icons/total-time-icon.png'
import remainingTimeIcon from '../../img/icons/remaining-icon.png'

const Home = () => {
    return (
        <main className='min-h-[100vh] scroll-smooth'>
            <section className='flex flex-col-reverse justify-around pt-6 md:flex-row text-darkGray'>
                <div className='flex flex-col tracking-wider font-roboto space-y-6 md:w-6/12 xl:w-5/12 my-auto p-5'>
                    <h1 className="font-courier font-bold text-4xl text-center pt-3 lg:text-5xl md:text-left lg:text-6xl">DevNote</h1>
                    <p className="text-xl text-center m-auto pt-6 sm:w-2/3 md:text-left md:m-0 lg:text-4xl">The ultimate <span className="font-courier uppercase font-bold text-orange">free</span> <span className="font-courier font-bold text-orange">developer</span> tool to keep track of your projects</p>
                    <input className="drop-shadow rounded w-2/5 place-self-center py-1 px-2 md:place-self-start lg:w-3/4" type="email" placeholder="email"></input>
                    <button className="bg-blue hover:bg-[#38BDF8] hover:-translate-y-0.5 transform rounded-lg w-auto place-self-center py-2 px-3 text-white md:place-self-start lg:w-1/2" type="button">Register</button>
                </div>

                <div className="md:w-5/12 ">
                    <img src={heroImageHome} alt="decorative Devnote features"/>
                </div>
            </section>

            <section>
                <div className="my-20 leading-9 font-roboto text-darkGray font-medium text-xl tracking-wider lg:text-2xl">
                    <h2 className="text-center">Track your <span className="font-courier font-semibold text-orange">projects</span>. Manage your <span className="font-courier font-semibold text-orange">time</span>. Get things <span className="font-courier font-semibold text-orange">done!</span></h2>
                    <p className="text-center mt-4 m-auto md:w-5/12">DevNote helps you keep things simple, efficient and organized.</p>
                </div>

                <div className="grid justify-items-center font-roboto text-darkGray md:grid-cols-2 gap-y-8">
                    <div className="flex flex-col">
                        <img className="w-32 place-self-center md:place-self-start" src={ongoingIcon} alt="ongoing projects"/>
                        <h3 className="w-48 text-center pb-4 font-courier font-semibold tracking-wider md:text-left">Track ongoing projects</h3>
                        <p className="w-48 text-center md:text-left tracking-wider lg:w-40">Help you keep your focus on the current project.</p>
                    </div>

                    <div className="flex flex-col">
                        <img className="w-32 place-self-center md:place-self-start" src={doneIcon} alt="done projects"/>
                        <h3 className="w-48 text-center pb-4 font-courier font-semibold tracking-wider md:text-left">Organize your projects</h3>
                        <p className="w-48 text-center md:text-left tracking-wider lg:w-40">Easily access and visualize your done projects.</p>
                    </div>

                    <div className="flex flex-col">
                        <img className="w-32 place-self-center md:place-self-start" src={totalTimeIcon} alt="total time invested"/>
                        <h3 className="w-48 text-center pb-4 font-courier font-semibold tracking-wider md:text-left">Optmize the time invested</h3>
                        <p className="w-48 text-center md:text-left tracking-wider lg:w-40">Keep track of invested time and use it smarter.</p>
                    </div>

                    <div className="flex flex-col">
                        <img className="w-32 place-self-center md:place-self-start" src={remainingTimeIcon} alt="remaining time"/>
                        <h3 className="w-48 text-center pb-4 font-courier font-semibold tracking-wider md:text-left">Deliver within the deadline</h3>
                        <p className="w-48 text-center md:text-left tracking-wider lg:w-42">Check the remaining time and work on getting things done.</p>
                    </div>
                </div>
            </section>

            <section className="my-24 flex flex-col w-6/12 space-y-6 items-center m-auto font-roboto md:text-left">
                <h2 className="mb-8 text-2xl tracking-wider">Try it out! It's <span className="font-courier text-orange font-semibold">free!</span></h2>
                <input className="drop-shadow rounded w-8/12 place-self-center m-auto py-1 px-2 lg:w-6/12" type="email" placeholder="email"></input>
                <button className="bg-blue hover:bg-[#38BDF8] hover:-translate-y-0.5 transform rounded-lg w-auto place-self-center m-auto py-2 px-3 text-white lg:w-3/12" type="button">Register</button>
            </section>
        </main>
    )
}

export default Home