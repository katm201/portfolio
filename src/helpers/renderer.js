/*
 *
 * RENDERING LOGIC FOR SERVER
 *
 */

import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import template from './html-template';
import Routes from '../client/Routes';
import muiTheme from '../client/assets/muiTheme';

export default function (request, store) {
  const router = (
    <MuiThemeProvider muiTheme={muiTheme} >
      <Provider store={store}>
        <StaticRouter location={request.path} context={{}}>
          <Routes />
        </StaticRouter>
      </Provider>
    </MuiThemeProvider>
  );
  const content = renderToString(router);
  return template(content);
}
