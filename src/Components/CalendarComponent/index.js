import React, { useState, useEffect } from "react";
import {
  CalendarWrapper,
  MonthWrapper,
  MonthTitle,
  WeekDays,
  Container,
  ContainerDays,
  Day,
  Tooltip,
} from "./styles";
import axios from "axios";

const CalendarComponent = ({ month, year }) => {
  const [holidays, setHolidays] = useState([]);
  const [tooltip, setTooltip] = useState({
    visible: false,
    content: "",
    position: {},
  });

  useEffect(() => {
    const fetchHolidays = async () => {
      try {
        const nationalHolidays = await axios.get(
          "https://brasilapi.com.br/api/feriados/v1/2024"
        );

        const stateHolidays = [
          {
            date: "2024-08-05",
            name: "[Feriado Estadual - PB] Fundação do Estado da Paraíba",
          },
        ];
        const municipalHolidays = [
          { date: "2024-06-24", name: "[Feriado Municipal] São João" },
          {
            date: "2024-12-08",
            name: "[Feriado Municipal] Nossa Senhora da Conceição",
          },
          {
            date: "2024-05-22",
            name: "[Feriado Municipal] Padroeira",
          },
        ];

        const allHolidays = [
          ...nationalHolidays.data.map((holiday) => ({
            date: holiday.date,
            name: `[Feriado Nacional] ${holiday.name}`,
            type: "national",
          })),
          ...stateHolidays.map((holiday) => ({ ...holiday, type: "state" })),
          ...municipalHolidays.map((holiday) => ({
            ...holiday,
            type: "municipal",
          })),
        ];

        setHolidays(allHolidays);
      } catch (error) {
        console.error("Erro ao buscar feriados:", error);
      }
    };

    fetchHolidays();
  }, []);

  const daysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getMonthName = (month) => {
    const months = [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ];
    return months[month];
  };

  const isWeekend = (date) => {
    const day = date.getDay();
    return day === 0 || day === 6;
  };

  const isToday = (date) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const renderDays = (month, year) => {
    const totalDays = daysInMonth(month, year);
    const firstDay = new Date(year, month, 1).getDay(); // 0 (Sun) - 6 (Sat)

    let days = [];
    let dayCounter = 1;

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<Day key={`empty-${i}`} />);
    }

    // Add days of the month
    for (let i = 0; i < totalDays; i++) {
      const currentDate = new Date(year, month, dayCounter);
      const dayString = `${year}-${String(month + 1).padStart(2, "0")}-${String(
        dayCounter
      ).padStart(2, "0")}`;
      const holiday = holidays.find((holiday) => holiday.date === dayString);
      const today = isToday(currentDate);

      days.push(
        <Day
          key={dayCounter}
          hasHoliday={holiday ? true : false}
          holidayType={holiday ? holiday.type : null}
          isWeekend={isWeekend(currentDate)}
          isToday={today}
          onMouseEnter={(e) =>
            (holiday || today) &&
            showTooltip(e, holiday ? holiday.name : "HOJE")
          }
          onMouseLeave={hideTooltip}
        >
          {dayCounter}
        </Day>
      );

      dayCounter++;
    }

    return days;
  };

  const showTooltip = (e, content) => {
    const rect = e.target.getBoundingClientRect();
    setTooltip({
      visible: true,
      content: content,
      position: {
        top: rect.top + window.scrollY - 70,
        left: rect.left + window.scrollX + rect.width / 2,
      },
    });
  };

  const hideTooltip = () => {
    setTooltip({ visible: false, content: "", position: {} });
  };

  return (
    <CalendarWrapper>
      <MonthWrapper>
        <MonthTitle>{getMonthName(month)}</MonthTitle>
        <WeekDays>
          <Container>D</Container>
          <Container>S</Container>
          <Container>T</Container>
          <Container>Q</Container>
          <Container>Q</Container>
          <Container>S</Container>
          <Container>S</Container>
        </WeekDays>
        <ContainerDays>{renderDays(month, year)}</ContainerDays>
      </MonthWrapper>
      <Tooltip
        visible={tooltip.visible}
        style={{ top: tooltip.position.top, left: tooltip.position.left }}
      >
        {tooltip.content}
      </Tooltip>
    </CalendarWrapper>
  );
};

export default CalendarComponent;
