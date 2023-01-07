import React from 'react'
import heroImageHome from '../../img/home/hero-img.png'

const Home = () => {
    return (
        <main className='min-h-[100vh]'>
            <div>
                <h1>DevNote</h1>
                <p>The ultimate <span>FREE </span><span>developer</span> tool to keep track of your projects</p>
                <input type="email" placeholder="email"></input>
                <button type="button">Register</button>
            </div>

            <div>
                <img src={heroImageHome} alt="decorative Devnote features"/>
            </div>
        </main>
    )
}

export default Home