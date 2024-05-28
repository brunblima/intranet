import React, { useState, useEffect } from "react";
import {
  CardContainer,
  LinkCustom,
  Title,
  Body,
  Description,
  Image,
  Details,
  Tag,
  Author,
  ContainerNews,
} from "./styles";
import fetchNews from "../../utils/FetchNews";

const NewsCard = () => {
  const [latestNews, setLatestNews] = useState([]);

  useEffect(() => {
    const fetchLatestNews = async () => {
      const newsData = await fetchNews();
      setLatestNews(newsData.slice(0, 3));
    };

    fetchLatestNews();
  }, []);

  return (
    <ContainerNews>
      {latestNews.map((news) => (
        <CardContainer>
          <LinkCustom to={`/noticias/${news.id}`} key={news.id}>
            <Title>{news.title}</Title>
          </LinkCustom>

          <Body>
            <Description>{news.description}</Description>
            {/* {news.image && <Image src={news.image} alt={news.title} />} */}
          </Body>

          <Details>
            {news.tag && <Tag>{news.tag}</Tag>}
            {news.author && <Author>Por: {news.author}</Author>}
          </Details>
        </CardContainer>
      ))}
    </ContainerNews>
  );
};

export default NewsCard;
