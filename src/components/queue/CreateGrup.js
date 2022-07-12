// CreateStudent Component for add new student

// Import Modules
import React, { useState, useEffect } from "react";
import axios from 'axios';
import QueueForem from "./QueueForem";

const CreateGroup = () => {
  const [formValues, setFormValues] =
    useState({ name: '', size: '' })
  // onSubmit handler
  const onSubmit = studentObject => {
    axios.post(
      'http://localhost:3000/api/createGroup',
      studentObject)
      .then(res => {
        if (res.status === 200)
          alert('Student successfully created')
        else
          Promise.reject()
      })
      .catch(err => alert('Something went wrong'))
  }

  return (
    <QueueForem initialValues={formValues}
      onSubmit={onSubmit}
      enableReinitialize>
      Create group
    </QueueForem>
  )
}

export default CreateGroup
