import React, { useState } from 'react';
import ContactForm from '../../components/Forms/ContactForm';
import Heading from '../../components/Heading';
import ParagraphBlock from '../../components/ParagraphBlock';
import ButtonGeneric from '../../components/ButtonGeneric';
import Thanks from '../../components/Thanks';

const Contact = () => {
  const [redirect, setRedirect] = useState(false);

  return (
    <main>
      {redirect ? (
        <Thanks />
      ) : (
        <div className="container-bigger p-4 md:py-16 md:m-auto md:px-10 space-y-8">
          <Heading
            type="headingOne"
            line="left"
            headingOneContent="Need anything? Get in touch. We can help!"
          />

          <div className="space-y-6 text-center md:text-left">
            <Heading
              type="headingTwo"
              headingTwoContent="Have any questions?"
            />
            <ParagraphBlock paragraphContent="There is a chance somebody have already asked us." />
            <ButtonGeneric
              bgColor="bg-orange text-white font-semibold"
              buttonName="Go to FAQ"
            />
          </div>

          <div>
            <div className="md:text-center">
              <Heading
                type="headingTwo"
                headingTwoContent="Or send us a message. We would love to hear from you."
              />
            </div>
            <ContactForm redirect={{ setRedirect }} />
          </div>
        </div>
      )}
    </main>
  );
};

export default Contact;
