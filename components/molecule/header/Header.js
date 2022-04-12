import React from "react";
import classes from './header.module.css'

function header() {
  return (
    <div className={classes.header}>
      <div className={classes.pageTitle}>
        <b>HOME</b>
      </div>
    </div>
  );
}

export default header;
 