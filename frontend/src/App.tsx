import React from 'react';
import './App.css';
import AddKeyValueForm from './components/AddKeyValueForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Spencer's Key Value Store</h1>
          <AddKeyValueForm />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
