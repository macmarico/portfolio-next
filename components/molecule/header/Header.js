import React from "react";
import classes from './header.module.css'

function header() {
  return (
    <div class={classes.header}>
      <div class={classes.pageTitle}>
        <b>HOME</b>
      </div>
    </div>
  );
}

export default header;
 