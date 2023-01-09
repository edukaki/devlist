import React from 'react'

const InfoCard = (props) => {
    return (

        <div className="flex flex-col">
            <img className="w-40 place-self-center" src={props.src} alt={props.alt} />
            <h3 className="w-48 text-center pb-4 font-courier font-semibold tracking-wider md:text-left">{props.title}</h3>
            <p className="w-48 text-center md:text-left tracking-wider lg:w-40">{props.description}</p>
        </div>

    )
}

export default InfoCard