// Form Validation {All the field is Manadatory with valid Email}
import React from "react";
import { useFormik } from "formik";
import {db} from '../firebase'
const initialValues = {
    name: "",
    email: "",
    channel: "",
  }
  const onSubmit = 
  values => {
    db.collection('Lecture-2').add({
      values,
    })
}
const validate = values => {
    const errors = {}

  if (!values.name) {
    errors.name = 'Required'
  }

  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email format'
  }

  if (!values.channel) {
    errors.channel = 'Required'
  }

  return errors
}

const Lecture2 = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate
  });
  console.log(formik.touched)
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
      <div className='form-control'>
        <label htmlFor="name" id="name">
          Name:
        </label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={formik.handleChange}
          value={formik.values.name}
          onBlur={formik.handleBlur}
        />
        {formik.touched.name && formik.errors.name && <div className='error'>{formik.errors.name}</div> }
</div>
      <div className='form-control'>

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email && <div className='error'>{formik.errors.email}</div> }
</div>
      <div className='form-control'>

        <label htmlFor="channel">Channel:</label>
        <input
          type="text"
          name="channel"
          id="channel"
          onChange={formik.handleChange}
          value={formik.values.channel}
          onBlur={formik.handleBlur}
        />
        {formik.touched.channel && formik.errors.channel && <div className='error'>{formik.errors.channel}</div> }
</div>
        <button className="btn" type='submit'> Submit</button>
      </form>
    </div>
  );
};

export default Lecture2;
