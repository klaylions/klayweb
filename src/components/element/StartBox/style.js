import styled, { css } from "styled-components";

export const Box = styled.div`
  width: 300px;
  margin: 0 33px 47px 0;
`;

export const Container = styled.div`
  width: 300px;
  height: 300px;
  margin-bottom: 16px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.2);

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
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

export const StartIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: 18px;
  color: #aaaaaa;
  margin-bottom: 10px;
`;

export const Icon = styled.div`
  width: 26px;
  height: 26px;

  & img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

export const TextBox = styled.div`
  width: 100%;
`;

export const Text1 = styled.p`
  font-weight: 400;
  font-size: 18px;
  color: var(--text);
  margin-bottom: 5px;
`;

export const KLCDiv = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 6px;
`;

export const KLCText = styled.h2`
  font-weight: 400;
  font-size: 18px;
  color: var(--main);
  margin-right: 2px;
`;

export const KLCIcon = styled.div`
  width: 35px;
  height: 35px;
  margin-right: 4px;

  & img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

export const Price = styled.p`
  font-weight: 500;
  font-size: 18px;
  color: var(--white);
`;

export const Text2 = styled.p`
  font-weight: 400;
  font-size: 18px;
  color: var(--text);
`;
