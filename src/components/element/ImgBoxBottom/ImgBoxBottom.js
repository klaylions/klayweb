import React from "react";
import * as S from "./style";
function ImgBoxBottom({ data }) {
  const { title, text, src, alt } = data || {};
  return (
    <S.ImgBox>
      <img src={src} alt={alt} />
      <S.TextBox>
        <p>{title}</p>
        <span>{text}</span>
      </S.TextBox>
    </S.ImgBox>
  );
}

export default ImgBoxBottom;
