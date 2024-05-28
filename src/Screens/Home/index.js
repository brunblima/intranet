import React from "react";

import { Container } from "./styles";

import Banner from "../../Components/Banner";
import NewsCard from "../../Components/NewsCard";
import NoticeBoard from "../../Components/NoticeBoard";

function Home() {


  return (
    <>
      <Banner />

      <Container>
        <h1>Quadro de Avisos</h1>
      </Container>

      <NoticeBoard />

      <Container>
        <h1>Últimas Notícias</h1>
      </Container>

      <NewsCard />
    </>
  );
}

export default Home;
