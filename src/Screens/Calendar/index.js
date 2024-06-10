import React from "react";
import CalendarComponent from "../../Components/CalendarComponent";


const Calendar = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <h1>Calendário de Feriados - Santa Rita, PB</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {[...Array(12).keys()].map((month) => (
          <div key={month} style={{ width: "340px", margin: "10px" }}>
            <CalendarComponent
              month={month}
              year={currentYear}
              isNoticeBoard={false}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Calendar;
