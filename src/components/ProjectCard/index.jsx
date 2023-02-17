import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ProjectCard = (props) => {
  return (
    <div
      onClick={props.onClick}
      className={`grid grid-rows-3 items-center gap-2 rounded-lg p-6 max-w-full min-h-[200px] bg-gradient-to-br hover:scale-110 transition duration-500 ease-in-out hover:cursor-pointer ${props.fromColor} ${props.toColor} border-gray-400 shadow-lg`}
    >
      <div className="flex flex-row gap-4">
        {!props.alt ? (
          <FontAwesomeIcon icon={props.icon} size="2xl" />
        ) : (
          <img className="w-8 h-8" src={props.icon} alt={props.alt} />
        )}
        <h2 className="row-span-2 text-xl text-black font-bold tracking-wider">
          {props.title}
        </h2>
      </div>
      <span className="row-span-1 text-2xl text-black font-bold tracking-wider">
        {props.content}
      </span>
      <h4 className="row-span-1 text-l text-black tracking-wider">
        {props.footer}
      </h4>
    </div>
  );
};

export default ProjectCard;
