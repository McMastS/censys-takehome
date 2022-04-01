import React, { useState } from 'react';
import KeyValueForm from './components/KeyValueForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { SelectedAction } from './types/types';

function App() {
  const [selectedAction, setSelectedAction] 
    = useState(SelectedAction.AddKeyValue);

  return (
    <Container>
      <Row>
        <Col className="mx-auto" md={4}>
          <h1>Spencer's Key Value Store</h1>
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
          <KeyValueForm selectedAction={selectedAction} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
