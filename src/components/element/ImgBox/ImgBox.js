import React from "react";
import * as S from "./style";
function ImgBox({ data }) {
  const { title, src, alt } = data || {};
  return (
    <S.ImgBox>
      <img src={src} alt={alt} />
    </S.ImgBox>
  );
}

export default ImgBox;
