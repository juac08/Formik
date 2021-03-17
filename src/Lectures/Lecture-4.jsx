// Reduce the boilerplate code {...formik.getFieldProps('email')}/>
//Formik COmponent instead of useFormik call
//Pass The props in Formik where we wrap
//import Form and replace with form remove on submit function
//import Field & replace INPUT and remove getFieldProps
//Error Message Component
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {db} from '../firebase'
const initialValues = {
  name: "",
  email: "",
  channel: "",
};
const onSubmit = (values) => {
  db.collection('Lecture-4').add({
    values,
  })
};
const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email formate !").required("Required"),
  channel: Yup.string().required("Required"),
});
const Lecture4 = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}>
      <Form>
        <div className="form-control">
          <label htmlFor="name" id="name">
            Name:
          </label>
          <Field type="text" name="name" id="name" />
          <ErrorMessage name="name" />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email:</label>
          <Field type="email" name="email" id="email" />
          <ErrorMessage name="email" />
        </div>
        <div className="form-control">
          <label htmlFor="channel">Channel:</label>
          <Field type="text" name="channel" id="channel" />
          <ErrorMessage name="channel" />
        </div>
        <button className="btn" type="submit">
          
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default Lecture4;
