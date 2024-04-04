import styled from 'styled-components'

export const TextBox = styled.div`
  width: 100%;
  position: relative;
`;

export const IconSpan = styled.span`
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translateY(-50%);
  color: rgba(255, 255, 255, 0.38);
`;

export const InputField = styled.input`
  width: 80%;
  height: 60px;
  outline: none;
  padding: 0;
  font-family: inherit;
  font-size: 16px;
  border-radius: 8px;
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.1);
  padding: 0 20px 0 50px;
  color: inherit;

  &:focus {
    border-color: #157ae1;
  }

  &:focus + ${IconSpan} {
    color: #157ae1;
  }
`;