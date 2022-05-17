//react
import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import * as S from "./style";

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <>
      <S.Container>
        <S.Wrap>
          <S.Inner>
            <S.Left>
              <S.Li onClick={() => navigate("/")}>
                <S.Img>
                  <img src="/assets/img/logo.png" alt="logo" />
                </S.Img>
              </S.Li>
              <S.Li onClick={() => navigate("/")}>
                <S.Span active={pathname === "/" || pathname === "/connect"}>
                  MAIN
                </S.Span>
              </S.Li>
              <S.Li onClick={() => navigate("/mining")}>
                <S.Span>KLC</S.Span>
              </S.Li>
              <S.Li>
                <S.Span>RANKING</S.Span>
              </S.Li>
              <S.Li>
                <S.Span>BREEDING</S.Span>
              </S.Li>
            </S.Left>
            <S.Right onClick={() => navigate(`/connect`)}>
              <S.Btn>
                <span>CONNECT</span>
              </S.Btn>
            </S.Right>
          </S.Inner>
        </S.Wrap>
      </S.Container>
    </>
  );
};

export default Header;
