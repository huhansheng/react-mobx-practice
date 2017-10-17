import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { observer, inject } from 'mobx-react';
import Home from '../view/Home';
import User from '../view/User';
import SpaceReport from '../view/SpaceReport';

@inject(state => ({home: state.store.home}))
@observer
class Routers extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Home}>
          <IndexRoute component={Home} />
          <Route path="/user" component={User} />
          <Route path="/spaceReport" component={SpaceReport} />
        </Route>
      </Router>
    );
  }
}

export default Routers;
