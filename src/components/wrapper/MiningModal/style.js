import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  position: relative;
  z-index: 15;
`;

export const Close = styled.div`
  width: 12px;
  height: 12px;
  margin-left: auto;
  margin-bottom: 26px;
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
  margin-bottom: 54px;
  text-align: center;
`;

export const Ul = styled.ul`
  width: 651px;
  height: 146px;
  margin: 0 auto;
  overflow: auto;
  padding-bottom: 40px;
  border-bottom: 1px solid var(--white);
`;

export const Li = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
`;

export const Text = styled.h2`
  font-weight: 400;
  font-size: 16px;
  color: var(--white);
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;
`;

export const RRight = styled.span`
  font-weight: 600;
  font-size: 18px;
  color: var(--main);
`;

export const RLeft = styled(RRight)`
  &::after {
    content: "";
    display: inline-flex;
    margin: 0 6px;
    width: 1px;
    height: 14px;
    background: var(--white);
  }
`;

export const TotalBox = styled.div`
  width: 651px;
  margin: 40px auto 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TotalTitle = styled.h2`
  font-weight: 400;
  font-size: 16px;
  color: var(--white);
`;

export const TotalText = styled.p`
  font-weight: 600;
  font-size: 18px;
  color: var(--main);
`;

export const AlertTextBox = styled.div`
  width: 651px;
  margin: 0 auto 66px;
`;

export const AlertText = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
`;

export const AlertIcon = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 8px;

  & img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

export const AlertMent = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: #111111;
  line-height: 1.2;
`;

export const Btn = styled.div`
  margin: 0 auto;
  width: 251px;
  height: 49px;
  background: rgba(17, 17, 17, 0.8);
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
`;
