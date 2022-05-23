import React, { useState, useEffect, useRef } from "react";

import * as S from "./style";

import { StartBox, LockUpModal } from "../..";
import { miningData3 } from "../../../mock/miningDummy";
import { useAddress } from "../../../hooks/web3/web3-context";
import {
  ADDRESSES,
  getCollectionByPathname,
} from "../../../contants/addresses";
import { getUri } from "../../../helpers/getUri";
import { getTimeFormat } from "../../../helpers/getTimestamp";
const LockUpWrap = ({ refresh, getLockedNft, unlock }) => {
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);
  const [isModal, setIsModal] = useState(false);
  const address = useAddress();

  useEffect(() => {
    if (!address) return;

    getLockedNft(getCollectionByPathname()).then((res) => {
      let lockedList = [];
      res.forEach((data) => {
        console.log(data.releaseTime);
        lockedList.push({
          releaseTime: getTimeFormat(data.releaseTime),
          id: data.tokenId,
          uri: { image: getUri(getCollectionByPathname(), data.tokenId) },
          canRelease:
            new Date().getTime() - Number(data.releaseTime * 1000) > 0,
        });
      });
      setList(lockedList);
    });
  }, [address, refresh, getCollectionByPathname()]);

  useEffect(() => {
    let result = list.filter((item) => item.isActive);

    setTotal(result.length);
  }, [list]);

  return (
    <S.Container>
      <LockUpModal
        list={list.filter((e) => e.canRelease)}
        closeModal={() => setIsModal(false)}
        onModal={isModal}
        unlock={unlock}
      />
      <S.Top>
        <S.H2>LockUP~</S.H2>
        <S.Icon>
          <img src="/assets/img/bigLion.png" alt="" />
        </S.Icon>
        <S.Span>refresh</S.Span>
      </S.Top>
      <S.Ul>
        {list.map((item, index) => (
          <S.Li key={item.id}>
            <StartBox
              lockup={true}
              list={list}
              setList={setList}
              idx={index}
              data={item}
              lock
            />
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
          <span>UNLOCK</span>
        </S.Right>
      </S.Bottom>
    </S.Container>
  );
};

export default LockUpWrap;
