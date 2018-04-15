/*
 *
 * ROUTING LOGIC FOR BOTH CLIENT AND SERVER
 *
 */

import React from 'react';
import { Route } from 'react-router-dom';

import Home from './components/Home';
import NotFound from './components/NotFound';

export default () => (
  <div>
    <Route exact path="/" component={Home} />
    <Route exact path="/NotFound" component={NotFound} />
  </div>
);
