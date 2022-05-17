import React, { useState, useEffect } from "react";
import {
  Layout,
  Box,
  Sns,
  Swipers,
  ImgBox,
  ImgBoxBottom,
} from "../../components";
import { connect } from "../../utils/ShareStyle";
import styled from "styled-components";

import Aos from "aos";
import "aos/dist/aos.css";
const MainPage = () => {
  // section C Items
  const [imgList, setImgList] = useState([
    {
      title: "1",
      src: "/assets/img/character/character_1.png",
      alt: "car",
    },
    {
      title: "1",
      src: "/assets/img/character/character_2.png",
      alt: "car",
    },
    {
      title: "1",
      src: "/assets/img/character/character_3.png",
      alt: "car",
    },
    {
      title: "1",
      src: "/assets/img/character/character_4.png",
      alt: "car",
    },
    {
      title: "1",
      src: "/assets/img/character/character_1.png",
      alt: "car",
    },
    {
      title: "1",
      src: "/assets/img/character/character_2.png",
      alt: "car",
    },
    {
      title: "1",
      src: "/assets/img/character/character_3.png",
      alt: "car",
    },
    {
      title: "1",
      src: "/assets/img/character/character_4.png",
      alt: "car",
    },
    {
      title: "1",
      src: "/assets/img/character/character_1.png",
      alt: "car",
    },
    {
      title: "1",
      src: "/assets/img/character/character_2.png",
      alt: "car",
    },
    {
      title: "1",
      src: "/assets/img/character/character_3.png",
      alt: "car",
    },
    {
      title: "1",
      src: "/assets/img/character/character_4.png",
      alt: "car",
    },
  ]);
  const modulesOpt = {
    speed: 3000,
    // slidesPerView: 4, // 한 슬라이드당 보여줄 slide 갯수
    loop: true, // 슬라이드 반복 (기본값 false)
    autoplay: {
      //   //자동 재생 5초,
      delay: 0,
      disableOnInteraction: false, //false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
    },
    breakpoints: {
      // 반응형 브레이크포인트, width값 숫자로 옵션 다르게 적용 가능
      360: {
        slidesPerView: 3,
      },
      // 768: {
      // slidesPerView: 4,
      // },
      1000: {
        slidesPerView: 4,
      },
      // 1290: {
      //   slidesPerView: 5,
      // },
    },
  };

  // section E Items
  const [percentList, setPercentList] = useState([
    {
      text: (
        <>
          <ListText>
            클레이 라이언즈 홈페이지 & 라이언즈 커뮤니티 오픈
            <br />
          </ListText>
          <ListText>
            클레이 라이언즈 화이트리스트 민트
            <br />
          </ListText>
        </>
      ),
      per: 100,
    },

    {
      text: (
        <>
          <ListText>
            $KLC 토큰 발행
            <br />
          </ListText>
          <ListText>
            클레이 라이언즈 마이닝&스테이킹 시스템 오픈
            <br />
          </ListText>
          <ListText>
            라이언즈 볼 이벤트 진행
            <br />
          </ListText>
        </>
      ),
      per: 100,
    },

    {
      text: (
        <>
          <ListText>
            $KLC 클레이 스왑 상장
            <br />
          </ListText>
          <ListText>
            레전더리 라이언즈 공개
            <br />
          </ListText>
          <ListText>
            클레이 라이언즈 퍼블릭 민트
            <br />
          </ListText>
        </>
      ),
      per: 0,
    },

    {
      text: (
        <>
          <ListText>
            홀더 거버넌스 오픈
            <br />
          </ListText>
          <ListText>
            클레이 라이언즈 브리딩 구축
            <br />
          </ListText>
          <ListText>
            피규어 및 굿즈 에어드랍 실시
            <br />
          </ListText>
        </>
      ),
      per: 0,
    },

    {
      text: (
        <>
          <ListText>
            클레이라이언즈 추가 소각처 진행
            <br />
          </ListText>
          <ListText>
            클레이라이언즈 크로스 체인 사업 추진
            <br />
          </ListText>
          <ListText>
            라이언즈 애니메이션 제작(유아교육용)
            <br />
          </ListText>
          <ListText>
            라이언즈 홀더 대상 파티 (오프라인 파티 추진)
            <br />
          </ListText>
          <ListText>
            ...more + Klay Lions RoadMap2.0
            <br />
          </ListText>
        </>
      ),
      per: 0,
    },

    {
      text: (
        <>
          <ListText>
            클레이라이언즈는 홀더 거버넌스 시스템을
            <br />
          </ListText>
          <ListText>
            이용하여 홀더들과 함께 프로젝트&KLC의
            <br />
          </ListText>
          <ListText>
            생태계확장&로드맵 진행과 추가를
            <br />
          </ListText>
          <ListText>
            결정합니다.
            <br />
          </ListText>
        </>
      ),
      per: 100,
      check: true,
    },
  ]);

  // section F items
  const [teamList, setTeamList] = useState([
    {
      title: "ROGER",
      text: "커뮤니티 매니저",
      src: "/assets/img/character/team_1.png",
      alt: "car",
    },
    {
      title: "JUICY",
      text: "마케터",
      src: "/assets/img/character/team_2.png",
      alt: "car",
    },
    {
      title: "LEO",
      text: "메인 디렉터",
      src: "/assets/img/character/team_3.png",
      alt: "car",
    },
    {
      title: "BEAST",
      text: "개발자",
      src: "/assets/img/character/team_4.png",
      alt: "car",
    },
    {
      title: "DITO",
      text: "메인 아티스트",
      src: "/assets/img/character/team_5.png",
      alt: "car",
    },
  ]);

  const modulesOpt2 = {
    // slidesPerView: 5, // 한 슬라이드당 보여줄 slide 갯수
    spaceBetween: 50, // 슬라이드 사이의 간격

    // loop: true, // 슬라이드 반복 (기본값 false)

    breakpoints: {
      // 반응형 브레이크포인트, width값 숫자로 옵션 다르게 적용 가능
      360: {
        slidesPerView: 3,
        spaceBetween: 15, // 슬라이드 사이의 간격
      },
      // 768: {
      // slidesPerView: 4,
      // },
      1000: {
        slidesPerView: 4,
      },
      1290: {
        slidesPerView: 5,
      },
    },
  };

  const containerStyle = {
    background:
      "url('/assets/img/back_logo.svg') center center / 65% 65% no-repeat",
  };

  // section G items
  const [partnerList, setPartnerList] = useState([
    {
      src: "/assets/img/icon/partner/partner_1.svg",
      alt: "partnerlogo1",
    },
    {
      src: "/assets/img/icon/partner/partner_2.svg",
      alt: "partnerlogo1",
    },
    {
      src: "/assets/img/icon/partner/partner_3.svg",
      alt: "partnerlogo1",
    },
    {
      src: "/assets/img/icon/partner/partner_4.svg",
      alt: "partnerlogo1",
    },
    {
      src: "/assets/img/icon/partner/partner_5.svg",
      alt: "partnerlogo1",
    },
    {
      src: "/assets/img/icon/partner/partner_6.svg",
      alt: "partnerlogo1",
    },
    {
      src: "/assets/img/icon/partner/partner_7.svg",
      alt: "partnerlogo1",
    },
    {
      src: "/assets/img/icon/partner/partner_8.svg",
      alt: "partnerlogo1",
    },
    {
      src: "/assets/img/icon/partner/partner_9.svg",
      alt: "partnerlogo1",
    },
    {
      src: "/assets/img/icon/partner/partner_10.svg",
      alt: "partnerlogo1",
    },
  ]);

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <Layout>
      {/* <MobileFixbtnContainer>
        <FixBtnWrap>
          <ArrBtn type="button">버튼</ArrBtn>
        </FixBtnWrap>
        <BtnSnsWrap>
          <Sns />
        </BtnSnsWrap>
      </MobileFixbtnContainer> */}
      <Container>
        {/* 상단 sns  */}
        <SectionA>
          <SectionADIV>
            <SnsWrapper>
              <Sns />
            </SnsWrapper>
          </SectionADIV>
        </SectionA>

        {/* section2  video */}
        <SectionB>
          <FlexDIV>
            <VideoBox>
              <Video
                controls={false}
                muted={true}
                autoplay="true"
                autoPlay={true}
                playsInline={true}
                loop={true}
                src="/assets/video/main_video2.mp4"
                type="video/mp4"
              ></Video>
            </VideoBox>

            <FlexDIVA column>
              <ImgCon>
                <img src="/assets/img/logo2.svg" alt="logoimage" />
              </ImgCon>

              <TextWrap>
                <p>
                  5,000 마리의 라이언즈들은 그 무엇도 두려워하지 않습니다
                  그들에겐 세상을 바꿀 용기와 세상을 바꿀 힘이 있습니다
                  <br />
                  <br />
                  라이언즈와 함께 세상을 바꿔보시겠습니까?
                </p>
              </TextWrap>
            </FlexDIVA>
          </FlexDIV>
        </SectionB>

        <SectionC
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="100"
          data-aos-duration="2000"
        >
          <SecTitle>Klay Lions</SecTitle>
          <SwDiv>
            <Swipers
              data={imgList}
              modules={modulesOpt}
              // containerStyle={containerStyle}
              component={<ImgBox />}
              // slideStyle={slideStyle}
              className={"www"}
            />
          </SwDiv>
          <Right
            onClick={() => {
              window.open("https://opensea.io/collection/klay-lions", "_blank");
            }}
          >
            <Btn>
              <span>BUY ON OPENSEA</span>
            </Btn>
          </Right>
        </SectionC>

        <SectionD
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="100"
          data-aos-duration="2000"
        >
          <SecTitle>About KLC (Klay LionsCoin)</SecTitle>
          <SecDImgBox>
            {/* <img src="/assets/img/chart.png" alt="" /> */}
          </SecDImgBox>
        </SectionD>

        <SectionE>
          <SecTitle>Road map</SecTitle>
          <PerDiv>
            {percentList?.map((item) => {
              return (
                <Box
                  percent={item?.per}
                  text={item?.text}
                  check={item?.check}
                />
              );
            })}
          </PerDiv>
        </SectionE>

        <SectionF
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-delay="100"
          data-aos-duration="5000"
        >
          <SecTitle>About Team</SecTitle>
          <SwDiv
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-delay="200"
            data-aos-duration="2000"
          >
            <Swipers
              data={teamList}
              modules={modulesOpt2}
              containerStyle={containerStyle}
              component={<ImgBoxBottom />}
              // slideStyle={slideStyle}
              // className={"www"}
            />
          </SwDiv>
        </SectionF>

        <SectionG
          data-aos="fade-up"
          data-aos-offset="300"
          data-aos-duration="2000"
        >
          <SecTitle>Klaylions Partner</SecTitle>

          <PartnerDIV>
            {partnerList?.map((item, index) => {
              return (
                <PartImgCon key={index}>
                  {/* <img src={item.src} alt={item.alt} /> */}
                </PartImgCon>
              );
            })}
          </PartnerDIV>
        </SectionG>
      </Container>
    </Layout>
  );
};

