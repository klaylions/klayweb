import styled from "styled-components";

export const Border = styled.div`
  width: 31%;
  height: 343px;
  background: ${({ percent }) =>
    percent === 0
      ? `#666666`
      : `linear-gradient(135deg, rgba(93, 255, 206, ${percent}), rgba(0, 194, 255, ${percent}))`};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 168px;
  position: relative;
  @media only screen and (max-width: 1250px) {
    width: calc(100vw * (343 / 1220));
    height: calc(100vw * (343 / 1220));
  }
  @media only screen and (max-width: 768px) {
    width: calc(100vw * (185 / 428));
    height: calc(100vw * (185 / 428));
    margin-bottom: calc(100vw * (80 / 428));
  }
`;

export const DIV = styled.div`
  width: calc(100% - 2px);
  height: calc(100% - 2px);
  background: #171717;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  font-size: 25px;
  font-weight: 600;
  color: #ffffff;
  @media only screen and (max-width: 768px) {
    font-size: calc(100vw * (12 / 428));
    overflow: auto;
  }
`;

export const PerText = styled.div`
  width: 100%;
  height: auto;
  position: absolute;
  left: 0px;
  top: 0px;
  opacity: ${({ check }) => (check ? `1` : `0.1`)}}
  transform: ${({ check }) =>
    check ? `translate(0%, -100%);` : `translate(0%, -90%);`}}
  color: ${({ percent }) => (percent === 0 ? `#c4c4c4` : `#00ffd1;`)}}
  

  font-style: normal;
  font-weight: 900;
  font-size: 100px;
  @media only screen and (max-width:1250px){
    font-size: calc(100vw*(100/1250));
  }
`;

export const ImgBox = styled.div`
  width: 83px;
  height: 83px;
  & img {
    width: 100%;
  }
  @media only screen and (max-width: 1250px) {
    width: calc(100vw * (83 / 1250));
    height: calc(100vw * (83 / 1250));
  }
`;
