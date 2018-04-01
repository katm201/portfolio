/*
 *
 * NOT FOUND COMPONENT
 *
 */

import React from 'react';

import Header from '../Header';
import BottomBar from '../BottomBar';

const NotFound = () => (
  <section>
    <Header />
    <section className="e-home-main">
      <h1 className="m-header">
        {'Page Not Found'}
      </h1>
      <span className="m-small">
        {`${decodeURI('%C2%A9')} Katherine Manning 2018`}
      </span>
    </section>
    <BottomBar />
  </section>
);

export default NotFound;
