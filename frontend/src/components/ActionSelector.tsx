import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { SelectedAction } from "../types/types";

interface ActionSelectorProps {
  selectedAction: SelectedAction,
  setSelectedAction: React.Dispatch<React.SetStateAction<SelectedAction>>
}

const ActionSelector = ({ selectedAction, setSelectedAction }: ActionSelectorProps) => {
  return (
    <ButtonGroup className="d-flex m-2">
      <Button 
        variant={selectedAction === SelectedAction.AddKeyValue 
          ? "primary" : "outline-primary"} 
        onClick={() => {
          setSelectedAction(SelectedAction.AddKeyValue);
        }}>
          Add key/value pair
      </Button>
      <Button 
        variant={selectedAction === SelectedAction.RetrieveValue 
          ? "secondary" : "outline-secondary"}  
        onClick={() => {
          setSelectedAction(SelectedAction.RetrieveValue);
        }}>
        Retrieve value
      </Button>
      <Button 
        variant={selectedAction === SelectedAction.DeleteKey 
          ? "primary" : "outline-primary"} 
        onClick={() => {
          setSelectedAction(SelectedAction.DeleteKey);
        }}>
        Delete key
      </Button>
    </ButtonGroup>
  );
}

export default ActionSelector;