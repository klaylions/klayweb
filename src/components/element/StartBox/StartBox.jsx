import React from "react";

import * as S from "./style";

const StartBox = ({ list, setList, idx, data }) => {
  const { text1, klc, text2 } = data || {};
  return (
    <S.Box>
      <S.Container
        active={list[idx].isActive}
        onClick={() => {
          let copy = [...list];
          copy[idx].isActive = !copy[idx].isActive;
          setList(copy);
        }}
      >
        {!list[idx].isActive && list[idx].isMining && (
          <S.StartIcon>
            <S.Text>Mining Start</S.Text>
            <S.Icon>
              <img src="/assets/img/icon/alarm.svg" alt="" />
            </S.Icon>
          </S.StartIcon>
        )}
      </S.Container>
      <S.TextBox>
        <S.Text1>{text1}</S.Text1>
        <S.KLCDiv>
          <S.KLCText>MINED KLC</S.KLCText>
          <S.KLCIcon>
            <img src="/assets/img/miniLion.png" alt="" />
          </S.KLCIcon>
          <S.Price>{klc}</S.Price>
        </S.KLCDiv>
        <S.Text2>{text2}</S.Text2>
      </S.TextBox>
    </S.Box>
  );
};

export default StartBox;
