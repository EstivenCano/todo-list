import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const renderApp = () =>
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("root")
  );

if (process.env.NODE_ENV === "development") {
  import("./mocks/browser").then(({ startMockServiceWorker }) => {
    startMockServiceWorker().then(() => {
      console.log("mocking enabled");
      renderApp();
    });
  });
} else {
  renderApp();
}

reportWebVitals();
