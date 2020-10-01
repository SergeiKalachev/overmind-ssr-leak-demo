import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { createOvermind } from "overmind";
import { Provider } from "overmind-react";
import { config } from "./overmind";
import React from "react";
import { hydrate } from "react-dom";

const overmind = createOvermind(config);

hydrate(
  <Provider value={overmind}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept();
}
