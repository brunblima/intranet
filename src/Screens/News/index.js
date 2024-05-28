import React from "react";
import NewsList from "../../Components/NewsList";
import { NewsListContainer, Container } from "../News/styles";

const News = ({ news }) => {
  const latestNews = news 

  return (
    <>
      <Container>
        <h1>Notícias</h1>
      </Container>
      <NewsListContainer>
        {latestNews.map((news) => (
          <NewsList key={news.id} news={news} />
        ))}
      </NewsListContainer>
    </>
  );
};

export default News;
