import styled from "styled-components";

export const ImgBox = styled.div`
  /* width: 323px; */
  height: 323px;
  width: 92%;
  height: 92%;
  position: relative;
  margin: 3%;
  cursor: pointer;
  &:hover {
    transition: 0.4s;
    transform: scale(1.2);
  }

  &:hover:after {
    content: "";
    transition: 0.4s;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    width: 65%;
    height: 65%;
    background: linear-gradient(90.97deg, #5dffce 0%, #00c2ff 100%);
    filter: blur(74px);
    border-radius: 50%;
  }
  & img {
    display: inline-block;
    width: 100%;
    object-fit: cover;
  }
`;

export const TextBox = styled.div`
  text-align: center;
  color: #fff;
  margin-top: 40px;
  @media only screen and (max-width: 1920px) {
    margin-top: calc(100vw * (40 / 1920));
  }
  & p {
    font-family: "BlackHanSans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    text-align: center;
    margin-bottom: 7px;
    @media only screen and (max-width: 768px) {
      font-size: calc(100vw * (12 / 428));
      line-height: 1.2;
    }
  }
  & span {
    font-weight: 100;
    font-size: 16px;
    line-height: 26px;
    text-align: center;
    @media only screen and (max-width: 768px) {
      font-size: calc(100vw * (12 / 428));
    }
  }
`;
