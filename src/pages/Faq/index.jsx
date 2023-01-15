import HeadingOne from '../../components/HeadingOne'
import ParagraphBlock from '../../components/ParagraphBlock'
import ButtonQuestion from '../../components/ButtonQuestion'
import Ruler from '../../components/Ruler'
import faqImg from '../../img/faq/faq.png'

const Faq = () => {
    return (
        <main>
            
            <div className="w-6/12 mx-auto py-16 px-2 space-y-6 tracking-wider leading-8 lg:w-9/12 lg:ml-10 lg:px-24 xl:12/12 ">
            
            <div className="pl-4 bg-orange hover:bg-gradient-to-b from-orange to-green">
                <HeadingOne headingOneContent="Frequently Asked Questions"/>
            </div>

                <ButtonQuestion hidden='true' text="How do I add my projects to DevNote?"/>

                <ParagraphBlock bgColor="exist" hidden="true" paragraphContent="Add you project do DevNote by hitting the plus sign above your cards in your dashboard. Fill in the blank spaces and Devnote will sync automatically!"/>

                <Ruler/>
                
                <ButtonQuestion hidden='true' text="How do DevNote keep track of the time spent on each project?"/>
                
                <ParagraphBlock bgColor="exist" hidden="true" paragraphContent="In order to keep track of the time spent on each project, you simply need to change the status of your ongoing project from paused to in progress. DevNote will calcutae and display the invested time."/>
                
                <Ruler/>

                <ButtonQuestion hidden='true' text="Do I have to pay in order to use DevNote?"/>

                <ParagraphBlock bgColor="exist" hidden="true" paragraphContent="No. DevNote is completely FREE!"/>

            </div>

            <section className='flex flex-col justify-around md:flex-row'>
                <h2 className="text-xl my-auto text-center tracking-wider md:text-start md:px-4 md:w-6/12 lg:text-2xl">Still wondering if <span className="font-courier text-orange">DevNote is the right</span> tool for you?</h2>
                <img src={faqImg} alt="decorative question mark"></img>
            </section>    

        </main>
    )
}

export default Faq