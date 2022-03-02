import React, { Component } from "react";
import "../styling/css.css";
const Link = ({ path, children, active, className }) => {
  const onClick = (event) => {
    event.preventDefault();
    window.history.pushState({}, "", path);

    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };
  return (
    <>
      <a
        className={`item ${path === active && "active"} ${className}`}
        onClick={onClick}
        href={path}
      >
        {children}
      </a>
    </>
  );
};

export default Link;
