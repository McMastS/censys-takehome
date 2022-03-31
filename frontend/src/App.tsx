import React from 'react';
import AddKeyValueForm from './components/AddKeyValueForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Spencer's Key Value Store</h1>
          <ButtonGroup aria-label="Basic example">
            <Button variant="success">Add key/value pair</Button>
            <Button variant="secondary">Retrieve value</Button>
            <Button variant="danger">Delete key</Button>
          </ButtonGroup>
          <AddKeyValueForm />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
