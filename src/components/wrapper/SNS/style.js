import styled from "styled-components";

export const SnsUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 111px;
`;

export const SNS = styled.li`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 30px;
  cursor: pointer;

  &:nth-last-of-type(1) {
    margin-right: 0;
  }

  & img {
    display: block;
    width: auto;
    height: 31px;
  }
`;
