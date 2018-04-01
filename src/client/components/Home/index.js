/*
 *
 * HOME COMPONENT
 *
 */

import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const Home = () => (
  <div>
    <div>Home</div>
    <RaisedButton
      onClick={() => console.log('hello Home')}
      secondary
    >
      {'Button'}
    </RaisedButton>
  </div>
);

export default Home;
