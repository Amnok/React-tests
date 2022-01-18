import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

export default function FormWithYup() {
  const validationSchema = yup.object({
    firstName: yup.string().required('Required'),
    lastName: yup.string().required('Required'),
    email: yup.string().email('Invalid email format').required('Required'),
  });
  const initialValues = {
    firstName: '',
    lastName: '',
    details: '',
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
  console.log('values', formik.values);
  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="firstName">firstName</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.firstName && formik.errors.firstName && (
          <div style={{ color: 'red' }}>{formik.errors.firstName}</div>
        )}
      </div>
      <div>
        <label htmlFor="lastName">lastName</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.lastName && formik.errors.lastName && (
          <div style={{ color: 'red' }}>{formik.errors.lastName}</div>
        )}
      </div>
      <div>
        <label htmlFor="email">email</label>
        <input
          type="text"
          name="email"
          id="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email && (
          <div style={{ color: 'red' }}>{formik.errors.email}</div>
        )}
      </div>
      <button type="submit">Submit </button>
    </form>
  );
}
