import React from "react";
import ReactDOM from "react-dom/client";

import App from "App";
import "index.css";
import { SnackbarProvider } from "notistack";
import { RecoilRoot } from "recoil";
import reportWebVitals from "reportWebVitals";

import "@fontsource/roboto";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <RecoilRoot>
    <SnackbarProvider>
      <App />
    </SnackbarProvider>
  </RecoilRoot>
);

reportWebVitals();
