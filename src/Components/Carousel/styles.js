import styled from "styled-components";
import themes from "../../themes/themes";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CarouselContainer = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
`;

export const CarouselSlide = styled.div`
  display: ${({ active }) => (active ? "block" : "none")};
  width: 100%;
  height: 350px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const NavigationButton = styled.button`
  color: ${themes.CINZAPADRAO};
  text-decoration: none;
  background-color: ${themes.BACKGROUND};
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    color: ${themes.AZULPADRAO};
  }
`;
