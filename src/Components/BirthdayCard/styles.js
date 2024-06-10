import styled from "styled-components";

export const BirthdayCardWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: 16/9;
  object-fit: cover;
`;

export const Title = styled.h2`
  margin-top: 0px;
  margin-bottom: 5px;
  font-size: 22px;
  color: #333;
`;

export const CarouselItem = styled.div`
  margin-top: 15px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 18px;
  color: #555;
  text-align: center;
  width: 55%;
  padding: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

export const Container = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
