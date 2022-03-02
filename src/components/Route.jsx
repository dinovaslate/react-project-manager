import React, { Component, useEffect } from "react";

const Route = ({ path, children, setter }) => {
  useEffect(() => {
    const onLocationChange = () => {
      setter(window.location.pathname);
    };
    window.addEventListener("popstate", onLocationChange);

    return () => {
      window.removeEventListener("popstate", onLocationChange);
    };
  }, []);
  return window.location.pathname === path ? children : null;
};

export default Route;
