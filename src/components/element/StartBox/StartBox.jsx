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
        {/* {!list[idx].isActive && list[idx].isMining && (
          <S.StartIcon>
            <S.Text>Mining Start</S.Text>
            <S.Icon>
              <img src="/assets/img/icon/alarm.svg" alt="" />
            </S.Icon>
          </S.StartIcon>
        )} */}
        {list[idx]?.uri?.image.endsWith(".mp4") ||
        !list[idx]?.uri?.image.includes(".") ? (
          <video width="640" height="360" controls>
            <source
              src={
                list[idx]?.uri?.image.startsWith("https://")
                  ? list[idx]?.uri?.image
                  : `https://ipfs.io/ipfs/${list[idx]?.uri?.image.slice(7)}`
              }
              type="video/mp4"
            />
          </video>
        ) : (
          <img
            style={{
              width: "300px",
              height: "300px",
            }}
            src={`${
              list[idx]?.uri?.image.startsWith("https://")
                ? list[idx]?.uri?.image
                : `https://ipfs.io/ipfs/${list[idx]?.uri?.image.slice(7)}`
            }`}
            alt="nft"
          />
        )}
      </S.Container>
      <div style={{ color: "white", padding: "4px" }}>{list[idx].id}</div>
      <S.TextBox>
        <S.Text1>{text1}</S.Text1>
        <S.KLCDiv>
          <S.KLCText>MINING KLC</S.KLCText>
          <S.KLCIcon>
            <img src="/assets/img/miniLion.png" alt="" />
          </S.KLCIcon>
          <S.Price>{list[idx].earned}</S.Price>
        </S.KLCDiv>
        <S.Text2>{text2}</S.Text2>
      </S.TextBox>
    </S.Box>
  );
};

export default StartBox;
