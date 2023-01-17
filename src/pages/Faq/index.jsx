import HeadingOne from '../../components/HeadingOne'
import DropdownQuestion from '../../components/DropdownQuestion'
import Ruler from '../../components/Ruler'
import faqImg from '../../img/faq/faq.png'
import ContactForm from '../../components/ContactForm'
import ParagraphBlock from '../../components/ParagraphBlock'

const Faq = () => {
    return (
        <main>

            <div className="max-w-[550px] p-4 md:py-16 md:pl-20 pr-4 space-y-6 tracking-wider leading-8">

                <div className="pl-4 bg-orange hover:bg-gradient-to-b from-orange to-green">
                    <HeadingOne headingOneContent="Frequently Asked Questions" />
                </div>

                <DropdownQuestion text="How do I add my projects to DevNote?"
                    bgColor="exist" paragraphContent="Add you project do DevNote by hitting the plus sign above your cards in your dashboard. Fill in the blank spaces and Devnote will sync automatically!" />

                <Ruler />

                <DropdownQuestion text="How do DevNote keep track of the time spent on each project?"
                    bgColor="exist" paragraphContent="In order to keep track of the time spent on each project, you simply need to change the status of your ongoing project from paused to in progress. DevNote will calcutae and display the invested time." />

                <Ruler />

                <DropdownQuestion text="Do I have to pay in order to use DevNote?"
                    bgColor="exist" paragraphContent="No. DevNote is completely FREE!" />
            </div>

            <section className="flex flex-col justify-around md:flex-row max-w-[2000px] m-auto">
                <h2 className="text-xl my-auto text-center tracking-wider md:text-start md:px-4 md:w-6/12 lg:text-2xl">Still wondering if <span className="font-courier text-orange">DevNote is the right</span> tool for you?</h2>
                <img src={faqImg} alt="decorative question mark"></img>
            </section>

            <section className="max-w-[550px] p-4 md:py-16 md:pl-20 space-y-8">
                <ParagraphBlock paragraphContent="Send us your question. We will be glad to help you out!"/>
                <ContactForm />
            </section>

        </main>
    )
}

export default Faq