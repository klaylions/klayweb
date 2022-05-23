import React from "react";

import * as S from "./style";

import {
  NotMiningWrap,
  MiningWrap,
  ConnectModal,
  LockUpWrap,
} from "../../../components";
import { useLocation } from "react-router-dom";
import { useStakingNft } from "../../../hooks/staking";
import { ADDRESSES } from "../../../contants/addresses";
import { useAddress } from "../../../hooks/web3/web3-context";
import NftHeader from "../../common/Header/NftHeader";

const MiningContainer = () => {
  const [isModalToggle, setIsModalToggle] = React.useState(false);
  const { pathname } = useLocation();

  
  const {
    getWalletNft,
    stake,
    refresh,
    getStakedNft,
    claim,
    unstake,
    unlock,
    getLockedNft,
  } = useStakingNft();

  React.useEffect(() => {
    if (window.localStorage.getItem("isModalToggle") == "false") {
      setIsModalToggle(false);
    } else {
      setIsModalToggle(true);
    }
  }, []);

  const closeModal = (local) => {
    if (local) {
      window.localStorage.setItem("isModalToggle", "false");
      setIsModalToggle(false);
    } else {
      setIsModalToggle(false);
    }
  };
  
  return (
    <S.Container>
      <ConnectModal closeModal={closeModal} onModal={isModalToggle} />
      <S.Wrap>
        <NftHeader />
        <S.Inner>
          <S.DIV>
            <NotMiningWrap
              getWalletNft={getWalletNft}
              stake={stake}
              refresh={refresh}
            />
          </S.DIV>
        </S.Inner>
        <S.Inner>
          <S.DIV>
            <MiningWrap
              getStakedNft={getStakedNft}
              refresh={refresh}
              claim={claim}
              unstake={unstake}
            />
          </S.DIV>
        </S.Inner>
        <S.Inner>
          <S.DIV>
            <LockUpWrap
              getLockedNft={getLockedNft}
              refresh={refresh}
              unlock={unlock}
            />
          </S.DIV>
        </S.Inner>
      </S.Wrap>
    </S.Container>
  );
};

export default MiningContainer;
