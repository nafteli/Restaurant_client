// CreateStudent Component for add new student

// Import Modules
import React, { useState, useEffect } from "react";
import axios from 'axios';
import QueueForme from "./QueueForme";
import { Link } from "react-router-dom";

const CreateGroup = () => {
  const [formValues, setFormValues] =
    useState({ name: '', size: '' })
  // onSubmit handler
  const onSubmit = groupObject => {
    axios.post(
      'http://localhost:4000/api/createGroup',
      groupObject)
      .then(res => {
        if (res.status === 200)
          alert('Student successfully created')
        else
          Promise.reject()
      })
      .catch(err => alert('Something went wrong'))
  }

  return (
    <QueueForme initialValues={formValues}
      onSubmit={onSubmit}
      enableReinitialize >
      Create group
    </QueueForme>
  )
}

export default CreateGroup
