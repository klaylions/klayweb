//react
import React from "react";
import * as S from "./style";

import { Sns } from "../..";

const Footer = () => {
  return (
    <>
      <S.Container>
        <S.Wrap>
          <S.SnsWrap>
            <Sns />
          </S.SnsWrap>
          <S.TextBox>
            <S.Logo>
              <img src="/assets/img/logo.png" alt="" />
            </S.Logo>
            <S.Text>Klaylionsofficial@gmail.com</S.Text>
            <S.Text>COPYLIGHT ⓒKlay Lions. ALL RIGHTS RESERVED</S.Text>
          </S.TextBox>
        </S.Wrap>
      </S.Container>
    </>
  );
};

export default Footer;