export default MainPage;
const Container = styled.div`
  max-width: 1920px;
  margin: 0 auto;
`;
const SecTitle = styled.div`
  font-family: "BlackHanSans";
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  /* line-height: 26px; */
  line-height: 1.5;
  text-align: center;
  color: #999999;
  margin-bottom: 118px;
  @media only screen and (max-width: 768px) {
    font-size: calc(100vw * (14 / 428));
    margin-bottom: calc(100vw * (30 / 428));
  }
`;

const SectionADIV = styled.div`
  display: block;
  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;

const ListText = styled.div`
  font-style: normal;
  font-weight: 100;
  font-size: 15px;
  line-height: 26px;

  text-align: center;
  margin-bottom: 10px;
  @media only screen and (max-width: 1250px) {
    font-size: calc(100vw * (15 / 1250));
  }
  @media only screen and (max-width: 768px) {
    font-size: calc(100vw * (10 / 428));
    margin: 0 2px;
    line-height: 1.8;
    word-break: keep-all;
    /* margin-bottom: 0px; */
  }
`;

const DIV = styled.div`
  width: 100%;
`;
const FlexDIV = styled.div`
  display: flex;
  justify-content: flex-start;
  @media only screen and (max-width: 768px) {
    align-items: center;
  }

  ${(props) => (props.column ? `flex-direction: column;` : null)}
