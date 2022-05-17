import React from "react";

import * as S from "./style";

const LionsBallWrap = () => {
  const [idVal, setIdVal] = React.useState("");
  const [isActive, setIsActive] = React.useState(false);
  React.useEffect(() => {}, [idVal]);

  return (
    <S.Container>
      <S.Top>
        <S.TopId>Discord ID:</S.TopId>
        <S.InputDIV>
          <S.Input
            type="text"
            placeholder="Klaylions#1234"
            value={idVal}
            onChange={(e) => setIdVal(e.target.value)}
          />
        </S.InputDIV>
      </S.Top>
      <S.Btn
        type="button"
        active={idVal.length > 0}
        disabled={!(idVal.length > 0)}
        onClick={() => setIsActive(true)}
      >
        Purchase
      </S.Btn>
      <S.Ul>
        {!isActive ? (
          <S.NoneLi>No list.</S.NoneLi>
        ) : (
          new Array(10).fill("").map((_, index) => (
            <S.Li key={index}>
              <S.LiDIV>
                <S.Inner>
                  <S.Text>Wallet : text</S.Text>
                  <S.Text>purchased number : text</S.Text>
                  <S.Text>Discord ID : text</S.Text>
                </S.Inner>
              </S.LiDIV>
            </S.Li>
          ))
        )}
      </S.Ul>
    </S.Container>
  );
};

export default LionsBallWrap;
