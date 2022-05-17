import React from "react";
import * as S from "./style";

// component
import { SubHeader, Footer } from "../..";

const Layout = ({ children }) => {
  return (
    <S.Container>
      <S.Blur>
        <S.DIV>
          <SubHeader />
          {children}
          <Footer />
        </S.DIV>
      </S.Blur>
    </S.Container>
  );
};

export default Layout;
