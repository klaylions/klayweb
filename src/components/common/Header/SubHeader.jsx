//react
import React, { useMemo } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { shortenAddress } from "../../../helpers/shortenAddress";
import { useAddress, useWeb3Context } from "../../../hooks/web3/web3-context";
import * as S from "./style";

const SubHeader = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { address, connect, disconnect, connected } = useWeb3Context();

  React.useEffect(() => {
    console.log(pathname);
  }, []);

  const Titles = [
    { id: 1, text: "STAKING", disabled: true },
    { id: 2, text: "MINING", link: "/mining", disabled: false },
    { id: 3, text: "LIONS BALL", link: "/lionsball", disabled: false },
    { id: 4, text: "VOTE", disabled: true },
    { id: 5, text: "MINIGAME", disabled: true },
  ];

  const btnText = useMemo(() => {
    if (address)
      return (
        <S.Btn>
          <span onClick={disconnect} style={{ cursor: "pointer" }}>
            {shortenAddress(address)}
          </span>
        </S.Btn>
      );
    else
      return (
        <S.Btn>
          <span onClick={connect} style={{ cursor: "pointer" }}>
            CONNECT
          </span>
        </S.Btn>
      );
  }, [address, connected]);

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
              {Titles.map((item) => (
                <S.Li
                  key={item.id}
                  onClick={() => {
                    if (item.link) navigate(item.link);
                  }}
                >
                  <S.Span
                    active={item.link && pathname === item.link}
                    disabled={item.disabled}
                  >
                    {item.text}
                  </S.Span>
                </S.Li>
              ))}
            </S.Left>
            <S.WalletId>{btnText}</S.WalletId>
          </S.Inner>
        </S.Wrap>
      </S.Container>
    </>
  );
};

export default SubHeader;
