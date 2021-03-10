// Nested Objects in Formik
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextError from "./texterror";
const initialValues = {
  name: "",
  email: "",
  channel: "",
  comments: "",
  address: "",
  social: {
    facebook: "",
    twiter: "",
  },
};
const onSubmit = (values) => {
  console.log(values);
};
const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email formate !").required("Required"),
  channel: Yup.string().required("Required"),
});
const Lecture6 = () => {
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
          <Field
            type="text"
            name="name"
            id="name"
            placeholder="Enter the Name"
          />
          <ErrorMessage name="name" component={TextError} />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email:</label>
          <Field
            type="email"
            name="email"
            id="email"
            placeholder="Enter the email"
          />
          <ErrorMessage name="email" component={TextError} />
        </div>
        <div className="form-control">
          <label htmlFor="channel">Channel:</label>
          <Field
            type="text"
            name="channel"
            id="channel"
            placeholder="Enter the channel Name"
          />
          <ErrorMessage name="channel" component={TextError} />
        </div>
        <div className="form-control">
          <label htmlFor="comments">Comments:</label>
          <Field
            as="textarea"
            type="text"
            name="comments"
            id="comments"
            placeholder="Enter the comments"
          />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <Field name="address" placeholder='Enter the address'>
            {(props) => {
              const { field, meta } = props;
              console.log(props);
              return (
                <div>
                  <input type="text" id="address" {...field} />
                  {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                </div>
              );
            }}
          </Field>
        </div>
        <div className="form-control">
          <label htmlFor="facebook">Facebook Profile:</label>
          <Field
            type="text"
            name="social.facebook"
            id="facebook"
            placeholder="Enter the Facebook Address"
          />
        </div>
        <div className="form-control">
          <label htmlFor="twiter">Twiter Profile:</label>
          <Field
            type="text"
            name="social.twiter"
            id="comments"
            placeholder="Enter the Facebook Address"
          />
        </div>
        <button className="btn" type="submit">
          Submit
        </button>
      </Form>
    </Formik>
  );
};
export default Lecture6;
