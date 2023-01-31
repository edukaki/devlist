import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const ContactForm = () => {

    const contact = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            message: '',
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
            lastName: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            message: Yup.string().required('Required').min(15, 'Must be at least 15 characters')
        }),
    });

    return (
        <form action='https://api.web3forms.com/submit' netlify method='POST' className="flex flex-col py-6 font-courier text-darkGray space-y-3 m-auto max-w-[500px]">
            <input type='hidden' name="access_key" value={process.env.REACT_APP_WEB3FORMS_API_KEY} />
            <label htmlFor="firstName" className="font-semibold">First Name</label>
            <input
                id="firstName"
                name="firstName"
                type="text"
                onChange={contact.handleChange}
                onBlur={contact.handleBlur}
                value={contact.values.firstName}
                className="rounded-md py-2 px-3"
            />
            {contact.touched.firstName && contact.errors.firstName ? (
                <div className='errors'>{contact.errors.firstName}</div>
            ) : null}

            <label htmlFor="lastName" className="font-semibold">Last Name</label>
            <input
                id="lastName"
                name="lastName"
                type="text"
                onChange={contact.handleChange}
                onBlur={contact.handleBlur}
                value={contact.values.lastName}
                className="rounded-md py-2 px-3"
            />
            {contact.touched.lastName && contact.errors.lastName ? (
                <div className='errors'>{contact.errors.lastName}</div>
            ) : null}

            <label htmlFor="email" className="font-semibold">Email Address</label>
            <input
                id="email"
                name="email"
                type="email"
                onChange={contact.handleChange}
                onBlur={contact.handleBlur}
                value={contact.values.email}
                className="rounded-md py-2 px-3"
            />
            {contact.touched.email && contact.errors.email ? (
                <div className='errors'>{contact.errors.email}</div>
            ) : null}

            <label htmlFor="message" className="font-semibold">Message</label>
            <textarea
                id="message"
                name="message"
                type="text"
                onChange={contact.handleChange}
                onBlur={contact.handleBlur}
                value={contact.values.message}
                className="rounded-md py-2 px-3 min-h-[250px]"
            />
            {contact.touched.message && contact.errors.message ? (
                <div className='errors'>{contact.errors.message}</div>
            ) : null}

            <input type="hidden" name="redirect" value="http://localhost:3000/" />

            <button type="submit" className="bg-orange text-white text-lg font-semibold p-2 rounded-md w-8/12 m-auto hover:bg-lightOrange hover:text-darkGray active:bg-[#ff8300] active:scale-110 transform duration-500 ease-in-out">Send</button>
        </form>
    );
};

export default ContactForm
