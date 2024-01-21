import React, { useEffect, useRef } from "react";
import { Dust, Stock, Weather } from "./WidgetItem";
import { register } from "swiper/element/bundle";

register();

export default function WidgetSlide() {
  const swiperEl = useRef(null);
  useEffect(() => {
    const params = {
      direction: "horizontal",
      freeMode: {
        enabled: true,
        momentum: true,
        momentumRatio: 0.5,
        momentumVelocityRatio: 0.5,
      },
      width: 192,
      spaceBetween: 10,
    };
    Object.assign(swiperEl.current, params);
  }, []);

  return (
    <div>
      <swiper-container ref={swiperEl}>
        <swiper-slide>
          <Weather />
        </swiper-slide>
        <swiper-slide>
          <Dust />
        </swiper-slide>
        <swiper-slide>
          <Stock />
        </swiper-slide>
      </swiper-container>
    </div>
  );
}
