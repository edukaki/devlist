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
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <form onSubmit={contact.handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input
                id="firstName"
                name="firstName"
                type="text"
                onChange={contact.handleChange}
                onBlur={contact.handleBlur}
                value={contact.values.firstName}
            />
            {contact.touched.firstName && contact.errors.firstName ? (
                <div>{contact.errors.firstName}</div>
            ) : null}

            <label htmlFor="lastName">Last Name</label>
            <input
                id="lastName"
                name="lastName"
                type="text"
                onChange={contact.handleChange}
                onBlur={contact.handleBlur}
                value={contact.values.lastName}
            />
            {contact.touched.lastName && contact.errors.lastName ? (
                <div>{contact.errors.lastName}</div>
            ) : null}

            <label htmlFor="email">Email Address</label>
            <input
                id="email"
                name="email"
                type="email"
                onChange={contact.handleChange}
                onBlur={contact.handleBlur}
                value={contact.values.email}
            />
            {contact.touched.email && contact.errors.email ? (
                <div>{contact.errors.email}</div>
            ) : null}

            <label htmlFor="message">Message</label>
            <textarea
                id="message"
                name="message"
                type="text"
                onChange={contact.handleChange}
                onBlur={contact.handleBlur}
                value={contact.values.message}
            />
            {contact.touched.message && contact.errors.message ? (
                <div>{contact.errors.message}</div>
            ) : null}

            <button type="submit">Submit</button>
        </form>
    );
};

export default ContactForm
