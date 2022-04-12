import React, { Fragment } from "react";
import LeftBar from "../../molecule/sideBars/LeftBar";
import RightBar from "../../molecule/sideBars/RightBar";
import Header from './../../molecule/header/Header';
import Footer from './../../molecule/footer/Footer';

function RootContainer({ children }) {
  return (
    <Fragment>
      <Header />
      <LeftBar />
      <div style={{margin:'70px'}}>{children}</div>
      <RightBar />
      <Footer />
    </Fragment>
  );
}

export default RootContainer;
