import React from "react";
import classes from "./Widgets.module.css";

export default function Box({ children }) {
  return <div className={classes.box}>{children}</div>;
}
