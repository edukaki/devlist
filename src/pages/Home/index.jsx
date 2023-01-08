import React from 'react'
import heroImageHome from '../../img/home/hero-img.png'
import ongoingIcon from '../../img/icons/ongoing-icon.png'
import doneIcon from '../../img/icons/done-icon.png'
import totalTimeIcon from '../../img/icons/total-time-icon.png'
import remainingTimeIcon from '../../img/icons/remaining-icon.png'

const Home = () => {
    return (
        <main className='min-h-[100vh]'>
            <section className='flex flex-col-reverse justify-around pt-6 md:flex-row text-darkGray'>
                <div className='flex flex-col tracking-wider font-roboto space-y-6 md:w-6/12 xl:w-4/12 my-auto p-5'>
                    <h1 className="font-courier font-bold text-4xl text-center pt-3 md:text-5xl md:text-left">DevNote</h1>
                    <p className="text-xl text-center m-auto pt-6 sm:w-2/3 md:text-left md:m-0">The ultimate <span className="font-courier uppercase font-bold text-orange">free</span> <span className="font-courier font-bold text-orange">developer</span> tool to keep track of your projects</p>
                    <input className="drop-shadow rounded w-2/5 place-self-center py-1 px-2 md:place-self-start lg:w-3/4" type="email" placeholder="email"></input>
                    <button className="bg-blue rounded-lg w-auto place-self-center md:place-self-start lg:w-1/2 py-2 px-3 text-white"type="button">Register</button>
                </div>

                <div className="md:w-5/12 ">
                    <img src={heroImageHome} alt="decorative Devnote features"/>
                </div>
            </section>

            <section>
                <div className="my-20 leading-9 font-roboto text-darkGray font-medium text-xl tracking-wider">
                    <h2 className="text-center">Track your <span className="font-courier font-semibold text-orange">projects</span>. Manage your <span className="font-courier font-semibold text-orange">time</span>. Get things <span className="font-courier font-semibold text-orange">done!</span></h2>
                    <p className="text-center">DevNote helps you keep things simple, efficient and organized.</p>
                </div>

                <div className="grid justify-items-center md:grid-cols-2 gap-y-8">
                    <div className="flex flex-col">
                        <img className="w-52 place-self-center" src={ongoingIcon} alt="ongoing projects"/>
                        <h3 className="w-52 text-left pb-4">Track ongoing projects</h3>
                        <p className="w-52 text-left">Help you keep your focus on the current project.</p>
                    </div>

                    <div className="flex flex-col">
                        <img className="w-52 place-self-center" src={doneIcon} alt="done projects"/>
                        <h3 className="w-52 text-left pb-4">Organize your projects</h3>
                        <p className="w-52 text-left">Easily access and visualize your done projects.</p>
                    </div>

                    <div className="flex flex-col">
                        <img className="w-52 place-self-center" src={totalTimeIcon} alt="total time invested"/>
                        <h3 className="w-52 text-left pb-4">Optmize the time invested</h3>
                        <p className="w-52 text-left">Keep track of invested time and use it smarter.</p>
                    </div>

                    <div className="flex flex-col">
                        <img className="w-52 place-self-center" src={remainingTimeIcon} alt="remaining time"/>
                        <h3 className="w-52 text-left pb-4">Deliver within the deadline</h3>
                        <p className="w-52 text-left">Check the remaining time and work on getting things done.</p>
                    </div>
                </div>
            </section>

            <section>
                <h2>Try it out! It's <span>free!</span></h2>
                <input type="email" placeholder="email"></input>
                <button type="button">Register</button>
            </section>
        </main>
    )
}

export default Home