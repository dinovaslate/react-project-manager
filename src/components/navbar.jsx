import Link from "./common/link";
import React, { Component } from "react";
import { useMediaQuery } from "react-responsive";
const Navbar = ({ active }) => {
  return (
    <>
      <div className="ui stackable menu" style={{ zIndex: "9999" }}>
        <div className="header item">Repository</div>
        <Link active={active} path="/">
          Home
        </Link>
        <Link active={active} path="/basic">
          Basic
        </Link>
        <Link active={active} path="/comments">
          Comments
        </Link>
        <Link active={active} path="/pics">
          Pics Searcher
        </Link>
        <Link active={active} path="/youtube">
          Mini Youtube
        </Link>
        <Link active={active} path="/widgets">
          React Widgets
        </Link>
      </div>
    </>
  );
};

export default Navbar;
