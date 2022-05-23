import React from "react";
import Modal from "react-modal";
import {
  ADDRESSES,
  getCollectionByPathname,
  getCollectionNameByPathname,
} from "../../../contants/addresses";

import * as S from "./style";

const MiningModal = ({ selected, onModal, closeModal, stake }) => {
  const customStyle = {
    overlay: {
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      background: "transparent",
      opacity: 2000,
      zIndex: 10,
    },

    content: {
      width: "886px",
      height: "653px",

      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      border: "rgba(255,255,255,0.2)",
      background: "rgba(255, 255, 255, 0.5)",
      backdropFilter: "blur(29px)",
      borderRadius: "10px",

      overflow: "hidden",
      outline: "none",
      zIndex: 12,
    },
  };

  return (
    <Modal
      isOpen={onModal}
      onRequestClose={() => closeModal()}
      closeTimeoutMS={500}
      style={customStyle}
    >
      <S.Container>
        <S.Close onClick={() => closeModal()}>
          <img src="/assets/img/icon/close.svg" alt="" />
        </S.Close>
        <S.H2>Are you sure to staking?</S.H2>
        <S.Ul>
          {selected.map((_, index) => (
            <S.Li>
              <S.Text>{getCollectionNameByPathname()}</S.Text>
              <S.Right>
                <S.RLeft>ID</S.RLeft>
                <S.RRight>{_.id}</S.RRight>
              </S.Right>
            </S.Li>
          ))}
        </S.Ul>
        <S.TotalBox>
          <S.TotalTitle>Total</S.TotalTitle>
          <S.TotalText>{selected.length}</S.TotalText>
        </S.TotalBox>
        <S.AlertTextBox>
          <S.AlertText>
            <S.AlertIcon>
              <img src="/assets/img/icon/error.svg" alt="" />
            </S.AlertIcon>
            <S.AlertMent>
              TX Signing may be required up to 3 -4 times.
            </S.AlertMent>
          </S.AlertText>
          <S.AlertText>
            <S.AlertIcon>
              <img src="/assets/img/icon/error.svg" alt="" />
            </S.AlertIcon>
            <S.AlertMent>
              All Staking NFTs have a Lockup time of 3day at the time of
              unstake.
            </S.AlertMent>
          </S.AlertText>
        </S.AlertTextBox>
        <S.Btn
          onClick={async () => {
            await stake(
              getCollectionByPathname(),
              selected.map((e) => e.id)
            );
            closeModal();
          }}
        >
          Stake
        </S.Btn>
      </S.Container>
    </Modal>
  );
};

export default MiningModal;
