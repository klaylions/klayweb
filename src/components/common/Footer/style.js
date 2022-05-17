import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  height: 481px;
  border-top: 1px solid #c4c4c4;
  @media only screen and (max-width: 768px) {
    height: auto;
  }
`;

export const Wrap = styled.div`
  width: 100%;
  padding: 80px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 768px) {
    padding: calc(100vw * (40 / 428)) 0px calc(100vw * (50 / 428)) 0px;
  }
`;

export const TextBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Logo = styled.div`
  width: 86px;
  height: 59px;
  margin-bottom: 29px;

  & img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.3;
  color: var(--gray);
  @media only screen and (max-width: 768px) {
    font-size: calc(100vw * (12 / 428));
    line-height: 2;
  }
`;

export const SnsWrap = styled.div`
  display: block;
  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;
