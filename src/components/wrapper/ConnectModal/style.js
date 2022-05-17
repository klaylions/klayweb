import styled from "styled-components";

export const Container = styled.div`
  padding: 20px 20px 0 60px;
  position: relative;
  z-index: 15;
`;

export const Close = styled.div`
  width: 12px;
  height: 12px;
  margin-left: auto;
  margin-bottom: 28px;
  cursor: pointer;

  & img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

export const H2 = styled.h2`
  font-size: 18px;
  font-weight: 700;
  color: var(--white);
  margin-bottom: 35px;
`;

export const TextArea = styled.textarea`
  width: 786px;
  height: 195px;
  padding: 10px;
  margin-bottom: 71px;
  resize: none;
  outline: none;
  border: none;
  background: transparent;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: var(--white);
`;

export const CheckWrap = styled.div`
  width: 100%;
  margin-bottom: 76px;
`;

export const CheckLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  font-size: 16px;
  font-weight: 400;
  color: var(--white);
`;

export const CheckInput = styled.input`
  margin-right: 24px;
  appearance: none;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: url("/assets/img/icon/check.svg");
  }

  &:checked::after {
    background: url("/assets/img/icon/check_on.svg");
  }
`;

export const BtnGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 70px;
`;

export const Btn = styled.button`
  width: 251px;
  height: 49px;
  border: none;
  ${({ isActive }) =>
    isActive
      ? "background: transparent; border: 1px solid #666666;"
      : "background: rgba(17, 17, 17, 0.5);"}
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 79px;
  outline: none;
  cursor: pointer;

  & span {
    font-weight: 700;
    font-size: 16px;

    ${({ isActive }) =>
      isActive
        ? `color: #666666;`
        : `background: linear-gradient(
      90.48deg,
      #86ffca 0.24%,
      #45ca8a 52.29%,
      #03b68b 99.58%
    ); -webkit-background-clip: text; -webkit-text-fill-color: transparent;`}
  }

  &:nth-last-of-type(1) {
    margin-right: 0;
  }
`;
