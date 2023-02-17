import React from 'react';
import ProjectCard from '../../components/ProjectCard';
import ProjectListItem from '../../components/ProjectListItem';
import AddProjectForm from '../../components/Forms/AddProjectForm';
import Heading from '../../components/Heading';
import ParagraphBlock from '../../components/ParagraphBlock';
import lightbulb from '../../img/icons/lightbulb.png';
import { useState } from 'react';
import { regular } from '@fortawesome/fontawesome-svg-core/import.macro';
import arrowCircle from '../../img/icons/arrow-circle.png';
import { UserProject } from '../../context/ProjectsContext';
import { cardCalc } from '../../common/utils/Functions/cardCalc';
import sortArr from '../../common/utils/Functions/sortArr';
import filterArr from '../../common/utils/Functions/filterArr';

const Dashboard = () => {
  const [btnAdd, setBtnAdd] = useState(false);
  const cardData = cardCalc();
  const { projectArr, sortedArr, setSortedArr } = UserProject();

  function handleSort(filter, order, arr) {
    setSortedArr(sortArr(arr ? arr : projectArr, filter, order));
  }
  return (
    <main className="flex flex-col container-bigger">
      {projectArr ? (
        <>
          <section className="container-small pt-6 md:pt-16">
            <Heading
              type="headingOne"
              line="left"
              headingOneContent="My dashboard"
            />
            <div className="grid grid-flow-row gap-5 py-6">
              <div className="flex flex-row h-10 justify-between items-center lg:hidden">
                <Heading
                  type="headingTwo"
                  headingTwoContent="Add a new project"
                />
                <button
                  className="py-4 px-2"
                  onClick={() => setBtnAdd(!btnAdd)}
                >
                  <div className="relative">
                    <div className="w-7 h-1 rounded bg-darkGray" />
                    <div
                      className={`absolute top-0 w-7 h-1 rounded bg-darkGray transition-all duration-500 ease-in-out ${
                        !btnAdd ? 'rotate-90' : 'opacity-0'
                      }`}
                    />
                  </div>
                </button>
              </div>
              <div className="flex flex-row gap-4 items-center bg-grayish rounded-md">
                <img
                  src={lightbulb}
                  alt="lightbulb icon"
                  className="max-w-12 max-h-12"
                />
                <ParagraphBlock paragraphContent="DevNote count the invested time based on your project work status. Remember to change the status of your project." />
              </div>
            </div>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                !btnAdd ? 'max-h-0' : 'max-h-full'
              }`}
            >
              <AddProjectForm />
            </div>
          </section>
          <section className="flex flex-col container-small">
            <div className="max-w-full grid grid-flow-row gap-8 py-3 xl:max-h-72 md:py-6 md:grid-cols-2 xl:grid-cols-4">
              <ProjectCard
                onClick={() => {
                  handleSort('creation');
                }}
                title="All"
                icon={regular('clock')}
                content={`${projectArr.length} projects`}
                footer={`${cardData.daysTotal} days invested in all projects`}
                fromColor="from-amber-400"
                toColor="to-amber-200"
              />
              <ProjectCard
                onClick={() => {
                  handleSort('creation', '', filterArr(projectArr, ['Active']));
                }}
                title="Ongoing"
                icon={arrowCircle}
                alt="arrow circle icon"
                content={`${cardData.active} projects`}
                footer="Open projects"
                fromColor="from-lime-600"
                toColor="to-amber-200"
              />
              <ProjectCard
                onClick={() => {
                  handleSort('creation', '', filterArr(projectArr, ['Closed']));
                }}
                title="Closed"
                icon={regular('circle-check')}
                content={`${cardData.closed} projects`}
                footer="Closed and achieved projects"
                fromColor="from-lime-300"
                toColor="to-sky-500"
              />
              <ProjectCard
                onClick={() => {
                  handleSort(
                    'deadline',
                    'ascending',
                    filterArr(projectArr, ['Active', 'Paused']),
                  );
                }}
                title="Next deadline"
                icon={regular('hourglass')}
                content={`${cardData.nextDeadline} `}
                footer="The next project deadline"
                fromColor="from-red-500"
                toColor="to-amber-200"
              />
            </div>
            <ProjectListItem
              btnFunction={{ btnAdd, setBtnAdd }}
              sortFunction={{ sortedArr, handleSort }}
            />
          </section>
        </>
      ) : (
        <section className="m-auto">
          <h1 className="animate-pulse text-4xl">Loading...</h1>
        </section>
      )}
    </main>
  );
};

export default Dashboard;
