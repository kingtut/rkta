"use strict"

import React from "react";
import { Router, Route, IndexRoute } from "react-router";

import App from "./views/app/app";
import NotFound from "./views/not-found/not-found";

module.exports = () => (
   <Route
      path="/todo"
      component={ App }
   />
);