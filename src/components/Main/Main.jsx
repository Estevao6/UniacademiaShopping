import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import CarouselShopping from '../CarouselShopping/CarouselShopping';
import FormCadastro from '../FormCadastro/FormCadastro';
import './Main.css';
import Footer from '../Footer/Footer';

const Main = (props) => {
  const [date, setDate] = useState(new Date());
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = {
      id: Date.now(),
      text: newTodo,
      completed: false,
    };
    setTodos([...todos, todo]);
    setNewTodo('');
  };

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const toggleTodoComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <main>
      <Container>
        <Row>
          <Col className="text-center mb-4">
            <h1 className="shopping-center-title">Shopping Center</h1>
            <p>
              Data: {date.toLocaleDateString()} Hora: {date.toLocaleTimeString()}
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <CarouselShopping />
          </Col>
        </Row>

        <Row>
          <Col>
            <FormCadastro handleSubmit={handleSubmit} />
          </Col>
        </Row>

        <Row>
          <Col>
            <h2 className="listadecompras">Lista de Compras:</h2>
            <ul>
              {todos.map((todo) => (
                <li
                  key={todo.id}
                  className={todo.completed ? 'completed' : ''}
                  onClick={() => toggleTodoComplete(todo.id)}
                >
                  {todo.text}
                </li>
              ))}
            </ul>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={newTodo}
                onChange={handleInputChange}
                placeholder="Adicione um item"
              />
              <button type="submit">+</button>
            </form>
          </Col>
        </Row>
      </Container>
      <Footer />
      <button className="scroll-to-top" onClick={scrollToTop}>
       ⬆
      </button>
    </main>
  );
};

export default Main;
