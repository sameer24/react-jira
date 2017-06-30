import React from 'react';
import ReactDom from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { browserHistory, Router, Route } from 'react-router';
import routes from './routes.js';
import ErrorPageC from './components/ErrorPageC.jsx'

// remove tap delay, essential for MaterialUI to work properly
injectTapEventPlugin();

ReactDom.render((
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <Router history={browserHistory} routes={routes} >
     <Route path="/auth/errorPAge" component={ErrorPageC} />
    </Router>
  </MuiThemeProvider>), document.getElementById('react-app'));