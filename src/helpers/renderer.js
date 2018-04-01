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
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import template from './html-template';
import Routes from '../client/Routes';
import { palette, avatar } from '../client/assets/muiTheme';

export default function (request, store) {
  const router = (
    <MuiThemeProvider muiTheme={getMuiTheme(palette, avatar, { userAgent: request.headers['user-agent']})} >
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
