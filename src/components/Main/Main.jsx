import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import CarouselShopping from '../CarouselShopping/CarouselShopping';
import FormCadastro from '../FormCadastro/FormCadastro';
import './Main.css';
import Footer from '../Footer/Footer';

const Main = (props) => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validações e lógica de envio do formulário aqui
  };

  return (
    <main>
      <Container>
        <Row>
          <Col className="text-center mb-4">
            <h1 className="shopping-center-title">Shopping Center</h1>
            <p>Data: {date.toLocaleDateString()} Hora: {date.toLocaleTimeString()}</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <CarouselShopping />
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <h2>Cadastre-se e tenha acesso a descontos exclusivos!</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormCadastro handleSubmit={handleSubmit} />
          </Col>
        </Row>
      </Container>
      <Footer />
    </main>
  );
};

export default Main;
