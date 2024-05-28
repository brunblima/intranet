import React from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  CardContainer,
  Body,
  Image,
  Details,
  Title,
  Tag,
  Description,
  Author,
  BackButton,
} from "./styles";
import { IoChevronBackCircle } from "react-icons/io5";

const NewsDetails = ({ news }) => {
  const { id } = useParams();
  const selectedNews = news.find((item) => item.id === id);

  return (
    <Container>
      <BackButton to="/noticias">
        <IoChevronBackCircle size={40} />
      </BackButton>
      
      <CardContainer>
        <Title>{selectedNews.title}</Title>

        <Body>
          <Description>{selectedNews.description}</Description>
          {selectedNews.image && (
            <Image src={selectedNews.image} alt={selectedNews.title} />
          )}
        </Body>

        <Details>
          {selectedNews.tag && <Tag>{selectedNews.tag}</Tag>}
          {selectedNews.author && <Author>Por: {selectedNews.author}</Author>}
        </Details>
      </CardContainer>
    </Container>
  );
};

export default NewsDetails;
