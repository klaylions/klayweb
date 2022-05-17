import React, { useState, useEffect } from "react";

import * as S from "./style";
import Aos from "aos";
import "aos/dist/aos.css";
const Box = ({ percent, text, check }) => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <S.Border
      percent={percent * 0.01}
      data-aos="fade-up"
      data-aos-offset="0"
      data-aos-duration={2000}
    >
      <S.PerText percent={percent * 0.01} check={check}>
        {check ? (
          <S.ImgBox>
            <img src="/assets/img/icon/ch.svg" alt="" />
          </S.ImgBox>
        ) : (
          percent + "%"
        )}
      </S.PerText>
      <S.DIV>{text}</S.DIV>
    </S.Border>
  );
};
//  <Box percent={100} /> 이렇게 쓰면 됌
export default Box;
