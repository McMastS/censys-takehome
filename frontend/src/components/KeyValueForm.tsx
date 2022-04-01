import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { deleteKey, retrieveValue, storeKeyValue } from '../api/StoreApi';
import { SelectedAction } from '../types/types';

interface KeyValueFormProps {
  selectedAction: SelectedAction;
}

const KeyValueForm = ({ selectedAction }: KeyValueFormProps) => {
  const [key, setKey] = useState("");
  const [value, setValue] = useState("");

  const [retrievedValue, setRetrievedValue] = useState("");
  
  const onSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (selectedAction === SelectedAction.AddKeyValue) {
      storeKeyValue(key, value);
    } else if (selectedAction === SelectedAction.RetrieveValue) {
      const { value } = await retrieveValue(key);
      if (!value) {
        setRetrievedValue(`No record found for: ${key}`);
        return;
      }

      setRetrievedValue(JSON.stringify(value));
    } else if (selectedAction === SelectedAction.DeleteKey) {
      const deleted = await deleteKey(key);
      if (!deleted) {
        setRetrievedValue(`No record found for: ${key}`);
        return;
      }

      setRetrievedValue(`Sucessfully deleted key: ${key}`);
    }
  };
  
  return (
    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="formKey">
          <Form.Label>Key</Form.Label>
          <Form.Control 
            type="text"
            placeholder="Enter key" 
            onChange={(e) => {
              setKey(e.target.value);
            }} 
          />
        </Form.Group>
        {selectedAction === SelectedAction.AddKeyValue && 
          <Form.Group className="mb-3" controlId="formValue">
            <Form.Label>Value</Form.Label>
            <Form.Control 
              type="text"
              placeholder="Enter value" 
              onChange={(e) => {
                setValue(e.target.value);
              }}
            />
          </Form.Group>
        }
        <Button 
          variant={selectedAction === SelectedAction.DeleteKey ? "danger" : "primary"} 
          onClick={onSubmit}>
            Submit
        </Button>
      </Form>
      {retrievedValue && <p>{retrievedValue}</p>}
    </Container>
  );
};

export default KeyValueForm;