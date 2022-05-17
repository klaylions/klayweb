import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
`;

export const H2 = styled.h2`
  font-family: "BlackHanSans";
  font-size: 30px;
  color: var(--title);
  margin-right: 4px;
`;

export const Icon = styled.div`
  width: 50px;
  height: 50px;
  margin-right: 2px;

  & img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

export const Span = styled.span`
  color: var(--main);
  font-size: 20px;
`;

export const Ul = styled.ul`
  width: 100%;
  height: 1000px;
  overflow: auto;
  margin-bottom: 70px;
  display: flex;
  flex-wrap: wrap;
`;

export const Li = styled.li`
  /* &:nth-child(5n) > div {
    margin-right: 0;
  } */
`;

export const Bottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Left = styled.p`
  font-weight: 500;
  font-size: 22px;
  color: var(--title);

  & span {
    margin-right: 6px;
    color: var(--main);
  }
`;

export const Right = styled.div`
  width: 189px;
  height: 51px;
  background: linear-gradient(90.97deg, #45ffa6 0%, #00c2ff 100%);
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  & span {
    font-weight: 700;
    font-size: 20px;
    color: var(--white);
  }
`;
