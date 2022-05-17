import styled from "styled-components";

export const ImgBox = styled.div`
  /* width: 442px; */
  /* height: 442px; */
  width: 92%;
  height: 92%;
  position: relative;
  margin: 3%;

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    width: 90%;
    height: 99%;
    /* background: red; */
    background: linear-gradient(90.97deg, #5dffce 0%, #00c2ff 100%);
    opacity: 0.2;
    filter: blur(31px);
  }

  & img {
    display: inline-block;
    width: 100%;
    object-fit: cover;
  }
`;
