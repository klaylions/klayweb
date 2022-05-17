import React from "react";

import * as S from "./style";

const Box = ({ list, setList, idx }) => {
  // const [isActive, setIsActive] = React.useState(false);

  return (
    <S.Container
      active={list[idx].isActive}
      onClick={() => {
        let copy = [...list];
        copy[idx].isActive = !copy[idx].isActive;
        setList(copy);
      }}
      uri={list[idx].uri}
    >
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
      <div style={{ color: "white", padding: "4px" }}>{list[idx].id}</div>
    </S.Container>
  );
};

export default Box;
