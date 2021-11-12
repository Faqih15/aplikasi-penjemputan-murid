import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Penjemput from "./Penjemput";
import Guru from "./Guru";
import History from "./History";
import Daftar from "./Daftar";
import Alldata from "./Alldata";
import Daftarun from "./Daftarun";

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
          <Route exact path="/Alldata">
            <Alldata />
          </Route>
          <Route exact path="/Dguru">
            <Daftarun />
          </Route>
        </Switch>
      </Router>
    );
  }
}
