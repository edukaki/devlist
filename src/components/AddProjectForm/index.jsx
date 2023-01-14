import React from 'react';
import { useFormik } from 'formik';
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

    });
    return (
        <form onSubmit={formik.handleSubmit}>

        </form>
    );
};

export default AddProjectForm
