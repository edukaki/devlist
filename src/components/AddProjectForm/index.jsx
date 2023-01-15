import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { v4 as uuid } from 'uuid'
import { UserProject } from '../../context/ProjectsContext';

const AddProjectForm = () => {
    const { setProject } = UserProject()

    const formik = useFormik({
        initialValues: {
            key: uuid(),
            project: '',
            repository: '',
            client: '',
            status: '',
            start: '',
            deadline: '',
        },
        validationSchema: Yup.object({
            project: Yup.string().required('Required')
                .min(5, 'Must be at least 5 characters')
                .max(30, 'Must be 15 characters or less'),
            repository: Yup.string().url(),
            client: Yup.string()
                .max(20, 'Must be 20 characters or less'),
            status: Yup.string().required('Required'),
            start: Yup.date().required('Required'),
            deadline: Yup.date()
                .min(Yup.ref('start'), 'Deadline can not be earlier than the start date')
                .required('Required'),
        }),
        onSubmit: (values, {resetForm}) => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <form onSubmit={formik.handleSubmit} className="project-form">

            <div className='flex gap-10'>
                <div className='label-input'>
                    <label className='form-label' htmlFor="project">Project name</label>
                    <input
                        id="project"
                        name="project"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.project}
                    />
                    {formik.touched.project && formik.errors.project ? (
                        <div className='errors'>*{formik.errors.project}</div>
                    ) : null}
                </div>

                <div className='label-input'>
                    <label className='form-label' htmlFor="client">Client</label>
                    <input
                        id="client"
                        name="client"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.client}
                    />
                </div>
            </div>

            <div className='label-input'>
                <label className='form-label' htmlFor="repository">Repository</label>
                <input
                    id="repository"
                    name="repository"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.repository}
                />
            </div>

            <div className='label-input'>
                <label className='form-label' htmlFor="status">Status</label>
                <select
                    name="status"
                    value={formik.values.status}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                >
                    <option />
                    <option value="active" label="Active" />
                    <option value="paused" label="Paused" />
                    <option value="closed" label="Closed" />
                </select>
                {formik.touched.status && formik.errors.status ? (
                    <div className='errors'>*{formik.errors.status}</div>
                ) : null}
            </div>

            <div className='label-input'>
                <label className='form-label' htmlFor="start">Start date</label>
                <input
                    id="start"
                    name="start"
                    type="date"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.start}
                />
                {formik.touched.start && formik.errors.start ? (
                    <div className='errors'>*{formik.errors.start}</div>
                ) : null}
            </div>

            <div className='label-input'>
                <label className='form-label' htmlFor="deadline">Deadline</label>
                <input
                    id="deadline"
                    name="deadline"
                    type="date"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.deadline}
                />
                {formik.touched.deadline && formik.errors.deadline ? (
                    <div className='errors'>*{formik.errors.deadline}</div>
                ) : null}
            </div>

            <button type="submit">Submit</button>
        </form>
    );
};

export default AddProjectForm
