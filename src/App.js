import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Penjemput from "./Penjemput";
import Guru from "./Guru";
import History from "./History";
import Daftar from "./Daftar";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Daftar />
          </Route>
          <Route exact path="/Penjemput">
            <Penjemput />
          </Route>
          <Route exact path="/Guru">
            <Guru />
          </Route>
          <Route exact path="/History">
            <History />
          </Route>
        </Switch>
      </Router>
    );
  }
}
