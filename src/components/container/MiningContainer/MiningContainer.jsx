import React from "react";

import * as S from "./style";

import { NotMiningWrap, MiningWrap, ConnectModal } from "../../../components";
import { useStakingNft } from "../../../hooks/staking";
import { ADDRESSES } from "../../../contants/addresses";
import { useAddress } from "../../../hooks/web3/web3-context";

const MiningContainer = () => {

  const [isModalToggle, setIsModalToggle] = React.useState(false);
  
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
        <S.Inner>
          <S.DIV>
            <NotMiningWrap />
          </S.DIV>
        </S.Inner>
        <S.Inner>
          <S.DIV>
            <MiningWrap />
          </S.DIV>
        </S.Inner>
      </S.Wrap>
    </S.Container>
  );
};

export default MiningContainer;
