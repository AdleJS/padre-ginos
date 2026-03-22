import React from "react";
import { createRoot } from "react-dom/client";

const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Padre Gino's"),
    React.createElement(Pizza, {
      name: "The Pepperoni Pizza",
      description: "some dope pizza",
    }),
    React.createElement(Pizza, {
      name: "Americano Pizza",
      description: "french fries and hot doggs, wtf Italy",
    }),
    React.createElement(Pizza, {
      name: "The Hawaiian",
      description: "pineapple and ham, wtf America",
    }),
    React.createElement(Pizza, {
      name: "Chicke Pizza",
      description: "chicken nuggets on your pizza, wtf UK",
    }),
    React.createElement(Pizza, {
      name: "Baked Potato Pizza",
      description: "unholy tomato mash, wtf Minnesota",
    }),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
