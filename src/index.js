import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./components/App";
import SideBarStateProvider from "./contexts/sidebarState";

ReactDOM.render(
  <React.StrictMode>
    <SideBarStateProvider>
      <App />
    </SideBarStateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
