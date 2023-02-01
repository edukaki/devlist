import React, { useState } from 'react'
import ContactForm from '../../components/ContactForm'
import Heading from '../../components/Heading'
import ParagraphBlock from '../../components/ParagraphBlock'
import ButtonGeneric from '../../components/ButtonGeneric'
import thanksImg from '../../img/contact/thanks.jpg'
const Contact = () => {
    const [redirect, setRedirect] = useState(false)

    return (
        <main>
            {redirect ? (
                <div className='flex flex-row justify-center min-h-[calc(100vh-440px)] md:min-h-[calc(100vh-270px)] py-20'>
                    <div className='row-start-2 w-11/12 h-fit p-6 m-auto space-y-6 md:w-fit md:py-28 md:px-14 md:space-y-10 bg-white rounded-xl shadow-md'>
                        <img src={thanksImg} alt="mail confirmation" className='w-72 pl-8 m-auto' />
                        <p className='font-courier text-center leading-8 md:text-xl md:leading-[57px]'><span className='font-bold'>Message sent successfully!</span><br />
                            Thank you for reaching out!<br />
                            We received your message and will reply to you soon!
                        </p>
                    </div>
                </div>
            ) :

                <div className="container-bigger p-4 md:py-16 md:m-auto md:px-10 space-y-8">
                    <Heading type='headingOne' line='left' headingOneContent="Need anything? Get in touch. We can help!" />

                    <div className="space-y-6 text-center md:text-left">
                        <Heading type='headingTwo' headingTwoContent="Have any questions?" />
                        <ParagraphBlock paragraphContent="There is a chance somebody have already asked us." />
                        <ButtonGeneric bgColor="bg-orange text-white font-semibold" buttonName="Go to FAQ" />
                    </div>

                    <div>
                        <div className='md:text-center'><Heading type='headingTwo' headingTwoContent="Or send us a message. We would love to hear from you." /></div>
                        <ContactForm redirect={{ setRedirect }} />
                    </div>
                </div>
            }

        </main>
    )
}

export default Contact