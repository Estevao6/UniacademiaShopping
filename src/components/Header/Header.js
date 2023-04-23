import React from 'react';
import styles from './Header.module.css';
import { Container, Row, Col } from 'reactstrap';

const Header = () => {
return (
<header className={styles.header}>
<Container>
<Row>
<Col xs={12} md={6} className="d-flex align-items-center">
<div className={styles.logoContainer}>
<img src="/images/logo.png" alt="Logo da loja" />
<h1>Shopping Center</h1>
</div>
</Col>
<Col xs={12} md={6} className="d-flex justify-content-end align-items-center">
<nav className={styles.nav}>
<ul>
<li><a href="#">Home</a></li>
<li><a href="#">Sobre Nós</a></li>
<li><a href="#">Contato</a></li>
</ul>
</nav>
</Col>
</Row>
</Container>
</header>
);
};

export default Header;