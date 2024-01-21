import React from "react";
import Box from "./Box";
import classes from "./Widgets.module.css";

export function Weather() {
  return (
    <Box>
      <div className={classes.left}>
        <span className={classes.temperature}>-0.9℃</span>
        <span className={classes.description}>어제보다 1.3℃ 낮아요</span>
      </div>
      <figure className={classes.right}>
        <img className={classes.img} src="assets/partly_cloudy.png" alt="구름 조금" />
      </figure>
    </Box>
  );
}

export function Dust() {
  return (
    <Box>
      <div className={classes.left}>
        <span className={classes.dust}>11 좋음</span>
        <span className={classes.description}>미세먼지</span>
      </div>
      <figure className={classes.right}>
        <img className={classes.img} src="assets/fine_dust.png" alt="미세먼지 좋음" />
      </figure>
    </Box>
  );
}

export function Stock() {
  return (
    <Box>
      <div className={classes.left}>
        <span className={classes.stock}>859.65</span>
        <span className={classes.description}>
          코스닥 <span className={classes.percentage}>⏷ 0.97%</span>
        </span>
      </div>
      <div className={classes.right}></div>
    </Box>
  );
}
