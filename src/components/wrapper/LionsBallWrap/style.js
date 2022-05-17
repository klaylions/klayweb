import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 160px;
  margin-left: 120px;
`;

export const TopId = styled.h2`
  font-weight: 600;
  font-size: 16px;
  color: var(--gray);
  margin-right: 59px;
`;

export const InputDIV = styled.div`
  width: 437px;
  height: 59px;
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 100px;
  border: 1px solid var(--gray);
  outline: none;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  background: transparent;
  color: var(--text);

  &::placeholder {
    color: var(--gray);
  }
`;

export const Btn = styled.div`
  margin: 0 auto 170px;
  width: 295px;
  height: 60px;
  background: ${(props) =>
    props.active
      ? "linear-gradient(90.48deg, #86FFCA 0.24%, #45CA8A 52.29%, #03B68B 99.58%)"
      : "var(--gray)"};
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 22px;
  color: ${(props) => (props.active ? "var(--white)" : "var(--title)")};
`;

export const Ul = styled.ul`
  width: 946px;
  padding-right: 20px;
  max-height: 732px;
  overflow: auto;
`;

export const NoneLi = styled.li`
  width: 100%;
  height: 122px;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(29px);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 22px;
  color: var(--text);
`;

export const Li = styled.li`
  width: 100%;
  height: 168px;
  margin-bottom: 20px;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(29px);
  border-radius: 10px;

  &:nth-last-of-type(1) {
    margin-bottom: 0;
  }
`;

export const LiDIV = styled.div`
  padding: 25px 0;
`;

export const Inner = styled.div`
  width: 100%;
  height: 100%;
`;

export const Text = styled.p`
  font-weight: 400;
  text-align: center;
  font-size: 22px;
  color: var(--text);
  margin-bottom: 20px;

  &:nth-last-of-type(1) {
    margin-bottom: 0;
  }
`;
