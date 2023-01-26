import ParagraphBlock from "../../components/ParagraphBlock";
import Heading from "../../components/Heading";

const About = () => {
    return (
        <main>
            <div className="m-auto p-4 md:py-16 md:pl-20 space-y-6 tracking-wider leading-8 xl:px-20">

                <Heading type='headingOne' line='left' headingOneContent="About DevNote"></Heading>

                <Heading type='headingTwo' headingTwoContent="Time Is to Be Invested, Not Spent"></Heading>

                <ParagraphBlock width="lg:w-6/12" paragraphContent="DevNote is the only developer tool created to help you keep track of your projects, check what you have done and manage your time. An easy-to-use and intuitive platform where you add your projects and have an overview of your progress."></ParagraphBlock>
                <ParagraphBlock width="lg:w-6/12" paragraphContent="We know that one of the biggest challenges companies face is delivering quality software within the deadline. If you are a company and want to assist and empower the developers to manage and optimize their time, DevNote is also for you."></ParagraphBlock>
                <ParagraphBlock width="lg:w-6/12" paragraphContent="From conceptualization to the actual development, DevNote was created by developers and for developers. We know the importance of having our projects organized and to understand how much time we invested in each of them. By doing so we can improve and deliver efficiently."></ParagraphBlock>
            </div>

            <div className="m-auto p-4 md:py-16 md:pl-20 space-y-6 mb-10 tracking-wider leading-8 xl:px-20">
                <Heading type='headingTwo' line='bottom' headingTwoContent="The History Behind"></Heading>

                <ParagraphBlock width="lg:w-6/12" paragraphContent="In 2022 Eduardo Arakaki came up with the idea of creating a personal project management tool based on his need to keep track of his developer projects."></ParagraphBlock>

                <ParagraphBlock width="lg:w-6/12" paragraphContent="In the same year, he invested his time in creating mechanisms to bring the idea live. DevNote was born."></ParagraphBlock>

                <ParagraphBlock width="lg:w-6/12" paragraphContent="Next year, in 2023, Eduardo invited Caroline Almeida Nikolic, a developer colleague, to participate in the project. They came up with the design and interactions and made Devnote available to the world."></ParagraphBlock>
            </div>

        </main>
    )
}

export default About