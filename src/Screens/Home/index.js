import React, { useEffect, useState } from "react";

import { Container } from "./styles";

import Banner from "../../Components/Banner";
import NewsCard from "../../Components/NewsCard";
import NoticeBoard from "../../Components/NoticeBoard";

import Loading from "../../Components/Animation/Loading";

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setLoading(false);
    };

    loadData();
  }, []);

  return (
    <>
      {loading && <Loading />}
      {!loading && (
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
      )}
    </>
  );
}

export default Home;
