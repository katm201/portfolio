/*
 *
 * POINT OF ENTRY FOR SERVER
 *
 */

import express from 'express';
import cors from 'cors';
import { json } from 'body-parser'
import { config } from 'dotenv';

import createStore from './helpers/store';
import renderer from './helpers/renderer';

config();
const app = express();

app.use(express.static('public'));
app.use(json());
app.use(cors());

app.get('*', (request, response) => {
  const store = createStore();

  // initialize store with state
  response.send(renderer(request, store));
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
