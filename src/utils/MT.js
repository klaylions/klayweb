// 만드실 프로젝트에 맞춰서 사이즈 여기서 조절하시고 함수 추가하실 분들을 추가하셔서 사용하면 됩니다.
// 불러올 때는
// import { T, M } from 경로
// 자동완성으로 사용하고 싶으시면 윤석님이나 동현님 불러주세요. ( Snippets )

const T = (size) => {
  return `calc(100vw * (${size}/1450))`;
};

const M = (size) => {
  return `calc(100vw * (${size}/428))`;
};

const Mh = (size) => {
  return `calc(100vh * (${size}/926))`;
};

export { T, M, Mh };
