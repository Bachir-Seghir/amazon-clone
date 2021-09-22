import React from "react";
import ReactDOM from "react-dom";
import SideBarStateProvider from "./contexts/sidebarState";
import App from "./components/App";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/index.css";

ReactDOM.render(
  <React.StrictMode>
    <SideBarStateProvider>
      <App />
    </SideBarStateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
