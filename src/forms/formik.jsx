import React from 'react';
import { useFormik, Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

export default function AllAboutFormik() {
  const validationSchema = yup.object({
    firstName: yup.string().required('Required'),
    lastName: yup.string().required('Required'),
    email: yup.string().email('Invalid email format').required('Required'),
  });
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
  };
  const onSubmit = (values) => {
    console.log('filter onSubmit', values);
  };

  const validate = (values) => {
    let errors = {};
    if (!values.firstName) errors.firstName = 'firstName required';
    if (!values.lastName) errors.lastName = 'lastName required';
    if (!values.email) errors.email = 'email required';
    return errors;
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <div>
          <label htmlFor="firstName">firstName</label>
          <Field type="text" name="firstName" id="firstName" />
          <ErrorMessage name="firstName" />
        </div>
        <div>
          <label htmlFor="lastName">lastName</label>
          <Field type="text" name="lastName" id="lastName" />
          <ErrorMessage name="lastName" />
        </div>
        <div>
          <label htmlFor="email">email</label>
          <Field type="text" name="email" id="email" />
          <ErrorMessage name="email" />
        </div>
        <button type="submit">Submit </button>
      </Form>
    </Formik>
  );
}
