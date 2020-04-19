import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ParticlesBg from "particles-bg";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <ParticlesBg
      color="#ffffff"
      type="cobweb"
      bg={true}
      num={100}
    />
  </React.StrictMode>,
  document.getElementById("root")
);
