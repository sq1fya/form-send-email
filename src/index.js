import React from "react";
import { render } from "react-dom";
import { Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import Home from "./Home";

const options = {
  timeout: 5000,
  position: "bottom center"
};

const App = () => (
  <Provider template={AlertTemplate} {...options}>
    <Home />
  </Provider>
);

render(<App />, document.getElementById("root"));
