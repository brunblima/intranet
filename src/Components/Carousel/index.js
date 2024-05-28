import React, { useState } from "react";
import {
  CarouselContainer,
  CarouselSlide,
  NavigationButton,
  Container,
} from "./styles";
import { IoChevronBackCircle, IoChevronForwardCircle } from "react-icons/io5";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <Container>
      <NavigationButton onClick={prevSlide}>
        <IoChevronBackCircle size={40} />
      </NavigationButton>
      <CarouselContainer>
        {images.map((image, index) => (
          <CarouselSlide key={index} active={index === currentIndex}>
            <img src={image} alt={`Banner ${index + 1}`} />
          </CarouselSlide>
        ))}
      </CarouselContainer>
      <NavigationButton onClick={nextSlide}>
        <IoChevronForwardCircle size={40} />
      </NavigationButton>
    </Container>
  );
};

export default Carousel;
