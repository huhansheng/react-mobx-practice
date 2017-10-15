import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { observer, inject } from 'mobx-react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Home from '../view/Home';
import User from '../view/User';

@inject(state => ({home: state.store.home}))
@observer
class Routers extends React.Component {
  render() {
    console.log(this.props);
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(this.props.home.theme)}>
        <Router history={hashHistory}>
          <Route path="/" component={Home}>
            <Route path="/user" component={User} />
          </Route>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default Routers;
