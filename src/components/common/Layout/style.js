import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  background: linear-gradient(185.89deg, #000000 0.29%, #111111 100%);
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 580px;
    height: 580px;
    border-radius: 50%;
    background: linear-gradient(
      135.97deg,
      #98fff3 14.52%,
      #0057ff 50.35%,
      #bd00ff 87.24%
    );
    left: -270px;
    bottom: 332px;
    opacity: 0.6;
    z-index: 1;
    filter: blur(340px);

    @media only screen and (max-width: 768px) {
      width: calc(100vw * (200 / 428));
      height: calc(100vw * (200 / 428));
      left: -0%;
      filter: blur(0px);
      opacity: 1;
    }
  }

  &::after {
    content: "";
    position: absolute;
    width: 310px;
    height: 310px;
    border-radius: 50%;
    background: linear-gradient(
      135.97deg,
      #98ffa9 14.52%,
      #00ffb2 50.35%,
      #00e0ff 87.24%
    );
    right: -65px;
    bottom: -159px;
    opacity: 0.3;
    z-index: 1;
    filter: blur(340px);
    @media only screen and (max-width: 768px) {
      width: calc(100vw * (200 / 428));
      height: calc(100vw * (200 / 428));
      right: -0%;
      filter: blur(0px);
      opacity: 1;
      bottom: 0;
    }
  }
`;

export const Blur = styled.div`
  position: relative;
  width: 100%;
  /* background: rgba(255, 255, 255, 0.05); */
  background: linear-gradient(
    rgba(8 8 8 / 0%) 15%,
    rgba(255, 255, 255, 0.05) 23%
  );
  backdrop-filter: blur(340px);
  z-index: 2;
`;

export const DIV = styled.div`
  width: 100%;
  position: relative;
  z-index: 3;
  max-width: 1920px;
  margin: 0 auto;
`;

export const MobileFixbtnContainer = styled.div`
  display: none;
  @media only screen and (max-width: 1024px) {
    display: block;
    width: 60px;
    height: 60px;
    position: fixed;
    z-index: 10;
    right: 0px;
    bottom: 0px;
    transform: translate(-30%, -30%);
  }
`;
export const FixBtnWrap = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
export const ArrBtn = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 30px;
  cursor: pointer;

  ${({ isSnsbtn }) => {
    if (isSnsbtn) {
      return css`
        & img {
          transition: all 0.3s;
          transform: rotate(180deg);
        }
      `;
    } else {
      return css`
        & img {
          transition: all 0.3s;
          transform: rotate(360deg);
        }
      `;
    }
  }}
`;
export const BtnSnsWrap = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  transform: translate(0px, -90px);
  ${(props) => (props.isSnsbtn ? `display:block;` : `display:none;`)}
  & > ul {
    flex-direction: column;
    width: 60px;
    height: auto;
    margin: 0px 0px 0px 0px;
  }
  & li {
    width: 60px;
    height: 60px;
    margin: 0px 0px 30px 0px;
  }
  & li:nth-last-of-type(1) {
    margin: 0px;
  }
`;
