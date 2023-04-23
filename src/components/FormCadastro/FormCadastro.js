import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './FormCadastro.css';

const FormCadastro = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData(new FormData(e.target));
    setSubmitted(true);
  };

  const handleWhatsAppChange = (e) => {
    const value = e.target.value.replace(/\D+/g, '');
    e.target.value = value;
  };

  return submitted ? (
    <div className="success-message">
      <h2>Cadastro realizado com sucesso!</h2>
      <p>Nome: {formData.get('nome')}</p>
      <p>E-mail: {formData.get('email')}</p>
      <p>CPF: {formData.get('cpf')}</p>
      <p>Idade: {formData.get('idade')}</p>
      <p>WhatsApp: {formData.get('whatsapp')}</p>
    </div>
  ) : (
    <Form onSubmit={handleSubmit} className="form-cadastro">
      <FormGroup>
        <Label for="nome">Nome:</Label>
        <Input type="text" name="nome" id="nome" required />
      </FormGroup>
      <FormGroup>
        <Label for="email">E-mail:</Label>
        <Input type="email" name="email" id="email" required />
      </FormGroup>
      <FormGroup>
        <Label for="cpf">CPF:</Label>
        <Input type="text" name="cpf" id="cpf" minLength="11" maxLength="11" required />
      </FormGroup>
      <FormGroup>
        <Label for="idade">Idade:</Label>
        <Input type="number" name="idade" id="idade" min="18" required />
      </FormGroup>
      <FormGroup>
        <Label for="whatsapp">WhatsApp:</Label>
        <Input
          type="text"
          name="whatsapp"
          id="whatsapp"
          minLength="10"
          maxLength="15"
          required
          onChange={handleWhatsAppChange}
        />
      </FormGroup>
      <Button type="submit">Cadastrar</Button>
    </Form>
  );
};

export default FormCadastro;
