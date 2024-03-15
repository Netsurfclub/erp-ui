import React from "react";
import ReactDOM from "react-dom/client";

import App from "./components/App";

import { APPLICATION_NAME } from "./constants/app.constants";

const root: ReactDOM.Root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App applicationName={APPLICATION_NAME} />
  </React.StrictMode>,
);
