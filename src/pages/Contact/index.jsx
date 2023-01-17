import React from 'react'
import ContactForm from '../../components/ContactForm'
import HeadingOne from '../../components/HeadingOne'
import HeadingTwo from '../../components/HeadingTwo'
import ParagraphBlock from '../../components/ParagraphBlock'
import ButtonGeneric from '../../components/ButtonGeneric'

const Contact = () => {
    return (
        <main>

            <div className="max-w-[550px] p-10 space-y-8">
                <div className="pl-4 mb-8 bg-orange hover:bg-gradient-to-b from-orange to-green">
                    <HeadingOne headingOneContent="Need anything? Get in touch. We can help!"/>
                </div>

                <div className="space-y-6 text-center md:text-left">
                    <HeadingTwo headingTwoContent="Have any questions?"/>
                    <ParagraphBlock paragraphContent="There is a chance somebody have already asked us."/>
                    <ButtonGeneric buttonName="Go to FAQ"/>
                </div>

                <div>
                    <HeadingTwo headingTwoContent="Or send us a message. We would love to hear from you."/>
                    <ContactForm />
                </div>
            </div>

        </main>
    )
}

export default Contact