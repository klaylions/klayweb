import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset};

  :root {
    --main: #00FFD1;
    --white: #ffffff;
    --gray: #666666;
    --title: #999999;
    --text: #dddddd;
  }
  
  @font-face {
    font-family: "BlackHanSans";
    font-weight: 400;
    src:
      url("/assets/font/BlackHanSans-Regular.ttf");
  }

  @font-face {
    font-family: "Pretendard";
    font-weight: 100;
    src:
      url("/assets/font/Pretendard-ExtraLight.otf");
  }

  @font-face {
    font-family: "Pretendard";
    font-weight: 200;
    src:
      url("/assets/font/Pretendard-Light.otf");
  }

  @font-face {
    font-family: "Pretendard";
    font-weight: 300;
    src:
      url("/assets/font/Pretendard-Regular.otf");
  }

  @font-face {
    font-family: "Pretendard";
    font-weight: 400;
    src:
      url("/assets/font/Pretendard-Medium.otf");
  }


  @font-face {
    font-family: "Pretendard";
    font-weight: 600;
    src:
      url("/assets/font/Pretendard-SemiBold.otf");
  }

  @font-face {
    font-family: "Pretendard";
    font-weight: 800;
    src:
      url("/assets/font/Pretendard-Bold.otf");
  }

  @font-face {
    font-family: "Pretendard";
    font-weight: 900;
    src:
      url("/assets/font/Pretendard-ExtraBold.otf");
  }

  body {
    font-family: "Pretendard";
    /* @media screen and (max-width:)  */
    background:#000;
    
  }
  

  ::-webkit-scrollbar {
    width: 2px;
    border-radius: 100px;
  }
  ::-webkit-scrollbar-track {
    background: none;
    border-radius: 100px;
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.5);
    border-radius: 100px;
  }
`;

export default GlobalStyle;
