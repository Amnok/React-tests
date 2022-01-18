import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import _ from 'lodash';

export default function FormWithYup() {
  const validationSchema = yup.object({
    firstName: yup.string().required('Required'),
    lastName: yup.string().required('Required'),
  });
  const [data, setData] = useState('');
  const [user, setUser] = useState('');

  useEffect(() => {
    async function getUser() {
      const { data } = await axios.get('http://localhost:3006/users');
      const _user = _.head(data);
      setUser(_user);
      console.log({ _user });
    }
    getUser();
  }, []);
  const initialValues = {
    firstName: '',
    lastName: '',
    details: '',
    language: '',
    // technology: '',
  };
  const onSubmit = (values) => {
    console.log('filter onSubmit', values);
    setData(values);
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  console.log('values', formik.values);
  return (
    <div>
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
          <label htmlFor="details">Details</label>
          <textarea
            name="details"
            id="details"
            cols="30"
            rows="10"
            value={formik.values.details}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></textarea>
        </div>
        <div>
          <label htmlFor="language">Language</label>
          <select
            name="language"
            id="language"
            value={formik.values.language}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value="English">English</option>
            <option value="French">French</option>
            <option value="German">German</option>
            <option value="Dutch">Dutch</option>
          </select>
        </div>
        <div></div>
        <button type="submit">Submit </button>
      </form>
      <div>{JSON.stringify(data)}</div>
      <div>{JSON.stringify(user)}</div>
    </div>
  );
}
