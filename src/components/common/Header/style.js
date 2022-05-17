import styled from "styled-components";

import { connect } from "../../../utils/ShareStyle";

export const Container = styled.header`
  width: 100%;
  height: 110px;
  @media only screen and (max-width: 768px) {
    height: calc(100vw * (90 / 428));
  }
`;

export const Wrap = styled.div`
  padding: 0 140px;
  height: 100%;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 1500px) {
    padding: 0 calc(100vw * (140 / 1500));
  }
  @media only screen and (max-width: 768px) {
    padding: 0 calc(100vw * (20 / 428));
  }
`;

export const Inner = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Left = styled.ul`
  display: flex;
  align-items: center;
  @media only screen and (max-width: 768px) {
    margin: calc(100vw * (45 / 428)) 0px;
  }
`;

export const Li = styled.li`
  margin-right: 100px;

  cursor: pointer;

  &:nth-last-of-type(1) {
    margin-right: 0;
  }

  &:nth-last-of-type(1) span {
    color: var(--gray);
  }

  &:nth-last-of-type(2) span {
    color: var(--gray);
  }

  &:nth-of-type(1) {
    margin-right: 140px;
    @media only screen and (max-width: 1300px) {
      margin-right: calc(100vw * (140 / 1300));
    }
    @media only screen and (max-width: 1100px) {
      margin-right: calc(100vw * (100 / 1100));
    }
    @media only screen and (max-width: 900px) {
      margin-right: calc(100vw * (40 / 900));
    }
    @media only screen and (max-width: 768px) {
      margin-right: calc(100vw * (50 / 428));
    }
  }

  @media only screen and (max-width: 1300px) {
    margin-right: calc(100vw * (100 / 1300));
  }
  @media only screen and (max-width: 1100px) {
    margin-right: calc(100vw * (60 / 1100));
  }

  @media only screen and (max-width: 900px) {
    margin-right: calc(100vw * (40 / 900));
  }
  @media only screen and (max-width: 768px) {
    margin-right: calc(100vw * (30 / 428));
  }
`;

export const Img = styled.div`
  width: 68px;
  height: 46px;

  & img {
    display: block;
    width: 100%;
    height: 100%;
  }

  @media only screen and (max-width: 768px) {
    width: calc(100vw * (30 / 428));
    height: calc(100vw * (20 / 428));
  }
`;

export const Span = styled.span`
  display: block;
  font-weight: 500;
  font-size: 16px;

  @media only screen and (max-width: 768px) {
    font-size: calc(100vw * (12 / 428));
  }

  ${({ active, disabled }) => {
    if (active) {
      return `color: var(--main);`;
    } else if (disabled) {
      return `color: var(--gray);`;
    } else if (!disabled && !active) {
      return `color: var(--white);`;
    }
  }}
`;

export const SubLi = styled.li`
  margin-right: 100px;
  cursor: pointer;

  &:nth-last-of-type(1) {
    margin-right: 0;
  }

  &:nth-of-type(1) {
    margin-right: 140px;
  }
`;

export const Right = styled.div`
  ${connect}
  width: 175px;
  height: 49px;
  @media only screen and (max-width: 768px) {
    width: calc(100vw * (115 / 428));
    height: calc(100vw * (30 / 428));

    margin-left: auto;
  }
`;

export const Btn = styled.div`
  width: 173px;
  height: 47px;
  @media only screen and (max-width: 768px) {
    width: calc(100vw * (113 / 428));
    height: calc(100vw * (28 / 428));
  }
`;

export const WalletId = styled.h2`
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
`;
