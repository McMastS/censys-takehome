import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { SelectedAction } from "../types/types";

interface ActionSelectorProps {
  selectedAction: SelectedAction,
  setError: React.Dispatch<React.SetStateAction<string>>,
  setSelectedAction: React.Dispatch<React.SetStateAction<SelectedAction>>
}

const ActionSelector = ({ selectedAction, setError, setSelectedAction }: ActionSelectorProps) => {  
  return (
    <ButtonGroup className="d-flex m-2">
      <Button 
        variant={selectedAction === SelectedAction.AddKeyValue 
          ? "primary" : "outline-primary"} 
        onClick={() => {
          setError("");
          setSelectedAction(SelectedAction.AddKeyValue);
        }}>
          Add key/value pair
      </Button>
      <Button 
        variant={selectedAction === SelectedAction.RetrieveValue 
          ? "primary" : "outline-primary"}  
        onClick={() => {
          setError("");
          setSelectedAction(SelectedAction.RetrieveValue);
        }}>
        Retrieve value
      </Button>
      <Button 
        variant={selectedAction === SelectedAction.DeleteKey 
          ? "primary" : "outline-primary"} 
        onClick={() => {
          setError("");
          setSelectedAction(SelectedAction.DeleteKey);
        }}>
        Delete key
      </Button>
    </ButtonGroup>
  );
}

export default ActionSelector;