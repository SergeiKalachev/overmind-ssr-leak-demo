import React from "react";
import App from "./App";

import { createOvermind } from "overmind";
import { Provider } from "overmind-react";
import { config } from "./overmind";

const overmind = createOvermind(config);

const Root = () => (
  <Provider value={overmind}>
    <App />
  </Provider>
);

export default Root;
