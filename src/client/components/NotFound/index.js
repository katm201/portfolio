/*
 *
 * NOT FOUND COMPONENT
 *
 */

import React from 'react';
import ErrorIcon from 'material-ui/svg-icons/alert/error';

import Header from '../Header';
import BottomBar from '../BottomBar';

const NotFound = () => (
  <section>
    <Header />
    <section className="e-main m-notfound">
      <div className="m-center-icon">
        <ErrorIcon style={{ height: '110px', width: '110px' }} />
      </div>
      <h1 className="m-header m-center">
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
