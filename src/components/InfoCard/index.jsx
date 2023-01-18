import React from 'react'

const InfoCard = (props) => {
    return (

        <div className="flex flex-col px-3 mx-16 my-10 pb-14 bg-grayish rounded-xl drop-shadow-md hover:scale-125 transition duration-500 ease-in-out lg:m-0">
            <img className="w-36 place-self-center" src={props.src} alt={props.alt} />
            <h3 className="w-48 place-self-center text-center pb-4 font-courier font-semibold tracking-wider">{props.title}</h3>
            <p className="w-48 line-clamp-3 place-self-center text-center tracking-wider lg:w-40">{props.description}</p>
        </div>

    )
}

export default InfoCard