import { Buffer } from "buffer";
import process from "process";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // Make sure to create an index.css file for global styles

window.process = process;
window.Buffer = Buffer;

// Create a root element and render the App component
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
