import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
const SnsWrapper = () => {
  const navigate = useNavigate();

  return (
    <S.SnsUl>
      <S.SNS
        onClick={() =>
          //  navigate(`/https://twitter.com/KlayLionsNFT`)
          {
            window.open("https://twitter.com/KlayLionsNFT", "_blank");
          }
        }
      >
        <img src="/assets/img/icon/Twitter.svg" alt="" />
      </S.SNS>
      <S.SNS
        onClick={() =>
          // navigate(`/https://discord.com/invite/DEKyBYtjU5`)
          {
            window.open("https://discord.com/invite/DEKyBYtjU5", "_blank");
          }
        }
      >
        <img src="/assets/img/icon/discord.svg" alt="" />
      </S.SNS>
      <S.SNS
        onClick={() =>
          // navigate(`/https://opensea.io/collection/klay-lions`)
          {
            window.open("https://opensea.io/collection/klay-lions", "_blank");
          }
        }
      >
        <img src="/assets/img/icon/opensea.svg" alt="" />
      </S.SNS>
      <S.SNS
        onClick={() =>
          // navigate(`/https://lions-klay.gitbook.io/klay-lions`)
          {
            window.open("https://lions-klay.gitbook.io/klay-lions", "_blank");
          }
        }
      >
        <img src="/assets/img/icon/gitbook.svg" alt="" />
      </S.SNS>
    </S.SnsUl>
  );
};

export default SnsWrapper;
