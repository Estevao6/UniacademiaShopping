import React from 'react';
import { Carousel } from 'react-bootstrap';
import styles from './CarouselShopping.module.css';

const CarouselShopping = () => {
  return (
    <div className={styles.carouselContainer}>
      <Carousel containerClass={styles.carousel}>
        <Carousel.Item>
          <img className={styles.carouselImage} src="/images/img1.jpg" alt="Primeiro slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className={styles.carouselImage} src="/images/img2.jpg" alt="Segundo slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className={styles.carouselImage} src="/images/img3.jpg" alt="Terceiro slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselShopping;
