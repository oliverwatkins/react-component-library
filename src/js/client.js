import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, HashRouter} from "react-router-dom";

import Main from "./Main";

const app = document.getElementById('app');

ReactDOM.render(
    <HashRouter>
      <Main/>
    </HashRouter>,
app);
