import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col xs="12" sm="4" className="text-center">
            <h3>Informações</h3>
            <p>Informações adicionais sobre a loja.</p>
          </Col>
          <Col xs="12" sm="4" className="text-center">
            <h3>Atendimento</h3>
            <p>Detalhes sobre o atendimento ao cliente.</p>
          </Col>
          <Col xs="12" sm="4" className="text-center">
            <h3>Contato</h3>
            <p>Endereço, telefone e e-mail para contato.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
