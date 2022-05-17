import React from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";

import * as S from "./style";
import { terms } from "./terms";

function ConnectModal({ onModal, closeModal }) {
  const [isCheckA, setIsCheckA] = React.useState(false);
  const [isCheckB, setIsCheckB] = React.useState(false);
  const [isBtn, setIsBtn] = React.useState(true);

  const navigate = useNavigate();

  React.useEffect(() => {
    if (Boolean(isCheckA && isCheckB)) {
      setIsBtn(false);
    } else {
      setIsBtn(true);
    }
  }, [isCheckA, isCheckB]);

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
      width: "926px",
      height: "653px",

      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      border: "rgba(255,255,255,0.2)",
      background: "rgba(255, 255, 255, 0.1)",
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
        <S.Close onClick={() => navigate(-1)}>
          <img src="/assets/img/icon/close.svg" alt="" />
        </S.Close>
        <S.H2>Risk & Security</S.H2>
        <S.TextArea readOnly value={terms} />
        <S.CheckWrap>
          <S.CheckLabel>
            <S.CheckInput
              type="checkbox"
              checked={isCheckA}
              onChange={(e) => setIsCheckA(e.target.checked)}
            />
            KlayLions 이용 유의사항 (필수)
          </S.CheckLabel>
          <S.CheckLabel>
            <S.CheckInput
              type="checkbox"
              checked={isCheckB}
              onChange={(e) => setIsCheckB(e.target.checked)}
            />
            위험 요소에 대해 충분히 이해하였으며, 이에 동의하고 서비스를
            사용함을 확인합니다. (필수)
          </S.CheckLabel>
        </S.CheckWrap>
      </S.Container>
      <S.BtnGroup>
        <S.Btn
          type="button"
          disabled={isBtn}
          isActive={isBtn}
          onClick={() => closeModal(true)}
        >
          <span>Agree (Disable for 7days)</span>
        </S.Btn>
        <S.Btn
          type="button"
          disabled={isBtn}
          isActive={isBtn}
          onClick={() => closeModal()}
        >
          <span>Agree</span>
        </S.Btn>
      </S.BtnGroup>
    </Modal>
  );
}

export default ConnectModal;
