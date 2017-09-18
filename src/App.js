import React from 'react';
import { Provider } from 'mobx-react';
import { Router, hashHistory } from 'react-router';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import routesConfig from './router';
import store from './store/store';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <Provider store={store}>
          <Router history={hashHistory} routes={routesConfig} />
        </Provider>
      </MuiThemeProvider>
    );
  }
}

export default App;
