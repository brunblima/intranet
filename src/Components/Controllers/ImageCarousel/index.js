import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  CarouselContainer,
  ImageContainer,
  SelectedImage,
  RemoveImageButton,
} from "./styles";

 const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };


const ImageCarousel = ({ selectedImages, handleRemoveImage }) => {
  return (
    <CarouselContainer>
      <Carousel
        responsive={responsive}
        infinite={false}
        arrows={true}
        autoPlay={false}
        autoPlaySpeed={3000}
        renderButtonGroupOutside={true}
        customTransition="all 1s ease"
      >
        {selectedImages.map((image, index) => (
          <ImageContainer key={image}>
            <SelectedImage src={image} alt={`Selected ${index}`} />
            <RemoveImageButton onClick={() => handleRemoveImage(image)}>
              X
            </RemoveImageButton>
          </ImageContainer>
        ))}
      </Carousel>
    </CarouselContainer>
  );
};

export default ImageCarousel;
