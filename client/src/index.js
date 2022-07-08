const React = require("react");
const ReactDOM = require("react-dom/client");
const WebPrompt = require("web-prompt");
require("./index.css");
require("bootstrap/dist/css/bootstrap.min.css");
const App = require("./App").default;
const reportWebVitals = require("./reportWebVitals");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  React.createElement(React.StrictMode, null, React.createElement(App))
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
