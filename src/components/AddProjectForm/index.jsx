import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { v4 as uuid } from 'uuid'

const AddProjectForm = () => {
    const formik = useFormik({
        initialValues: {
            key: uuid(),
            project: '',
            client: '',
            status: '',
            start: '',
            deadline: '',
        },
        validationSchema: Yup.object({
            project: Yup.string()
                .min(5, 'Must be at least 5 characters')
                .max(30, 'Must be 15 characters or less')
                .required('Required'),
            client: Yup.string()
                .max(20, 'Must be 20 characters or less'),
            status: Yup.string().required('Required'),
            start: Yup.date()
            .required('Required'),
            deadline: Yup.date()
            .min(Yup.ref('start'), 'Deadline can not be earlier than the start date')
            .required('Required'),
                }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>

        </form>
    );
};

export default AddProjectForm
