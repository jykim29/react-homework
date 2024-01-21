import React from "react";
import classes from "./Layout.module.css";

export function Container({ children }) {
  return <div className={classes.container}>{children}</div>;
}
