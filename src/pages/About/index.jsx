const About = () => {
    return (
        <main> 
            <div className="w-6/12 m-auto py-16 px-8 space-y-6 lg:w-8/12 lg:ml-10 lg:px-24 xl:mx-96 xl:12/12">
                <h1 className="font-courier text-2xl font-bold text-darkGray">About DevNote</h1>

                <h2 className="font-courier text-lg font-semibold text-darkGray">Time Is to Be Invested, Not Spent</h2>
                <p>DevNote is the only developer tool created to help you keep track of your projects, check what you have done and manage your time.</p>
            </div>

            <div className="w-6/12 m-auto py-16 px-8 space-y-6 mb-10 lg:w-8/12 lg:ml-10 lg:px-24 xl:mx-96 xl:12/12">
                <h2 className="font-courier text-lg font-semibold text-darkGray">The History Behind</h2>
                <ul className="space-y-6 ">
                    <li>In 2022 Eduardo Arakaki came up with the idea of creating a personal project management tool based on his need to keep track of his developer projects.</li>
                    <li>In the same year, he invested his time in creating mechanisms to bring the idea live. DevNote was born.</li>
                    <li>Next year, in 2023, Eduardo invited Caroline Almeida Nikolic, a developer colleague, to participate in the project. They came up with the design and interactions and made Devnote available to the world.</li>
                </ul>
            </div>
        </main>
        )
    }
    
    export default About