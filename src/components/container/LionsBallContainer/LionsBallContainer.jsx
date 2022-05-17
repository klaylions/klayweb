import React from "react";

import * as S from "./style";

import { LionsBallTop, LionsBallWrap } from "../../../components";

const LionsBallContainer = () => {
  return (
    <S.Container>
      <S.Wrap>
        <LionsBallTop />
        <S.Img>
          <img src="/assets/img/rule2.png" alt="" />
        </S.Img>
        <LionsBallWrap />
      </S.Wrap>
    </S.Container>
  );
};

export default LionsBallContainer;
