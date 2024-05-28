import React from "react";
import {
  CardContainer,
  LinkCustom,
  Image,
  Details,
  Title,
  Body,
  Tag,
  Description,
  Author,
} from "./styles";

const NewsList = ({ news }) => {
  const { title, tag, description, image, author } = news;

  return (
    <CardContainer>
      <LinkCustom to={`/noticias/${news.id}`} key={news.id}>
        <Title>{title}</Title>
      </LinkCustom>

      <Body>
        <Description>{description}</Description>
        {image && <Image src={image} alt={title} />}
      </Body>

      <Details>
        {tag && <Tag>{tag}</Tag>}
        {author && <Author>Por: {author}</Author>}
      </Details>
    </CardContainer>
  );
};

export default NewsList;
