// Managing Form State and Handeling Submission Using Formik

import React from "react";
import { useFormik } from "formik";
const Lecture1 = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      channel: "",
    },
    onSubmit: values => {
        console.log(values)
    }
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name" id="name">
          Name:
        </label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />

        <label htmlFor="channel">Channel:</label>
        <input
          type="text"
          name="channel"
          id="channel"
          onChange={formik.handleChange}
          value={formik.values.channel}
        />

        <button className="btn" type='submit'> Submit</button>
      </form>
    </div>
  );
};

export default Lecture1;
