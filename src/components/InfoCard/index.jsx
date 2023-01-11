import React from 'react'

const InfoCard = (props) => {
    return (

        <div className="flex flex-col">
            <img className="w-36 place-self-center" src={props.src} alt={props.alt} />
            <h3 className="w-48 place-self-center text-center pb-4 font-courier font-semibold tracking-wider">{props.title}</h3>
            <p className="w-48 place-self-center text-center tracking-wider lg:w-40">{props.description}</p>
        </div>

    )
}

export default InfoCard