`;
const FlexDIVA = styled(FlexDIV)`
  width: 579px;
  align-items: flex-start;
  /* margin-top: 187px; */
  margin-top: 9.5%;
  /* margin-left: 220px; */
  margin-left: 11%;
  @media only screen and (max-width: 768px) {
    width: 44%;
    margin-top: 11%;
    /* margin-left: 5.5%; */
    margin-left: 4.5%;
  }
`;
const Section = styled.section`
  width: 100%;
  margin-bottom: 346px;

  @media only screen and (max-width: 1920px) {
    margin-bottom: calc(100vw * (346 / 1920));
  }
  @media only screen and (max-width: 768px) {
    margin-bottom: calc(100vw * (120 / 428));
  }
`;
const SectionA = styled(Section)`
  width: 100%;
  margin-bottom: 14px;
`;
const SectionB = styled(Section)`
  border-bottom: 1px solid #c4c4c4;
  @media only screen and (max-width: 768px) {
    margin-bottom: calc(100vw * (71 / 428));
    border: none;
  }
`;
const ImgCon = styled.div`
  /* width: 79%; */
  width: calc(100vw * (460 / 1920));
  max-width: 460px;
  @media only screen and (max-width: 768px) {
    width: calc(100vw * (66 / 428));
    margin-bottom: calc(100vw * (15 / 428));
  }
  & img {
    width: 100%;
  }
