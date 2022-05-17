import styled, { css } from "styled-components";
import { M } from "./MT";

export const connect = css`
  width: 100%;
  height: 100%;
  border-radius: 100px;
  background: linear-gradient(to right, #86ffca, #45ca8a, #03b68b);
  /* position: relative; */
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.6s;

  & div {
    /* position: absolute;
    top: 50%;
    left: 50%; */
    border-radius: 100px;
    /* transform: translate(-50%, -50%); */
    background: #0f0f0f;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background 0.6s;
  }

  & div span {
    font-weight: 700;
    font-size: 16px;
    background: linear-gradient(
      90.48deg,
      #86ffca 0.24%,
      #45ca8a 52.29%,
      #03b68b 99.58%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: background 0.6s;
    @media only screen and (max-width: 768px) {
      font-size: calc(100vw * (10 / 428));
    }
  }

  &:hover div {
    background: linear-gradient(to right, #86ffca, #45ca8a, #03b68b);
  }

  &:hover span {
    background: transparent;
    -webkit-text-fill-color: #fff;
    color: var(--white);
    position: relative;
    z-index: 1;
  }
`;

export const errorText = () => {
  return css`
    font-size: 15px;
    color: #ff0000;
    font-weight: 400;
  `;
};
