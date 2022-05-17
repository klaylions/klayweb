import React, { useState, useEffect, useRef } from "react";

import * as S from "./style";

import { StartBox, UnMiningModal } from "../..";
import { miningData2 } from "../../../mock/miningDummy";
const MiningWrap = () => {
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);
  const [isModal, setIsModal] = useState(false);

  useEffect(() => {
    setList(miningData2);

    return () => {
      setList([]);
    };
  }, []);

  useEffect(() => {
    let result = list.filter((item) => item.isActive);

    setTotal(result.length);
  }, [list]);

  return (
    <S.Container>
      <UnMiningModal closeModal={() => setIsModal(false)} onModal={isModal} />
      <S.Top>
        <S.H2>MINING~</S.H2>
        <S.Icon>
          <img src="/assets/img/bigLion.png" alt="" />
        </S.Icon>
        <S.Span>refresh</S.Span>
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
