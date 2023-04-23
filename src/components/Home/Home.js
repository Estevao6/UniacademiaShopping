import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import CarouselShopping from '../CarouselShopping/CarouselShopping';
import FormCadastro from '../FormCadastro/FormCadastro';
import Header from '../Header/Header';

const Home = (props) => {
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
    <Container>
      <Row>
        <Col className="text-center mb-4">
          <h1>Bem-vindo ao {props.shoppingName}!</h1>
          <p>Data: {date.toLocaleDateString()} Hora: {date.toLocaleTimeString()}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <CarouselShopping />
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Cadastre-se e tenha acesso a descontos exclusivos!</h2>
          <FormCadastro handleSubmit={handleSubmit} />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
