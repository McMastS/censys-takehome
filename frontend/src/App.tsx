import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import { SelectedAction } from './types/types';
import KeyValueForm from './components/KeyValueForm';
import ActionSelector from './components/ActionSelector';

function App() {
  const [selectedAction, setSelectedAction] 
    = useState(SelectedAction.AddKeyValue);

  return (
    <Container>
      <Row>
        <Col className="mx-auto" md={4}>
          <h1>Spencer's Key Value Store</h1>
          <ActionSelector selectedAction={selectedAction} setSelectedAction={setSelectedAction} />
          <KeyValueForm selectedAction={selectedAction} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
