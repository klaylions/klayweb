import styled from "styled-components";

import { connect } from "../../../utils/ShareStyle";

export const Container = styled.div`
  width: 100%;
`;

export const Wrap = styled.div`
  width: 100%;
  padding: 220px 0 590px;
`;

export const Inner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Text = styled.h2`
  color: var(--title);
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 80px;
  text-align: center;
`;

export const Btn = styled.div`
  ${connect}
  margin: 0 auto;
  width: 295px;
  height: 60px;
`;

export const DIV = styled.div`
  width: 293px;
  height: 58px;
`;
