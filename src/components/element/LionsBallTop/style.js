import styled from "styled-components";

export const Container = styled.div`
  width: 959px;
  height: 62px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(250px);
  border-radius: 100px;
`;

export const Wrap = styled.div`
  padding: 18px 40px;
`;

export const DIV = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Product = styled.h2`
  font-weight: 500;
  font-size: 20px;
  color: var(--main);

  & span {
    margin-left: 14px;
    font-weight: 400;
    font-size: 20px;
    color: var(--text);
  }
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 20px;
  color: var(--text);
`;
