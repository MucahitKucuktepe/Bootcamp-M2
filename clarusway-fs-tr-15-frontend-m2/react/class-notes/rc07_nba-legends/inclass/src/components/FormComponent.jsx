import React from 'react'
import Form from "react-bootstrap/Form";

const FormComponent = ({handleChange}) => {
  return (
   <Form.Control
        placeholder="Search a player"
        className="w-50 m-auto"
        onChange={handleChange}
        type="search"
      />
  )
}

export default FormComponent