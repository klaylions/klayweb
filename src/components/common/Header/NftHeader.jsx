//react
import React, { useMemo } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { shortenAddress } from "../../../helpers/shortenAddress";
import { useAddress, useWeb3Context } from "../../../hooks/web3/web3-context";
import * as S from "./style";

const NftHeader = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { address, connect, disconnect, connected, providerWrapper } =
    useWeb3Context();

  const Titles = [
    { id: 1, text: "KLAYLIONS", link: "/mining/klaylions", disabled: false },
    {
      id: 2,
      text: "KLAYLIONS LEGENDARY",
      link: "/mining/klaylionsLegendary",
      disabled: false,
    },
    { id: 3, text: "PARTNER", disabled: true },
    { id: 4, text: "PARTNER2", disabled: true },
    { id: 5, text: "PARTNER3", disabled: true },
  ];

  return (
    <>
      <S.Container>
        <S.Wrap>
          <S.Inner>
            <S.Left>
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
          </S.Inner>
        </S.Wrap>
      </S.Container>
    </>
  );
};

export default NftHeader;
