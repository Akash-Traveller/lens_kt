import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => (
  <Container fluid className="bg-dark text-white text-center p-3 mt-4" style={{ boxShadow: "0px 5px 5px rgba(0.4, 0.4, 0, 0.2)" }}>
    <Row>
      <Col>© 2024 React Bootstrap Demo</Col>
    </Row>
  </Container>
);

export default Footer;
