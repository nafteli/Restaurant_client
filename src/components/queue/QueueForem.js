import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, FormControl, Button } from "react-bootstrap";

const QueueForem = (props) => {
const validationSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  size: Yup.number()
  .positive("Invalid roll number")
  .integer("Invalid roll number")
  .required("Required"),
});
console.log(props);
return (
  <div className="form-wrapper">
  <Formik {...props} validationSchema={validationSchema}>
    <Form>
    <FormGroup>
      <Field name="name" type="text"
        className="form-control" />
      <ErrorMessage
      name="name"
      className="d-block invalid-feedback"
      component="span"
      />
    </FormGroup>
    <FormGroup>
      <Field name="size" type="number"
        className="form-control" />
      <ErrorMessage
      name="size"
      className="d-block invalid-feedback"
      component="span"
      />
    </FormGroup>
    <Button variant="danger" size="lg"
      block="block" type="submit">
      {props.children}
    </Button>
    </Form>
  </Formik>
  </div>
);
};

export default QueueForem;
