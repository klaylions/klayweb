import React from "react";
import GlobalStyle from "./utils/GlobalStyle";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";

import * as Pages from "./pages";

// 페이지 이동시 최상단으로 이동
import ScrollToTop from "./ScrollToTop";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <ScrollToTop />
      <>
        <Routes>
          {/* Main */}
          <Route path="/" element={<Pages.MainPage />} />
          {/* connect ( 지갑연결 ) */}
          <Route path="/connect" element={<Pages.ConnectPage />} />
          {/* mining 페이지 (main -> klc) */}
          <Route path="/mining" element={<Pages.MiningPage />} />
          {/* lionsball 페이지 (mmining -> lionsball) */}
          <Route path="/lionsball" element={<Pages.LionsBallPage />} />
        </Routes>
      </>
    </>
  );
}
