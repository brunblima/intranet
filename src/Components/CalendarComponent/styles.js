import styled from "styled-components";

export const CalendarWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MonthWrapper = styled.div`
  width: calc(100% - 10px);
  height: 360px;
  margin-bottom: 0px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  border-radius: 10px;
  overflow: hidden;
`;

export const MonthTitle = styled.h2`
  margin: 0;
  padding: 10px 0;
  text-align: center;
  border-bottom: 1px solid #ccc;
`;

export const WeekDays = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  border-bottom: 1px solid #ccc;
  background-color: #eee;
`;

export const Container = styled.div`
  padding: 10px 0;
  border-left: 1px solid #ccc;
  &:first-child {
    border-left: none;
  }
`;

export const ContainerDays = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 1px;
  text-align: center;
  padding: 1px;
`;

export const Day = styled.div`
  cursor: pointer;
  background-color: ${({ holidayType, isToday }) =>
    isToday
      ? "#54FF54"
      : holidayType === "national"
      ? "#FF6E79"
      : holidayType === "state"
      ? "#FFD700"
      : holidayType === "municipal"
      ? "#389aff"
      : "none"};
  color: ${({ hasHoliday, isWeekend }) =>
    hasHoliday && isWeekend ? "white" : isWeekend ? "red" : "black"};
  font-weight: 500;
  border-radius: 5px;
  padding: 0.5em;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  margin: auto;
  &:hover {
    opacity: 0.4;
  }
`;

export const Tooltip = styled.div`
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
  background-color: #333;
  color: white;
  text-align: center;
  border-radius: 6px;
  padding: 10px;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  transform: translateX(-50%);

  min-height: 45px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease, visibility 0.3s ease;
  opacity: ${({ visible }) => (visible ? 1 : 0)};

  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #333 transparent transparent transparent;
  }
`;