`;
const SecDImgBox = styled.div`
  width: 692px;
  height: 874px;
  margin: 0 auto;
  background: url("/assets/img/chart.png") no-repeat;
  background-size: contain;
  /* & img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  } */

  @media only screen and (max-width: 1250px) {
    width: calc(100vw * (692 / 1250));
    height: calc(100vw * (874 / 1250));
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
    background: url("/assets/img/chart_res.svg") no-repeat;
    background-size: contain;
    background-position: center center;
  }
`;
const TextWrap = styled.div`
  @media only screen and (max-width: 1600px) {
    width: 80%;
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
  & p {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 100;
    font-size: 18px;
    line-height: 1.5;
    color: var(--white);
    margin-right: 10px;
    @media only screen and (max-width: 1600px) {
      font-size: calc(100vw * (16 / 1600));
    }
    @media only screen and (max-width: 768px) {
      font-size: calc(100vw * (10 / 428));
      line-height: 2;
      word-break: keep-all;
      margin-right: 25px;
    }
  }
`;
const SectionC = styled(Section)``;
const SectionD = styled(Section)``;
const SectionE = styled(Section)`
  @media only screen and (max-width: 768px) {
    /* font-size: calc(100vw * (10 / 428)); */
    margin-bottom: calc(100vw * (40 / 428));
  }
`;
const PerDiv = styled.div`
  width: 100%;
  max-width: 1128px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  flex-wrap: wrap;
  padding-top: 100px;
  @media only screen and (max-width: 1250px) {
    max-width: calc(100vw * (1128 / 1250));
  }
  @media only screen and (max-width: 768px) {
    /* font-size: calc(100vw * (10 / 428)); */
    padding-top: calc(100vw * (30 / 428));
  }
`;
const SectionF = styled(Section)``;

const SnsWrapper = styled.div`
  margin: 55px 0px 14px 0px;
`;
const VideoBox = styled(DIV)`
  width: 47%;
  margin-left: 10px;
  @media only screen and (max-width: 768px) {
    width: 56%;
  }
`;
const Video = styled.video`
  width: 100%;
`;

const SwDiv = styled.div`
  width: 100%;
  position: relative;
  cursor: pointer;
  & .swiper-container {
    overflow: unset;
  }
`;

const SectionG = styled(Section)`
  margin-bottom: 118px;
`;
const PartnerDIV = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;
const PartImgCon = styled.div`
  width: 20%;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #fff;
  box-sizing: border-box;
  & img {
    width: 71%;
    height: 100%;
    @media only screen and (max-width: 768px) {
      width: 90%;
    }
  }
  @media only screen and (max-width: 1920px) {
    height: calc(100vw * (180 / 1920));
  }
  @media only screen and (max-width: 768px) {
    width: 33%;
    height: calc(100vw * (100 / 428));
  }
`;

export const Right = styled.div`
  ${connect}
  width: 295px;
  height: 49px;
  text-align: center;
  margin: 161px auto 0 auto;
  & div span {
    font-size: 22px;
    @media only screen and (max-width: 768px) {
      font-size: calc(100vw * (12 / 428));
    }
  }
  @media only screen and (max-width: 768px) {
    width: calc(100vw * (165 / 428));
    height: calc(100vw * (34 / 428));

    margin: calc(100vw * (39 / 428)) auto 0 auto;
  }
`;

export const Btn = styled.div`
  width: 293px;
  height: 47px;
  @media only screen and (max-width: 768px) {
    width: calc(100vw * (163 / 428));
    height: calc(100vw * (32 / 428));
  }
`;

// const MobileFixbtnContainer = styled.div`
//   width: 60px;
//   height: 60px;
//   position: fixed;
//   right: 0px;
//   bottom: 0px;
//   transform: translate(-100%, -100%) translate3d(0, 0, 0);
//   -webkit-transform: translate3d(0, 0, 0);
//   transform: ;
// `;
// const FixBtnWrap = styled.div`
//   width: 100%;
//   height: 100%;
//   position: relative;
// `;
// const ArrBtn = styled.div`
//   width: 100%;
//   height: 100%;
//   background: red;
//   border-radius: 50%;
// `;
// const BtnSnsWrap = styled.div`
//   & > ul {
//     flex-direction: column;
//     width: 60px;
//     height: auto;
//     position: absolute;
//     bottom: 0px;
//     left: 0px;
//     margin: 0px 0px 0px 0px;
//     transform: translate(0px, -90px);
//   }
//   & li {
//     width: 60px;
//     height: 60px;
//     margin: 0px 0px 30px 0px;
//   }
//   & li:nth-last-of-type(1) {
//     margin: 0px;
//   }
// `;
