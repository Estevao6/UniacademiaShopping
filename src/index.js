import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Se você quiser começar a medir o desempenho em sua aplicação, passe uma função
// para registrar os resultados (por exemplo: reportWebVitals(console.log))
// ou envie-os para um serviço analítico.
reportWebVitals();
