import React, { useState, useEffect } from "react";
import {
  NoticeBoardContainer,
  NoticeCard,
  NoticeTitle,
  NoticeContent,
  NoticeImage,
  ImageContainer,
  Container,
} from "./styles";
import { getNotices } from "../../utils/noticeBoardData";
import CalendarComponent from "../CalendarComponent";
import BirthdayCard from "../BirthdayCard";

const NoticeBoard = () => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    const fetchNotices = async () => {
      const noticesData = await getNotices();
      setNotices(noticesData);
    };

    fetchNotices();
  }, []);

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  return (
    <NoticeBoardContainer>
      <NoticeCard>
        <CalendarComponent month={currentMonth} year={currentYear} />
      </NoticeCard>
      <NoticeCard>
        <BirthdayCard />
      </NoticeCard>
      {notices.map((notice, index) => (
        <NoticeCard key={index}>
          <ImageContainer>
            <NoticeImage src={notice.image} alt={notice.title} />
          </ImageContainer>
          <Container>
            <NoticeTitle>{notice.title}</NoticeTitle>
            <NoticeContent>{notice.content}</NoticeContent>
          </Container>
        </NoticeCard>
      ))}
    </NoticeBoardContainer>
  );
};

export default NoticeBoard;
