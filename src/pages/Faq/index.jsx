import React from 'react';
import Heading from '../../components/Heading';
import DropdownQuestion from '../../components/DropdownQuestion';
import Ruler from '../../components/Ruler';
import faqImg from '../../img/faq/faq.png';
import ContactForm from '../../components/Forms/ContactForm';
import ParagraphBlock from '../../components/ParagraphBlock';
import faqHelpImg from '../../img/faq/faq-help.png';
import Thanks from '../../components/Thanks';
import { useState } from 'react';

const Faq = () => {
  const [redirect, setRedirect] = useState(false);

  return (
    <main>
      {redirect ? (
        <Thanks />
      ) : (
        <>
          <section className="container-bigger container-small flex flex-col md:flex-row">
            <div className="p-4 md:py-16 pr-4 space-y-6 tracking-wider leading-8 xl:w-8/12">
              <Heading
                line="left"
                type="headingOne"
                headingOneContent="Frequently Asked Questions"
              />

              <DropdownQuestion
                text="How do I add my projects to DevNote?"
                bgColor="exist"
                paragraphContent="Add you project do DevNote by hitting the plus sign above your cards in your dashboard. Fill in the blank spaces and Devnote will sync automatically!"
              />

              <Ruler />

              <DropdownQuestion
                text="How do DevNote keep track of the time spent on each project?"
                bgColor="exist"
                paragraphContent="In order to keep track of the time spent on each project, you simply need to change the status of your ongoing project from paused to in progress. DevNote will calcutae and display the invested time."
              />

              <Ruler />

              <DropdownQuestion
                text="Do I have to pay in order to use DevNote?"
                bgColor="exist"
                paragraphContent="No. DevNote is completely FREE!"
              />

              <Ruler />

              <DropdownQuestion
                text="Why would my company use DevNote?"
                bgColor="exist"
                paragraphContent="This is an excelent question. If your company has a development team, then DevNote is for you. DevNote empowers the developers to keep track of the time spent on projects, so they can be more efficient and deliver on deadline."
              />
            </div>

            <div className="max-w-[500px] p-2 mx-auto">
              <img src={faqHelpImg} alt="a person helping another"></img>
            </div>
          </section>

          <section className="container-bigger container-small flex flex-col-reverse justify-around md:flex-row m-auto space-y-8">
            <img src={faqImg} alt="decorative question mark"></img>

            <div className="flex flex-col text-center space-y-4 md:text-left md:place-content-center">
              <h2 className="text-xl text-center tracking-wider md:text-start lg:text-4xl">
                Still wondering if{' '}
                <span className="font-courier text-orange">
                  DevNote is the right
                </span>{' '}
                tool for you?
              </h2>
              <ParagraphBlock
                fontSize="lg:text-3xl"
                paragraphContent="Send us your question. We will be glad to help you out!"
              />
            </div>
          </section>

          <section className="container-bigger container-small p-4 md:py-16 space-y-8">
            <div className="text-center">
              <Heading
                type="headingTwo"
                headingTwoContent="Send us your question by filling out the form"
              />
            </div>
            <ContactForm redirect={{ setRedirect }} />
          </section>
        </>
      )}
    </main>
  );
};

export default Faq;
