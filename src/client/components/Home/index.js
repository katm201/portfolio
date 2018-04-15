/*
 *
 * HOME COMPONENT
 *
 */

import React from 'react';

import Header from '../Header';
import BottomBar from '../BottomBar';

const Home = () => (
  <section>
    <Header />
    <section className="e-home-img" />
    <section className="e-main m-home">
      <h1 className="m-header">
        {'Welcome'}
      </h1>
      <p className="m-paragraph">
        {'I\'m a full stack software engineer based in the SF Bay Area specializing in JavaScript frameworks for both frontend and backend development. I\'m at my best when diving into a new problem--building new features, learning new technologies, or tackling hard to solve bugs. I\'m passionate about creating well written, well thoughout, and well organized code that improves user and developer experience alike.'}
      </p>
      <p className="m-paragraph">
        {'Visit my Skills page to view a current list of technologies with which I have experience or visit my Projects page to see coding examples and walkthroughs from personal projects.'}
      </p>
      <span className="m-small">
        {`${decodeURI('%C2%A9')} Katherine Manning 2018`}
      </span>
    </section>
    <BottomBar />
  </section>
);

export default Home;
