import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { SelectedAction } from '../types/types';

interface KeyValueFormProps {
  selectedAction: SelectedAction;
}

const KeyValueForm = ({ selectedAction }: KeyValueFormProps) => {
  const onSubmit = () => {

  };
  
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formKey">
        <Form.Label>Key</Form.Label>
        <Form.Control type="text" placeholder="Enter key" />
      </Form.Group>
      {selectedAction === SelectedAction.AddKeyValue && 
        <Form.Group className="mb-3" controlId="formValue">
          <Form.Label>Value</Form.Label>
          <Form.Control type="text" placeholder="Enter value" />
        </Form.Group>
      }
      <Button 
        variant={selectedAction === SelectedAction.DeleteKey ? "danger" : "primary"} 
        type="submit" 
        onSubmit={onSubmit}>
          Submit
      </Button>
    </Form>
  );
};

export default KeyValueForm;