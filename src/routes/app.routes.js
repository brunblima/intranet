import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../Screens/Home";
import News from "../Screens/News";
import Cadastro from "../Screens/Cadastro";
import Support from "../Screens/Support";
import Calendar from "../Screens/Calendar";
import Settings from "../Screens/Settings";

import Sidebar from "../Components/Sidebar";
import NewsDetails from "../Components/NewsDetails";

import fetchNews from "../utils/FetchNews";

const AppRoutes = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNewsData = async () => {
      const newsData = await fetchNews();
      setNews(newsData);
    };

    fetchNewsData();
  }, []);

  return (
    <>
      <Sidebar />
      <div style={{ marginLeft: "100px", padding: "20px" }}>
        <Routes>
          <Route path="/inicio" element={<Home />} />
          <Route path="/noticias" element={<News news={news} />} />
          <Route path="/noticias/:id" element={<NewsDetails news={news} />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/ajustes" element={<Settings />} />
          <Route path="/calendario" element={<Calendar />} />
          <Route path="/suporte" element={<Support />} />
        </Routes>
      </div>
    </>
  );
};

export default AppRoutes;
