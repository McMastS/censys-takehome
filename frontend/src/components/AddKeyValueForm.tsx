import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const AddKeyValueForm = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formKey">
        <Form.Label>Key</Form.Label>
        <Form.Control type="text" placeholder="Enter key" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formValue">
        <Form.Label>Value</Form.Label>
        <Form.Control type="text" placeholder="Enter value" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default AddKeyValueForm;