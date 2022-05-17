//react

import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import * as S from "./style";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

export default function Swipers({ ...props }) {
  SwiperCore.use([Navigation, Autoplay, Pagination]);
  const [swiper, serSwiper] = useState(null);

  return (
    <>
      <S.Container>
        <Swiper
          {...props.modules}
          style={props.containerStyle}
          // className={props.className}
        >
          {props.data &&
            props.data?.map((item, index) => {
              // {
              //   console.log("??", item, index);
              // }
              return (
                <SwiperSlide style={props.slideStyle} key={index}>
                  {React.cloneElement(props.component, {
                    data: item,
                  })}
                </SwiperSlide>
              );
            })}
        </Swiper>
      </S.Container>
    </>
  );
}
