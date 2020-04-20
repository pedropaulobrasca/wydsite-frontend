import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ParticlesBg from "particles-bg";

ReactDOM.render(
  <React.StrictMode>
    <div className="app-container">
      <App/>
      <ParticlesBg
        color="#ffffff"
        type="cobweb"
        bg={true}
        num={100}
        config={{
          position: "fixed",
        }}
      />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
