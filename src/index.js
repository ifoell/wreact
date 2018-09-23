import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/App";
import Button from '@material-ui/core/Button';
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
