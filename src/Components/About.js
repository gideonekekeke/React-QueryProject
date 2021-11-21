import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
// import { Button } from "@mui/material";

const About = () => {
  const initialValues = {
    userName: "",
    email: "",
    password: "",
  };

  let mySchema = yup.object().shape({
    userName: yup.string().required(),
    email: yup.string().required().email(),
    password: yup.string().required().min(6),
  });

  // mySchema.validate({ userName: "mommy" }).catch((err) => {
  //   console.log(err);
  // });

  return (
    <div>
      <div>form data</div>
      <Formik
        onSubmit={(value) => {
          console.log(value);
        }}
        validationSchema={mySchema}
        initialValues={initialValues}
      >
        <Form>
          <Field placeholder="userName" type="userName" name="userName" />
          <ErrorMessage name="userName" component="div" />
          <Field placeholder="email" type="email" name="email" />
          <ErrorMessage name="email" component="div" />
          <Field placeholder="password" type="password" name="password" />
          <ErrorMessage name="password" component="div" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default About;
