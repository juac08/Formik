// YUP in React (Write Validate function with yup
//Object Schema + Documentation)
import React from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';
const initialValues = {
    name: "",
    email: "",
    channel: "",
  }
  const onSubmit = 
  values => {
    console.log(values)
}

const validationSchema =Yup.object({
    name: Yup.string().required('Required'),
    email:Yup.string().email('Invalid email formate !').required('Required'),
    channel:Yup.string().required('Required')
})

const Lecture3 = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
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

export default Lecture3;
