/*
 *
 * ENTRY POINT FOR CLIENT-SIDE APP
 *
 */

import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Routes from './Routes';
import reducers from './reducers';
import muiTheme from './assets/muiTheme';
import './assets/stylesheets/stylesheet.css';

const store = createStore(reducers, {}, applyMiddleware(thunk));

hydrate(
  <MuiThemeProvider muiTheme={muiTheme} >
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('app'),
);
