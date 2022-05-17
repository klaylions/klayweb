import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-sizing: border-box;
  margin: 0 32px 35px 0;
  position: relative;
  cursor: pointer;

  ${({ active }) => {
    if (active) {
      return css`
        &::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 10px;
          background: rgba(0, 0, 0, 0.4);
          z-index: 1;
        }

        &::before {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 2;
          width: 50px;
          height: 50px;
          background: url("/assets/img/icon/checkActive.svg") no-repeat center /
            cover;
        }
      `;
    }
  }}
`;
