import React, { useState, useEffect, useRef } from "react";

import * as S from "./style";

import { MiningBox, MiningModal } from "../..";
import { miningData } from "../../../mock/miningDummy";
import { useAddress } from "../../../hooks/web3/web3-context";
import { useStakingNft } from "../../../hooks/staking";
import {
  ADDRESSES,
  getCollectionByPathname,
} from "../../../contants/addresses";
const NotMiningWrap = ({ getWalletNft, refresh, stake }) => {
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);

  const [isModal, setIsModal] = useState(false);
  const address = useAddress();

  useEffect(() => {
    if (!address) return;
    getWalletNft(getCollectionByPathname()).then((res) => {
      let walletList = [];
      res.ids.forEach((id, i) => {
        walletList.push({
          id: id,
          isActive: false,
          uri: res.uris[i],
        });
      });
      setList(walletList);
    });
  }, [address, refresh, getCollectionByPathname()]);

  useEffect(() => {
    let result = list.filter((item) => item.isActive);
    setTotal(result.length);
  }, [list]);
  return (
    <S.Container>
      <MiningModal
        closeModal={() => setIsModal(false)}
        selected={list.filter((e) => e.isActive === true)}
        onModal={isModal}
        stake={stake}
      />
      <S.Top>
        <S.H2>Not mining</S.H2>
        <S.Icon>
          <img src="/assets/img/bigLion.png" alt="" />
        </S.Icon>
        <S.Span>refresh</S.Span>
      </S.Top>
      <S.Ul>
        {list.length > 0 ? (
          list.map((item, index) => (
            <S.Li key={item.id}>
              <MiningBox list={list} setList={setList} idx={index} />
            </S.Li>
          ))
        ) : (
          <>Loading ...</>
        )}
      </S.Ul>
      <S.Bottom>
        <S.Left>
          Selected <span>{total}</span>
        </S.Left>
        <S.Right onClick={() => setIsModal(true)}>
          <span>MINING</span>
        </S.Right>
      </S.Bottom>
    </S.Container>
  );
};

export default NotMiningWrap;
