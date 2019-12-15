import { Route, BrowserRouter as Router } from "react-router-dom";

import App from "./container";
import React from "react";

const AppRouter = () => (
  <Router>
    <Route path="/" component={App} />
  </Router>
);

export default AppRouter;
