import React, { Component, useState, useEffect } from "react";
import Navbar from "./components/navbar";
import Route from "./components/Route";
import Welcome from "./components/welcome";
import App1 from "./projects/udemy-1/App";
import App2 from "./projects/udemy-2/App";
import App4 from "./projects/udemy-4/App";
import App5 from "./projects/udemy-5/App";
import App6 from "./projects/udemy-6/App";

function App() {
  const [active, setActive] = useState(window.location.pathname);

  return (
    <>
      <Navbar active={active} />
      <div style={{ zIndex: "-9999" }}>
        <Route path="/" setter={setActive}>
          <Welcome />
        </Route>
        <Route path="/basic" setter={setActive}>
          <App1 />
        </Route>
        <Route path="/comments" setter={setActive}>
          <App2 />
        </Route>
        <Route path="/pics" setter={setActive}>
          <App4 />
        </Route>
        <Route path="/youtube" setter={setActive}>
          <App5 />
        </Route>
        <Route path="/widgets" setter={setActive}>
          <App6 />
        </Route>
      </div>
    </>
  );
}

export default App;
