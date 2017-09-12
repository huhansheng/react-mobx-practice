import React from 'react';
import { Provider } from 'mobx-react';
import { Router, Route, hashHistory } from 'react-router';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import User from './view/User';
import store from './store/store';

export default class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                <Provider store={store}>
                    <Router history={hashHistory}>
                        <Route path="/" component={User} />
                    </Router>
                </Provider>
            </MuiThemeProvider>
        );
    }
}

