import React from "react";
import ReactDOM from "react-dom";

import "bulma";
import "./saas/style.scss";
import QBuilder from "./qbuilder";

function App() {
  return (
    <div className="container">
      <div className="column">
        <div className="content">
          <h1>Welcome to the jungle</h1>
          <p>You want query builders? We got 'em</p>
        </div>
      </div>

      <div className="section">
        <div class="column">
          <QBuilder />
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
