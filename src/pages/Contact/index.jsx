import React from 'react'
import ContactForm from '../../components/ContactForm'
import Heading from '../../components/Heading'
import ParagraphBlock from '../../components/ParagraphBlock'
import ButtonGeneric from '../../components/ButtonGeneric'

const Contact = () => {
    return (
        <main>

            <div className="max-w-[550px] p-4 md:py-16 md:pl-20 space-y-8">
                <Heading type='headingOne' line='left' headingOneContent="Need anything? Get in touch. We can help!" />

                <div className="space-y-6 text-center md:text-left">
                    <Heading type='headingTwo' headingTwoContent="Have any questions?" />
                    <ParagraphBlock paragraphContent="There is a chance somebody have already asked us." />
                    <ButtonGeneric bgColor="bg-orange text-white font-semibold" buttonName="Go to FAQ" />
                </div>

                <div>
                    <Heading type='headingTwo' headingTwoContent="Or send us a message. We would love to hear from you." />
                    <ContactForm />
                </div>
            </div>

        </main>
    )
}

export default Contact