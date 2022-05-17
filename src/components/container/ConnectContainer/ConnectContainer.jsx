import React from "react";

import * as S from "./style";

const ConnectContainer = () => {
  return (
    <S.Container>
      <S.Wrap>
        <S.Inner>
          <div>
            <S.Text>connect your kaikas wallet.</S.Text>
            <S.Btn>
              <S.DIV>
                <span>Connect</span>
              </S.DIV>
            </S.Btn>
          </div>
        </S.Inner>
      </S.Wrap>
    </S.Container>
  );
};

export default ConnectContainer;
