/*
 *
 * HOME COMPONENT
 *
 */

import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import Header from '../Header';
import BottomBar from '../BottomBar';

const Home = () => (
  <section className="b-home">
    <Header />
    <section className="e-home-img"></section>
    <section className="e-home-main">
      {'Home'}
    </section>
    <BottomBar />
  </section>
);

export default Home;
