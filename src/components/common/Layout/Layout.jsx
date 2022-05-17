import React, { useState } from "react";
import * as S from "./style";

// component
import { Header, Footer, Sns } from "../../../components";

const Layout = ({ children }) => {
  const [isSnsbtn, setIsSnsbtn] = useState(false);
  return (
    <S.Container>
      <S.Blur>
        <S.DIV>
          <Header />
          {children}
          <Footer />
        </S.DIV>
      </S.Blur>

      <S.MobileFixbtnContainer>
        <S.FixBtnWrap
          onClick={() => {
            setIsSnsbtn((val) => !val);
          }}
        >
          <S.ArrBtn type="button" isSnsbtn={isSnsbtn}>
            <img src="/assets/img/icon/arr.svg" alt="" />
          </S.ArrBtn>
        </S.FixBtnWrap>
        <S.BtnSnsWrap isSnsbtn={isSnsbtn}>
          <Sns />
        </S.BtnSnsWrap>
      </S.MobileFixbtnContainer>
    </S.Container>
  );
};

export default Layout;
