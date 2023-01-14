import HeadingOne from "../../components/HeadingOne"
import HeadingTwo from "../../components/HeadingTwo"
import ParagraphBlock from "../../components/ParagraphBlock"
import Ruler from "../../components/Ruler"

const Faq = () => {
    return (
        <main>
            
            <div className="w-6/12 m-auto py-16 px-8 space-y-6 tracking-wider leading-8 lg:w-9/12 lg:ml-10 lg:px-24 xl:mx-96 xl:12/12 ">
                <HeadingOne headingOneContent="Frequently Asked Questions"></HeadingOne>

                <button className="text-left"><HeadingTwo headingTwoContent="How do I add my projects to DevNote?"></HeadingTwo>  <i class="fa-solid fa-caret-down"></i></button>

                <ParagraphBlock bgColor="exist" hidden="true" paragraphContent="Add you project do DevNote by hitting the plus sign above your cards in your dashboard. Fill in the blank spaces and Devnote will sync automatically!"></ParagraphBlock>

                <Ruler></Ruler>

                <button className="text-left"><HeadingTwo headingTwoContent="How do DevNote keep track of the time spent on each project?"></HeadingTwo>  <i class="fa-solid fa-caret-down"></i></button>

                <ParagraphBlock bgColor="exist" hidden="true" paragraphContent="In order to keep track of the time spent on each project, you simply need to change the status of your ongoing project from paused to in progress. DevNote will calcutae and display the invested time."></ParagraphBlock>
                
                <Ruler></Ruler>

                <button className="text-left"><HeadingTwo headingTwoContent="Do I have to pay in order to use DevNote?"></HeadingTwo>  <i class="fa-solid fa-caret-down"></i></button>

                <ParagraphBlock bgColor="exist" hidden="true" paragraphContent="No. DevNote is completely FREE!"></ParagraphBlock>
                </div>
           
        </main>
    )
}

export default Faq