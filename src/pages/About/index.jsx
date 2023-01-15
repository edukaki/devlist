import ParagraphBlock from "../../components/ParagraphBlock";
import HeadingOne from "../../components/HeadingOne";
import HeadingTwo from "../../components/HeadingTwo";

const About = () => {
    return (
        <main> 
            <div className="w-6/12 m-auto py-16 px-8 space-y-6 tracking-wider leading-8 lg:w-8/12 lg:ml-10 lg:px-24 xl:mx-96 xl:12/12">
                
                <div className="pl-4 bg-orange hover:bg-gradient-to-b from-orange to-green">
                    <HeadingOne headingOneContent="About DevNote"></HeadingOne>
                </div>
               
                <HeadingTwo headingTwoContent="Time Is to Be Invested, Not Spent"></HeadingTwo>

                <ParagraphBlock paragraphContent="DevNote is the only developer tool created to help you keep track of your projects, check what you have done and manage your time."></ParagraphBlock>
            </div>

            <div className="w-6/12 m-auto py-16 px-8 space-y-6 mb-10 tracking-wider leading-8 lg:w-8/12 lg:ml-10 lg:px-24 xl:mx-96 xl:12/12">
                <HeadingTwo position="relative" headingTwoContent="The History Behind"></HeadingTwo>

                <ParagraphBlock paragraphContent="In 2022 Eduardo Arakaki came up with the idea of creating a personal project management tool based on his need to keep track of his developer projects."></ParagraphBlock>

                <ParagraphBlock paragraphContent="In the same year, he invested his time in creating mechanisms to bring the idea live. DevNote was born."></ParagraphBlock>

                <ParagraphBlock paragraphContent="Next year, in 2023, Eduardo invited Caroline Almeida Nikolic, a developer colleague, to participate in the project. They came up with the design and interactions and made Devnote available to the world."></ParagraphBlock>
            </div>
        </main>
        )
    }
    
    export default About