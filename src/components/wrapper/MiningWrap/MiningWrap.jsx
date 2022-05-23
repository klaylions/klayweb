import React, { useState, useEffect, useRef } from "react";

import * as S from "./style";

import { StartBox, UnMiningModal } from "../..";
import { miningData2 } from "../../../mock/miningDummy";
import { useStakingNft } from "../../../hooks/staking";
import { useAddress } from "../../../hooks/web3/web3-context";
import {
  ADDRESSES,
  getCollectionByPathname,
} from "../../../contants/addresses";
const MiningWrap = ({ getStakedNft, refresh, claim, unstake }) => {
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);
  const [isModal, setIsModal] = useState(false);

  const address = useAddress();

  useEffect(() => {
    if (!address) return;
    getStakedNft(getCollectionByPathname()).then((res) => {
      let walletList = [];
      console.log(res);
      res.ids.forEach((id, i) => {
        walletList.push({
          id,
          isActive: false,
          uri: res.uris[i],
          earned: res.earned[i],
        });
      });
      setList(walletList);
    });
    // res.ids.}
  }, [address, refresh, getCollectionByPathname()]);

  useEffect(() => {
    let result = list.filter((item) => item.isActive);

    setTotal(result.length);
  }, [list]);

  return (
    <S.Container>
      <UnMiningModal
        selected={list.filter((e) => e.isActive === true)}
        closeModal={() => setIsModal(false)}
        onModal={isModal}
        unstake={unstake}
      />
      <S.Top>
        <S.H2>MINING~</S.H2>
        <S.Icon>
          <img src="/assets/img/bigLion.png" alt="" />
        </S.Icon>
        <S.Right
          onClick={() =>
            claim(
              getCollectionByPathname(),
              list.map((e) => e.id)
            )
          }
        >
          <span>CLAIM</span>
        </S.Right>
      </S.Top>
      <S.Ul>
        {list.map((item, index) => (
          <S.Li key={item.id}>
            <StartBox list={list} setList={setList} idx={index} data={item} />
          </S.Li>
        ))}
      </S.Ul>
      <S.Bottom>
        <div>
          <S.Left>
            Selected <span>{total}</span>
          </S.Left>
          <S.Left>
            Option <span>{total}</span>
          </S.Left>
        </div>

        <S.Right onClick={() => setIsModal(true)}>
          <span>UNMINING</span>
        </S.Right>
      </S.Bottom>
    </S.Container>
  );
};

export default MiningWrap;
